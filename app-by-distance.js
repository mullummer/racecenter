// run script in javascript console on the live data page (https://racecenter.letour.fr/en/)
var default_settings = {
    riders: [],
    mycolor: '#ff4500',
    min_gap: 4,
    max_slow_speed: 5,
    beep_for_all: false,
    refresh_rate: 1
}

var show_bibs = false;
d = new Date();
var year = d.getUTCFullYear();
d = new Date(year,d.getUTCMonth(),d.getUTCDate(),d.getUTCHours()+2,0,0);
var today = d.toISOString().split('T')[0]; // yyyy-mm-dd
var xmlhttp = new XMLHttpRequest();
var peloton = [];
var teams = [];
var stages = [];
var segments = [];
var efforts = [];
var loadcount = 0;
var velofacts = new EventSource('/live-stream');
var paused = false;
var selected_team = '';
var race = location.hostname + '-' + year;
var currentStage;
var todaysSegments = [];
var settings;
var selectedRider;
var selectedSegment;
var stageDistance;
var segmentMapping = [];
var route = [];

if(!localStorage.getItem(race + '-settings')) {
    settings = default_settings;
} else {
    console.log('load settings');
    settings = eval('(' + localStorage.getItem(race + '-settings') + ')');
}

str_pad_left = function(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
};
pretyTime = function(s) {
    var minutes = Math.floor(s / 60);
    var seconds = s - minutes * 60;
    return minutes + ':' + str_pad_left(seconds, '0', 2);
};

selectTeam = function() {
    var jersey = document.getElementsByClassName("teamJersey");
    [].forEach.call(jersey, function(el) {
        el.classList.remove("selected");
    });
    
    //jersey.classList.remove("selected");
    var this_id = this.getAttribute('data-id');
    if (this_id == selected_team) {
        // reset
        selected_team = '';
        this.classList.remove("selected");
    } else {
        selected_team = this_id;
        this.classList.toggle("selected");
    }
    return false;
};

togglePause = function() {
    paused = !paused;
    document.getElementById('pause-icon').className = (paused) ? 'fas fa-play-circle' : 'fas fa-pause-circle';
    // paused, onclick for every rider
    if (paused) {
        var riderlist = document.getElementsByClassName('rider');
        for (var i=0; i < riderlist.length; i++) {
            riderlist[i].onclick = function () {
                var r = this.id.substring(1);
                console.log('selected:' + r);
                riderCard(r);
            }
        }
    }

    return false;
};

// no dark claas
document.body.className = document.body.className.replace("body--dark","");

var style = document.createElement('style');
style.innerHTML = '.group {border-bottom: 2px solid #ba4a19; margin-bottom: 3px; font-size: 11px; color: #333} .yellow div { background-color: #ff0; border: 1px solid #ffb700; } .green div { background-color: #45AE51; color: #fff}  .orange div { background-color: '+ settings.mycolor +'; color: #fff}  .slow span {color: #fff; background-color: #000} .team {color:#fff; background-color: #ba4a19; } #q-app {padding: 10px} #pause, #button-settings, #button-peloton, #button-segments {font-size: 40px; margin-left: 2px} .group div div { padding-left: 2px; padding-right: 2px;} #toolbar { display: flex; background: #fee5d9; padding: 10px; border-bottom: 2px solid #ba4a19; align-items: center } #toolbar > img { width: 72px; } #jerseyWrapper { display: flex;margin: auto; align-items: center; } .row { justify-content: center; } .selected { background: #ffa47b; } .fas { color: #ba4a19; } .row>.col-md-2 { padding: 2px 5px } .teamJersey:hover { background: #ffa47b; } #toolbar .distance { padding-left: 10px; font-size: 24px }';
style.innerHTML += ' #jerseyWrapper a {width: 2.5%} #jerseyWrapper img {max-width:100%}';
style.innerHTML += ' .darkblue div {background-color: #00008b; color: #fff}';
style.innerHTML += ' .babyblue div {background-color: #BFD7ED}';
style.innerHTML += ' .red div {background-color: #ff0000; color: #fff}';
style.innerHTML += ' .grey div {background-color: #aaa;}';
style.innerHTML += ' .pink div {background-color: #FFB6C1;}';
style.innerHTML += ' #settings { display: none} #settings input {width: 500px;}';
style.innerHTML += ' .bib {background-color: #fff; color: #000; font-size: 8px; border: 1px solid #000; padding-left: 1px; padding-right: 1px;}';
style.innerHTML += ' .color {border: 1px solid #000; padding: 2px; } .color div {height: 65px;} ';
style.innerHTML += ' h4 { background-color: #fee5d9; border-bottom: 1px solid #ba4a19 } ';
style.innerHTML += ' #efforts { padding: 8px} #efforts table {width: 100%} #efforts td { padding: 2px} ';
style.innerHTML += ' #efforts table td, #efforts table th { text-align: right} ';
style.innerHTML += ' #efforts table td.l { text-align: left} ';
style.innerHTML += ' #segments_form { padding-top: 5px; padding-bottom: 5px;} ';
style.innerHTML += ' #form_start, #form_end { width: 80px;} ';
style.innerHTML += ' #segment_list > div { border-bottom: 1px solid #000} ';
style.innerHTML += ' #efforts a{ color: #fc5200} ';


document.head.appendChild(style);

// html
document.getElementById("q-app").innerHTML = '<div id="toolbar"><a href="#" id="pause"><i id="pause-icon" class="fas fa-pause-circle"></i></a><a href="#" id="button-settings"><i id="settings-icon" class="fas fa-wrench"></i></a><a id="button-peloton"><i id="peloton-icon" class="fas fa-bicycle"></i></a><a id="button-segments"><i id="segments-icon" class="fas fa-clock"></i></a><span class="distance"><span id="distance">...</span> km</span><div id="jerseyWrapper"></div></div><div id="settings"></div><div id="ridercard" class="row"></div><div id="rows">&nbsp; waiting for data...</div><div id="segments" class="row"><div id="segments_form"></div><div class="row"><div id="segment_list" class="col-3"></div><div id="efforts" class="col-9"></div><div id="effort_details"></div></div></div>';

// segments
document.getElementById('segments_form').innerHTML = '<p>Segment in stage <select id="form_stage"></select> starts at (km) <input id="form_start" type="number"> and ends at <input id="form_end" type="number">. Name: <input id="form_name" type="text"><button id="form_button">Add Segment</button>'


// settings
saveSettings = function () {
    localStorage.setItem(race + '-settings',JSON.stringify(settings));
}

// min_gap
document.getElementById("settings").innerHTML += 'A new groups is formed when a gap is at least <select id="min_gap"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select> seconds<br><br>';

// max_slow_speed
document.getElementById("settings").innerHTML += 'Mark rider when a rider\'s speed drops below <select id="max_slow_speed"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select> km/h<br><br>';


// click events
// pause button
document.getElementById("pause").onclick = togglePause;
// settings button
document.getElementById("button-settings").onclick = function () {
    var settings_layer = document.getElementById("settings");
    if (settings_layer.style.display !== "block") {
        settings_layer.style.display = "block";
        show_bibs = true;
    } else {
        settings_layer.style.display = "none";
        show_bibs = false;
    }
    return false;
};

showTab = function (id) {
    document.getElementById("rows").style.display = (id == 'rows') ? 'block' : 'none';
    document.getElementById("segments").style.display = (id == 'segments') ? 'block' : 'none';
}
showTab('rows');
document.getElementById("button-peloton").onclick = function () { showTab('rows')};
document.getElementById("button-segments").onclick = function () { showTab('segments')};

loadRiders = function (xhttp) {
    // Proces the riders json
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var tmp = JSON.parse(xhttp.responseText);
        var counter = 0;
        for (var i = 0; i < tmp.length; i++) {
            if (tmp[i].bib) {
                peloton[tmp[i].bib] = tmp[i];
                counter++;
            }
        }
        loadcount++;
        document.getElementById('rows').innerHTML += '<br>' + counter + ' riders loaded';
    }
};

loadTeams = function (xhttp) {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        teams = JSON.parse(xhttp.responseText);
        // team jerseys
        for (var i=0; i<teams.length; i++) {
            document.getElementById('jerseyWrapper').innerHTML += '<a href="#" class="teamJersey" id="team' + i + '" data-id="' + teams[i]._id + '" title="'+teams[i].name+'"><img src="' + teams[i].jersey_sm + '"></a>';
        }
        for (var i = 0; i < teams.length; i++) {
            var thisButton = document.getElementById("team" + i);
            thisButton.onclick = selectTeam;
        }
        loadcount++;
        document.getElementById('rows').innerHTML += '<br>' + teams.length + ' teams loaded';
    }
}

loadGPS = function (xhttp) {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        route = xhttp.responseText.split('\n');
        console.log('route loaded - ' + route.length);
    } else {
        console.log('route error - '  + xhttp.status);
    }
}

loadStages = function (xhttp) {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var tmp = JSON.parse(xhttp.responseText);
        tmp.sort(function (a,b) {if (a.date < b.date) {return -1} else {return 1}})
        var first_date = '9999-99-99';
        var last_date = '0000-00-00';
        daySelect = document.getElementById('form_stage');
        for (var i=0; i<tmp.length; i++) {
            stage_date = tmp[i].date.substring(0,10);
            if (stage_date > last_date) last_date = stage_date;
            if (stage_date < first_date) first_date = stage_date;
            // stage name
            tmp[i].name = 'Stage ' + tmp[i].stage + ' - ' + tmp[i].arrivalCity.label;

            stages[stage_date] = tmp[i];
            // add options to form
            myOption = document.createElement("option");
            myOption.text = tmp[i].name;
            myOption.value = stage_date;
            daySelect.appendChild(myOption);
        }
        daySelect.onchange = function () {showSegments(this.value)}
    
        // the official distance differs from the distance used in the gps files
        stages['2025-07-05'].length = 184.83;
        stages['2025-07-06'].length = 209.06;
        stages['2025-07-07'].length = 178.25;
        stages['2025-07-08'].length = 174.14;
        stages['2025-07-09'].length = 32.91;
        stages['2025-07-10'].length = 201.49;
        stages['2025-07-11'].length = 196.98;
        stages['2025-07-12'].length = 171.3;
        stages['2025-07-12'].profile = '/profils/2025/profile-08-25a8355af8a78a674e8303508b6eccc.csv';
        stages['2025-07-13'].length = 174.09;
        stages['2025-07-13'].profile = '/profils/2025/profile-09-64fcfe9220f7b0cef5dc0bdee9fbcffe.csv';
        stages['2025-07-14'].length = 165.26;

        stages['2025-07-16'].length = 156.7;
        stages['2025-07-17'].length = 180.54;
        stages['2025-07-18'].length = 10.87;
        stages['2025-07-19'].length = 182.53;
        stages['2025-07-20'].length = 169.27;

        stages['2025-07-22'].length = 171.41;
        stages['2025-07-23'].length = 160.35;
        stages['2025-07-24'].length = 171.48;
        stages['2025-07-25'].length = 129.9;
        stages['2025-07-26'].length = 184.12;
        stages['2025-07-27'].length = 132.25;


        if (today < first_date) today = first_date;
        if (today > last_date) today = last_date;
        daySelect.value = today;

        // load the profile data
        if (stages[today].profile) {
            loadData(stages[today].profile, loadGPS);
        }

        currentStage = stages[today];
        stageDistance = currentStage.length;
        loadcount++;
        document.getElementById('rows').innerHTML += '<br>' + tmp.length + ' stages loaded';

        readSegments();
        showSegments(today);
    }
}


haversineDistance = function(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
  
    const toRadians = (degrees) => degrees * (Math.PI / 180);
  
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // distance in kilometers
}

snapToRoute = function (lat,long) {
    var shortest = 9999;
    var index = 1; // row 1 contains a header
    var end = false;
    var result = {};
    const step = 0.035; // the route contains gps points for every 20 meters - EDIT, No, there are sometimes gaps of 40 meters

    while (!end && index < route.length) {
        var line = route[index].split(';');
        lat2 = line[0];
        long2 = line[1];

        var distance = haversineDistance(lat,long,lat2,long2);
        if (distance < shortest) {
            shortest = distance;
            result.latitude = lat2;
            result.longitude = long2;
            result.altitude = line[2];
            result.kmdone = line[7];
            result.kmtogo = line[8];
            result.delta = distance;
            result.index = index;
        }

        if (distance > (10 * step)) {
            // larger than 200 meters
            index += parseInt((distance - 9*step) / step);
        } else {
            index++;
        }

        // if the gap grows and the shortest distance is small enough, let's finish searching
        if (distance > shortest + 5 * step && shortest < 5 * step) {
            end = true;
        }
    }

    result.error = (shortest > 5 * step);

    return result;
}


addSegment = function (d,start,end,name,strava) {
    start = parseFloat(start);
    end  = parseFloat(end);
    if (name == '') {name = 'Segment ' + start + ' - ' + end}
    if (end > start) {
        var id = crypto.randomUUID();
        segments.push(
            {
                "id" : id,
                "date" : d,
                "start" : start,
                "end" : end,
                "name" : name,
                "strava" : strava,
                "distance" : end - start
            }
        )
    }
}

generateSegments = function  () {
    var version = 0;
    if (localStorage.getItem(race + '-version')) {
        version = parseInt(localStorage.getItem(race + '-version'));
    }
    if (version < 10) {
/*
addSegment('2024-08-17',45.76,57.78,'Col de la Serra',36912429);
addSegment('2024-08-17',57.88,69.88,'Col de la Serra - descent',0);
addSegment('2024-08-17',152.54,156.56,'Les Villards -> St Jean',16411751);
addSegment('2024-08-17',159.4,166.24,'Montée du Chinaillon',36912462);
*/

	    /*
        addSegment('2024-06-29',39.94,44.54,'San Godenzo(fine paese)-->Cavallino(bivio 3 faggi)',3924978)
		*/
        }
    if (version < 11) {
/* 
addSegment('2024-08-18',78.84,87.3,'First part Glandon',0);
addSegment('2024-08-18',89.38,98.02,'Part Col du Glandon',1872395);
addSegment('2024-08-18',98.52,120.16,'Col du Glandon long descent',0);
addSegment('2024-08-18',136.12,148.18,'Alpe d\'Huez',652851);
*/
        }
    localStorage.setItem(race + '-version','11');
}

readSegments = function () {
    var s = localStorage.getItem(race + '-segments');
    if (s) {
        s = eval(s);
        segments = eval(s);
        segmentMapping();
        for (var i=0; i < segments.length; i++) {
            readEfforts(segments[i].id);
        }
    }
    generateSegments();
    saveSegments();
}

segmentMapping = function () {
    for (var i=0; i < segments.length; i++) {
        segmentMapping[segments[i].id] = i;
    }
}

saveSegments = function () {
    localStorage.setItem(race + '-segments',JSON.stringify(segments));
    segmentMapping();
}

deleteSegment = function(id) {
    // remove efforts
    efforts[id] = null;
    saveEfforts(id);

    // remove segment
    var idx = false;
    for (var i=0; i < segments.length; i++) {
        if(segments[i].id == id) {
            idx = i;
        }
    }
    segments.splice(idx,1);
    saveSegments();
    if (id == selectedSegment) {
        selectedSegment = '';
        document.getElementById('efforts').innerHTML = '';
    }

    showSegments(today);
}


readEfforts = function (id) {
    if (localStorage.getItem(id)) {
        efforts[id] = eval(localStorage.getItem(id,JSON.stringify(efforts[id])));
    } else {
        efforts[id] = [];
    }
}

saveEfforts = function (id) {
    localStorage.setItem(id,JSON.stringify(efforts[id]));
}

compareEffort = function (a, b) {
    if (a && b) {
        var ca = (!a.duration) ? 10000000 + (!a.starttime ? 10000000 : a.starttime) : a.duration;
        var cb = (!b.duration) ? 10000000 + (!b.starttime ? 10000000 : b.starttime) : b.duration;
        if (ca < cb) {
            return -1
        } else if (ca > cb) {
            return 1
        }
        return 0
    } else return 2;
}

effortDetails = function(bib){
    var effort = efforts[selectedSegment][bib];
    var html = '<br><br><h4>Effort Details'+riders[bib].lastname + ' ' + riders[bib].lastname +'</h4><table>';
    html += '<tr><td></td><td>Before start</td><td>After start</td><td>Before end</td><td>After end</td></tr>';
    html += '<tr id="effort_time"><td>Time</td><td class="bs"></td><td class="as"></td><td class="be"></td><td class="ae"></td></tr>';
    html += '<tr id="effort_distance"><td>Km to finish</td><td class="bs"></td><td class="as"></td><td class="be"></td><td class="ae"></td></tr>';
    html += '<tr id="effort_longitude"><td>Longitude</td><td class="bs"></td><td class="as"></td><td class="be"></td><td class="ae"></td></tr>';
    html += '<tr id="effort_latitude"><td>Latitude</td><td class="bs"></td><td class="as"></td><td class="be"></td><td class="ae"></td></tr>';
    html += '</table>';
    document.getElementById('')
    if (effort.beforeStart) {

    }
}

wkg = function(low, high, distance, duration, RiderWeight) {

    var result = {};

	// used constants and settings
    var celsius = 20;
	var ZeroKelvin = -273.15;
	var BikeWeight = 8.2;
	var P0  = 101325;
	var Rs = 287.058;
	var CwaHigh = 0.3500;
	var CwaLow = 0.2625;    
	var FrictionCoefficient = 0.0050;
	var g = 9.80665;

	// Velocity
	var Velocity = 1000 * distance / duration; // m/s
    var VelocityKmh = distance / (duration / 3600); // km/h
    result.velocity = Math.round(VelocityKmh*10)/10;


	// ********* Air Density
	// Convert celsius to Kelvin
	var T = celsius - ZeroKelvin;
	// Air Pressure
	var p = P0 * (1-6.5*((high - low)/2)/288000) ** 5.256;
	// Air Density
	var AirDensity = p / (Rs * T);

	// Slope
	var Slope = (high - low) / (distance * 1000);

	// Power Air
	var PowerAirHigh = 0.5 * CwaHigh * AirDensity * Velocity ** 3;
	var PowerAirLow = 0.5 * CwaLow * AirDensity * Velocity ** 3;
    result.PowerAirHigh = PowerAirHigh;
    result.PowerAirLow = PowerAirLow;

	// Power Rolling Resistance
	var PowerRolling =  (RiderWeight + BikeWeight) * g * FrictionCoefficient * Velocity;

	// Power Climb
	var VelocityClimb = (Slope * Velocity) / Math.sqrt(1 + Slope * Slope);
	var PowerClimb = (RiderWeight + BikeWeight) * g * VelocityClimb;

	// Total Power
	var PowerTotalHigh = PowerAirHigh + PowerRolling + PowerClimb;
    result.powerTotalHigh = Math.round(PowerTotalHigh);
	var PowerTotalLow = PowerAirLow + PowerRolling + PowerClimb;
    result.powerTotalLow = Math.round(PowerTotalLow);

    // W/kg
    result.wkgHigh = Math.round(10 * PowerTotalHigh / RiderWeight)/10;
    result.wkgLow = Math.round(10 * PowerTotalLow / RiderWeight)/10;

	// Return the result of the function
	return result;
}

calcTime = function (data, stageDistance) {
    // calculate timeFromStart by using distance and average speed
    var result = {};
    var speed = data.kphAvg;
    var t = data.timeStamp;
    var distance = stageDistance - data.kmToFinish;
    var seconds = (distance / speed) * 3600.0;
    result.seconds = seconds;
    result.timeFromStart = pretyTime(seconds);
    var t = data.timeStamp - seconds;
    t = new Date(t * 1000);
    console.log(t);
    result.start = t.toTimeString().substring(0,8);
    result.kph = speed;
    result.distance = distance;
    return result;
}


showEfforts = function (idx) {
    if (segments[idx]) {
        var segment = segments[idx];
    } else {
        var segment = segments[segmentMapping[idx]];
    }
    var start_altitude = 0;
    var start_altitude_count = 0;
    var end_altitude = 0;
    var end_altitude_count = 0;
    // remember for auto represh
    selectedSegment = segment.id;
    var stage = stages[segment.date];
    // titles
    var html = '<h2><span id="stage_title">' + stages[segment.date].name + '</span></h2>';
    html += '<p><span id="segment_title">' + segment.name + '</span>'
    if (segment.strava) html += ' <a target="_blank" style="color: fc5200" href="https://www.strava.com/segments/' + segment.strava + '">View on strava</a>';
    html += ' | from ' + Math.round(segment.start * 100) / 100 + 'km to ' + Math.round(segment.end * 100)/100 + 'km | distance ' + Math.round((segment.end - segment.start)*100)/100 +'km | starts at '+Math.round((stage.length - segment.start)*100)/100+'km to go</p>';
    html += '<p>start altitude <span id="start_altitude">NA</span>, end altitude <span id="end_altitude">NA</span>, gradient <span id="gradient">NA</span>  </p>';
    html += '<p><button id="button_download">Download Results</button> <button id="button_segment_delete">Delete Segment</button></p>';
    html += '<p></p>';
    var selected_efforts = efforts[segment.id];
    var show_efforts = [];
    // collect efforts that have started
    if (selected_efforts) {
        for (var bib=0; bib < selected_efforts.length; bib++) {
            var effort = selected_efforts[bib];
            if (effort && effort.starttime) {
                effort.bib = bib;
                if (effort.beforeStart) {
                    start_altitude += effort.beforeStart.mAlt;
                    start_altitude_count++;
                }
                if (effort.afterStart) {
                    start_altitude += effort.afterStart.mAlt;
                    start_altitude_count++;
                }
                if (effort.beforeEnd) {
                    end_altitude += effort.beforeEnd.mAlt;
                    end_altitude_count++;
                }
                if (effort.afterEnd) {
                    end_altitude += effort.afterEnd.mAlt;
                    end_altitude_count++;
                }
                show_efforts.push(effort);
            }
        }
    }
    var gradient;
    if (start_altitude_count > 0) {
        start_altitude = parseInt(start_altitude / start_altitude_count);
    }
    if (end_altitude_count > 0) {
        end_altitude = parseInt(end_altitude / end_altitude_count);
        gradient = 100 * (end_altitude - start_altitude) / (1000 * (segment.end - segment.start));
    }


    // order by duration / starttime
    show_efforts.sort(compareEffort);
    // generate table with results 
    html += '<div id="efforts_download"><table id="efforts_table">';
    html += '<thead><tr><th><br>bib</th><th></th><th><br>Started</th><th><br>Finished</th><th><br>Duration</th><th>W/kg<br>Full drafting</th><th>W/kg<br>No drafting</th><th><br>km/h</th></tr></thead>'
    for(var i=0; i < show_efforts.length; i++) {
        var e = show_efforts[i];
        var t1 = new Date(e.starttime * 1000);
        t1 = t1.toTimeString().substring(0,8);
        var t2 = (e.endtime) ? new Date(e.endtime * 1000) : '';
        if (t2 != '') t2 = t2.toTimeString().substring(0,8);

        var details = wkg(start_altitude, end_altitude, segment.end - segment.start, e.duration, 65);
        html += '<tr><td>' + e.bib + '</td><td class="l">' + peloton[e.bib].lastnameshort + ' ' + peloton[e.bib].firstname;
        html += '</td><td>' + t1;
        /*
        if (t1) {
            realtime = calcTime(effort.afterStart, stage.length);
            html += '</td><td>' + realtime.start + '|' + realtime.seconds + '|' + realtime.timeFromStart + '|' + realtime.kph + '|' + realtime.distance;
        } else {
            html += '</td><td>';
        }
        */
        html += '</td><td>' + t2;
        if (t1 && t2) {
            html += '</td><td>' + pretyTime(e.duration);
            if (gradient >= 3.0) {
                html += '</td><td>' + details.wkgLow;
                html += '</td><td>' + details.wkgHigh;
            } else {
                html += '</td><td></td><td>';
            }
            html += '</td><td>' + details.velocity;
        } else {
            html += '</td><td></td><td></td><td></td><td>';
        }
        html += '</td></tr>';
    }

    html += '</table></div>';
    html += '<br><p>W/kg numbers are based on 65kg rider and 8.2kg Bike+gear</p>'

    // show results
    document.getElementById('efforts').innerHTML = html;

    if (start_altitude_count > 0) {
        document.getElementById('start_altitude').innerHTML = start_altitude + 'm';
    }
    if (end_altitude_count > 0) {
        document.getElementById('end_altitude').innerHTML = end_altitude + 'm';
        gradient = Math.round(gradient * 10) / 10;
        document.getElementById('gradient').innerHTML = gradient + '%';
    }
    document.getElementById('button_download').onclick = downloadResults;
    document.getElementById('button_segment_delete').onclick = function () {
        if (document.getElementById('button_segment_delete').innerHTML == 'Delete Segment') {
            document.getElementById('button_segment_delete').innerHTML = 'Click again to delete';
        } else {
            deleteSegment(selectedSegment);
        }
    };
    
}

showSegments = function (day) {
    // today's segments for adding efforts
    todaysSegments = [];
    for (var i = 0; i < segments.length; i++) {
        if (segments[i].date == today) {
            todaysSegments.push(segments[i]);
        }
    }
    // segments for selection of efforts
    var html = '';
    for (let s in stages) {
        if (s >= day) {
            html += '<h4>' + stages[s].name + '</h4>';
            for (var i = 0; i < segments.length; i++) {
                if (segments[i].date == s) {
                    html += '<div><a class="cursor-pointer" idx="'+i+'" id="' + segments[i].id + '">'+segments[i].name+'</a></div>';
                }
            }
        }
    }
    document.getElementById('segment_list').innerHTML = html;
    for (var i = 0; i < segments.length; i++) {
		if (document.getElementById(segments[i].id)) {
			document.getElementById(segments[i].id).onclick=function () {
				showEfforts(this.getAttribute('idx'));
			}
		}
    }
}

mySegment = function() {
    addSegment(
        document.getElementById('form_stage').value,
        document.getElementById('form_start').value,
        document.getElementById('form_end').value,
        document.getElementById('form_name').value
    );
    saveSegments();
    showSegments(today);
    document.getElementById('form_start').value = '';
    document.getElementById('form_end').value = '';
    document.getElementById('form_name').value = '';
}
document.getElementById('form_button').onclick = mySegment;


download = function (text, filename){
    var blob = new Blob([text], {type: "text/html"});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}


playBeep = function(frequency = 440, duration = 500) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
        audioCtx.close(); // Close the audio context when done to save resources
    }, duration);
}


downloadResults = function () {
    download(document.getElementById('efforts_download').innerHTML,(document.getElementById('stage_title').innerHTML + '-' + document.getElementById('segment_title').innerHTML).replace(/[^a-zA-Z0-9]/g, '-'));
}

// settings form
document.getElementById('min_gap').value = settings.min_gap;
document.getElementById('min_gap').addEventListener("change", function() { 
    settings.min_gap = document.getElementById('min_gap').value;
    saveSettings();
});
document.getElementById('max_slow_speed').value = settings.max_slow_speed;
document.getElementById('max_slow_speed').addEventListener("change", function() { 
    settings.min_gap = document.getElementById('max_slow_speed').value;
    saveSettings();
    console.log('max_slow_speed updated');
});

loadData = function (url, cFunction) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

// load data jsons
loadData("/api/allCompetitors-" + year, loadRiders);
loadData("/api/stage-" + year, loadStages);
loadData("/api/team-" + year, loadTeams);
//https://racecenter.letour.fr/profils/2025/profile-08-25a8355af8a78a674e8303508b6ecccd.csv
// loadData("/profils/2025/profile-08-25a8355af8a78a674e8303508b6ecccd.csv", loadGPS);

startListening();


riderCard = function (bib) {
    var rider = peloton[bib];
    selectedRider = bib;
    var html = '';
    html += '<div class="col-3">';
    html += '  <img class="rankingTables__row__profile--picture" src="'+rider.profile_sm+'">&nbsp;';
    html += '  <span><span data-bib="#123" class="flag flag--with-bib js-display-lazy flag--'+rider.nationality+'"></span></span>&nbsp;' + rider.lastname + ' ' + rider.firstname;
    html += '</div>';
    html += '<div class="select_color col-3 row">';
    html += '  <div id="white"  class="color white col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="yellow" class="color yellow col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="green"  class="color green col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="orange"  class="color orange col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="darkblue"  class="color darkblue col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="babyblue"  class="color babyblue col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="red"  class="color red col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="grey"  class="color grey col-1 cursor-pointer"><div></div></div>';
    html += '  <div id="pink"  class="color pink col-1 cursor-pointer"><div></div></div>';
    html += '</div>';
    html += '<div class="col-3">';
    html += '  <a id="close-rider-card">close</a>';
    html += '</div>';
    document.getElementById('ridercard').innerHTML = html;

    // click events
    var colorButtons = document.getElementsByClassName('color');
    for (var i=0; i < colorButtons.length; i++) {
        colorButtons[i].onclick = function () { 
            console.log(this.id);
            settings.riders[selectedRider] = { color: this.id };
            var elm = document.getElementById('r' + selectedRider);
            elm.className = elm.className.replace("yellow","");
            elm.className = elm.className.replace("green","");
            elm.className = elm.className.replace("orange","");
            elm.className = elm.className.replace("white","");
            elm.className = elm.className.replace("darkblue","");
            elm.className = elm.className.replace("babyblue","");
            elm.className = elm.className.replace("pink","");
            elm.className = elm.className.replace("grey","");
            elm.className = elm.className.replace("red","");
            elm.className += ' ' + this.id
            saveSettings();
        }
    }
    document.getElementById('close-rider-card').onclick = function () {
        document.getElementById('ridercard').innerHTML = '';
    }
}

getTimeStamp = function (distanceBefore, distanceAfter, timeStampBefore, timeStampAfter) {
    var distance = distanceBefore + distanceAfter;
    if (distance == 0) {
        return timeStampBefore;
    } else {
        var deltaTime = timeStampAfter - timeStampBefore;
        return timeStampBefore + (distanceBefore / distance) * deltaTime;
    }
}

function startListening() {
    velofacts.addEventListener("update", function(e) {
        if (loadcount == 3) {
            var d = JSON.parse(e.data);
            var html = '<div class="row group">';
            var previous_gap = 0;
            if (d.bind == 'telemetryCompetitor-' + year) { 
                // all data has been loaded, process snapshot
                var sound = "";
                var riders = d.data.Riders;
                var timeStamp = d.data.TimeStamp;

                // ***************************** poor data, let's calculate it ourselves **************************************
                // ***************************** poor data, let's calculate it ourselves **************************************
                // ***************************** poor data, let's calculate it ourselves **************************************
                // ***************************** poor data, let's calculate it ourselves **************************************
                // ***************************** poor data, let's calculate it ourselves **************************************
                // ***************************** poor data, let's calculate it ourselves **************************************
                for (var i = 0; i < riders.length; i++) {
                    var r = snapToRoute(riders[i].Latitude, riders[i].Longitude);
                    //console.log(r);
                    
                    if (!r.error) {
                        riders[i].kmToFinish = r.kmtogo;
                    } else {
                        riders[i].kmToFinish = 9999;
                    }
                }
                // now order by kmtogo
                riders.sort((a,b) => a.kmToFinish - b.kmToFinish);

                // ***************************** END poor data, let's calculate it ourselves **************************************



                for (var i = 0; i < riders.length; i++) {
                    var rider = riders[i];
                    var bib = rider.Bib;
                    if (i == 0) { document.getElementById("distance").innerHTML = rider.kmToFinish}
                    // var gap = rider.secToFirstRider;
                    var gap = rider.kmToFinish;
                    var speed = rider.kph;
                    var speedAvg = rider.kphAvg;
                    var extra_class = '';
                    if ((gap - previous_gap) > 0.05) {
                        html += '</div><div class="row group">';
                    }
                    if (settings.beep_for_all && speed < settings.max_slow_speed) {
                        sound = 'sound1';
                    }
                    if (selected_team == '') {
                        if (settings.riders[bib]) {
                            extra_class += ' ' + settings.riders[bib].color;
                        }
                    } else {
                        if (peloton[rider.Bib].$team.split(':')[1] == selected_team) extra_class += ' team';
                    }
                    if (speed < settings.max_slow_speed) { extra_class += ' slow'; };
                    bib_html = '';
                    if (show_bibs) {
                        bib_html = '<span class="bib">'+rider.Bib+'</span> ';
                    }
                        html += '<div id="r'+rider.Bib+'" title="Speed: ' + speed + 'km/h | Average Speed: ' + speedAvg + 'km/h | ' + rider.kmToFinish + 'km to go, bib:'+rider.Bib+'" class="rider col-md-2 ' + extra_class + '"><div><span>' + bib_html + peloton[rider.Bib].lastnameshort + ' ' + peloton[rider.Bib].firstname + ' ' + gap + '</span></div></div>';
                    if (gap > 0) previous_gap = gap;

                    //
                    // start efforts
                    //

                    // loop through today's segments
                    for (var s = 0; s < todaysSegments.length; s++) {
                        var updateStorage = false;
                        
                        var segment = todaysSegments[s];
                        var kmFromStart = stageDistance - rider.kmToFinish;
                        var distanceFromSegmentStart = segment.start - kmFromStart;
                        var distanceFromSegmentEnd   = segment.end   - kmFromStart;

                        // init effort
                        if (!efforts[segment.id]) {
                            efforts[segment.id] = [];
                        }
                        if (!efforts[segment.id][bib]) {
                            efforts[segment.id][bib] = {
                                beforeStart : null,
                                afterStart: null,
                                beforeEnd: null,
                                afterEnd: null,
                                starttime: null,
                                endtime: null,
                                duration: null
                            }
                        }

                        // if position within 200 meters before segment start
                        if (distanceFromSegmentStart >= 0 && distanceFromSegmentStart <= 0.2) {
                            // remember data
                            var update = true;
                            if (efforts[segment.id][bib].beforeStart && efforts[segment.id][bib].beforeStart.distance == distanceFromSegmentStart) {
                                // rider hasn't moved, no update
                                update = false;
                            }
                            if (update) {
                                efforts[segment.id][bib].beforeStart = rider;
                                efforts[segment.id][bib].beforeStart.timeStamp = timeStamp;
                                efforts[segment.id][bib].beforeStart.distance = distanceFromSegmentStart;
                            }
                        }

                        // if position within 200 meters after start and !start
                        if (distanceFromSegmentStart <= 0 && distanceFromSegmentStart >= -0.2 && !efforts[segment.id][bib].afterStart) {
                            // remember position: segment.effort[bib].beforeEnd = rider
                            efforts[segment.id][bib].afterStart = rider;
                            efforts[segment.id][bib].afterStart.timeStamp = timeStamp;
                            efforts[segment.id][bib].afterStart.distance = -1 * distanceFromSegmentStart;
                            // calculate start time: segment.effort[bib].start = time
                            if (efforts[segment.id][bib].beforeStart) {
                                // estimate time at the start
                                updateStorage = true;
                                efforts[segment.id][bib].starttime = getTimeStamp(
                                    efforts[segment.id][bib].beforeStart.distance, 
                                    efforts[segment.id][bib].afterStart.distance, 
                                    efforts[segment.id][bib].beforeStart.timeStamp, 
                                    efforts[segment.id][bib].afterStart.timeStamp 
                                )
                            }
                        }
                        // if position within 200 meters before finish
                        if (distanceFromSegmentEnd >= 0 && distanceFromSegmentEnd <= 0.2) {
                            // remember data
                            update = true;
                            if (efforts[segment.id][bib].beforeEnd && efforts[segment.id][bib].beforeEnd.distance == distanceFromSegmentEnd) {
                                // rider hasn't moved, no update
                                update = false;
                            }
                            if (update) {
                                efforts[segment.id][bib].beforeEnd = rider;
                                efforts[segment.id][bib].beforeEnd.timeStamp = timeStamp;
                                efforts[segment.id][bib].beforeEnd.distance = distanceFromSegmentEnd;
                            }
                        }


                        // if position within 200 meters after finish and !finish
                        if (distanceFromSegmentEnd <= 0 && distanceFromSegmentEnd >= -0.2 && !efforts[segment.id][bib].afterEnd) {
                            // remember data
                            efforts[segment.id][bib].afterEnd = rider;
                            efforts[segment.id][bib].afterEnd.timeStamp = timeStamp;
                            efforts[segment.id][bib].afterEnd.distance = -1 * distanceFromSegmentEnd;
                            if (efforts[segment.id][bib].beforeEnd) {
                                // estimate time at the end
                                efforts[segment.id][bib].endtime = getTimeStamp(
                                    efforts[segment.id][bib].beforeEnd.distance, 
                                    efforts[segment.id][bib].afterEnd.distance, 
                                    efforts[segment.id][bib].beforeEnd.timeStamp, 
                                    efforts[segment.id][bib].afterEnd.timeStamp 
                                )
                                // calculate duration if you also recorded the start
                                if (efforts[segment.id][bib].starttime) {
                                    efforts[segment.id][bib].duration = parseInt(efforts[segment.id][bib].endtime - efforts[segment.id][bib].starttime);
                                    updateStorage = true;
                                }
                            }
                        }

                        if (updateStorage) {
                            saveEfforts(segment.id);
                            // refresh efforts
                            if (segment.id == selectedSegment) showEfforts(selectedSegment); 
                        }

                    }
                    // end todaysSegments loop


                    //
                    // end efforts
                    //


                }
                if (!paused) {
                    if (sound != "") {
                        // annoying beep
                        playBeep(240,100);
        		    };
                    document.getElementById("rows").innerHTML = html + '</div>';
                }
            }
        }
    });
}


// for iOS shortcut, unremark
// var result=[]
// completion(result)// run script in javascript console on the live data page (https://racecenter.letour.fr/en/)
