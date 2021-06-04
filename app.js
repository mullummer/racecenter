// run script in javascript console on the live data page (https://racecenter.criterium-du-dauphine.fr/en)
// code by @velofacts and @Gnoembah
var min_gap = 4;
var max_slow_speed = 5;
var gc = ',11,21,31,33,35,41,44,47,51,54,56,61,63,71,75,81,84,91,101,111,121,125,136,165,176,181,191,201,';
var green = ',,';

var teams = [{
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/isn/3629/0:0,400:400-60-0-70/60570",
    "name": "ISRAEL START-UP NATION",
    "_id": "04f849582b1d2b4b32e77d09926ff226701e66d5bcd4fca31bde4980ba077959"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/lts/3631/0:0,400:400-60-0-70/d4c76",
    "name": "LOTTO SOUDAL",
    "_id": "05602bab385f988bb1fb1c0ccdff6067f474ed2069ba780071de479cc74f4ff9"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/3630/0:0,400:400-60-0-70/33399",
    "name": "INTERMARCHE - WANTY - GOBERT MATERIAUX",
    "_id": "0acab0ed1026a42b234314b0b84e95a6bb0ed051c78655fd091de7297bed47d4"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bahrain-victorious-2021-ok/3753/0:0,400:400-60-0-70/83b9b",
    "name": "BAHRAIN VICTORIOUS",
    "_id": "3683432480037f88866d8d01cdde55a4764598776c3215078c4b4c6ebe3daa6c"
}, {
    "name": "ASTANA - PREMIER TECH",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/ast/3613/0:0,400:400-60-0-70/3fb88",
    "_id": "4533bd8a5f87e99cb5334c93a5763312af5fb7236a074e4279519d2822b99ba5"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/3639/0:0,400:400-60-0-70/ba16c",
    "name": "JUMBO - VISMA",
    "_id": "4b41fc45fb35938afa42af651bdc14b40103ac3d388eefe21c5e76ebe4be87a4"
}, {
    "name": "BORA - HANSGROHE",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/boh/3616/0:0,400:400-60-0-70/7e4f0",
    "_id": "50d051130dd148909d06571ef9c5fcd4fbf339741e560fad722512448fcc4bbe"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/dqt/3621/0:0,400:400-60-0-70/51404",
    "name": "DECEUNINCK - QUICK - STEP",
    "_id": "5ec63539d99ed324baadf41a1fc2d34b1177713ee09326f0bd2af1dd2a8aec7e"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/cof/3619/0:0,400:400-60-0-70/aac2b",
    "name": "COFIDIS",
    "_id": "64d770a96b740c655c26776a7e0d14d820af41c8de0e3e86cda0a53d12f0e5f4"
}, {
    "name": "EF EDUCATION - NIPPO",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/efn/3623/0:0,400:400-60-0-70/af104",
    "_id": "68b455ef29303fb819db3bf7ffd735f46e3a1622661f12f22813d588380f18ec"
}, {
    "name": "TEAM DSM",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/3622/0:0,400:400-60-0-70/d4c73",
    "_id": "6b33241c0941ebfb1231e93c013fdc5fad4435091069102817d6c59e2864e05e"
}, {
    "name": "TREK - SEGAFREDO",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/3637/0:0,400:400-60-0-70/2466c",
    "_id": "7481d689babbb48ee8060e60080dfbff014e8b5cdcd4450d4b1432208e10f96c"
}, {
    "name": "B&B HOTELS  P/B KTM",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/3614/0:0,400:400-60-0-70/ea221",
    "_id": "74d4d5148490ee9b839b9c777983bc74ac41fc8b14082597b3024d67c8a78ef7"
}, {
    "name": "UAE TEAM EMIRATES",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/uad/3640/0:0,400:400-60-0-70/28d64",
    "_id": "92cd16442c76102c1911fb54f4fb8d6c2b0df12ff22e98e62f4e2a75fda7e440"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/mov/3632/0:0,400:400-60-0-70/0684f",
    "name": "MOVISTAR TEAM",
    "_id": "935404586973b16693736cf1f0a010bd1fb70c23ce90057cea5dd632ff51f012"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/igd/3628/0:0,400:400-60-0-70/27b57",
    "name": "INEOS GRENADIERS",
    "_id": "af65d43d878db85e164a04bc1c8e95318b728a7349fcb0b69609ac7846e363a5"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/act/3610/0:0,400:400-60-0-70/29b73",
    "name": "AG2R CITROEN TEAM",
    "_id": "b48460823a6531bcbddb6bd1bcc46b65d229fdb9dacdd9390b5334cb802451e1"
}, {
    "name": "TEAM BIKEEXCHANGE",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bex/3615/0:0,400:400-60-0-70/b0c16",
    "_id": "bc6c490d2571258df000746a8dd5966723fe4f88ed715fa380fccf2fc742c716"
}, {
    "name": "GROUPAMA - FDJ",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/3627/0:0,400:400-60-0-70/e7186",
    "_id": "d21be69ea4fd359e4b295459a54947454ff6b9edbc4b7cc4fd763235f5c77068"
}, {
    "name": "TEAM ARKEA - SAMSIC",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/ark/3612/0:0,400:400-60-0-70/5385b",
    "_id": "e11e7031c0d612a20d039b2dfd8fabfb7561a061a0fd37b652ce74cbab70bc4e"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tqa/3638/0:0,400:400-60-0-70/a4288",
    "name": "TEAM QHUBEKA ASSOS",
    "_id": "fcfdef3b16ea190cd84e1ca05ae4ac0d15e3fb422a51af6eee3d8e607f7c24a4"
}];

var xmlhttp = new XMLHttpRequest();
var url = "/api/allCompetitors-2021";
var peloton = [];
var riders_prev = [];
var velofacts = new EventSource('/live-stream');
var paused = false;
var selected_team = '';

str_pad_left = function(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
};
prety_time = function(s) {
    var minutes = Math.floor(s / 60);
    var seconds = s - minutes * 60;
    return minutes + ':' + str_pad_left(seconds, '0', 2);
};

select_team = function() {
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

toggle_pause = function() {
    paused = !paused;
    document.getElementById('pause-icon').className = (paused) ? 'fas fa-play-circle' : 'fas fa-pause-circle';
    return false;
};


var style = document.createElement('style');
style.innerHTML = '.group {border-bottom: 2px solid #ba4a19; margin-bottom: 3px; font-size: 11px; color: #333} .gc div { background-color: #ff0; border: 1px solid #ffb700; } .green div { background-color: #45AE51; color: #fff} .slow div {color: #fff; background-color: #000} .team {color:#fff; background-color: #ba4a19; } #q-app {padding: 10px} #pause {font-size: 48px;} .group div div { padding-left: 2px; padding-right: 2px;} #toolbar { display: flex; background: #fee5d9; padding: 10px; border-bottom: 2px solid #ba4a19; align-items: center } #toolbar > img { width: 72px; } #jerseyWrapper { display: flex;margin: auto; align-items: center; } .row { justify-content: center; } .selected { background: #ffa47b; } .fas { color: #ba4a19; } .row>.col-md-2 { padding: 2px 5px } .teamJersey:hover { background: #ffa47b; } #toolbar .distance { padding-left: 10px; font-size: 24px }';
document.head.appendChild(style);

// html
document.getElementById("q-app").innerHTML = '<div id="toolbar"><a href="#" id="pause"><i id="pause-icon" class="fas fa-pause-circle"></i></a><span class="distance"><span id="distance">...</span> km</span><div id="jerseyWrapper"></div></div><div id="rows">&nbsp; waiting for data...</div>';

// team jerseys
for (var i=0; i<teams.length; i++) {
    document.getElementById('jerseyWrapper').innerHTML += '<a href="#" class="teamJersey" id="team' + i + '" data-id="' + teams[i]._id + '"><img src="' + teams[i].jersey_sm + '"></a>';
}
document.getElementById('toolbar').innerHTML += '<img src="https://www.criterium-du-dauphine.fr/img/global/logo.png" />';

// click events
buttonPause = document.getElementById("pause");
buttonPause.onclick = toggle_pause;
for (var i = 0; i < teams.length; i++) {
    var thisButton = document.getElementById("team" + i);
    thisButton.onclick = select_team;
}



xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        tmp = JSON.parse(this.responseText);
        for (var i = 0; i < tmp.length; i++) {
            peloton[tmp[i].bib] = tmp[i]
        }
    }
    start_listening();
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function start_listening() {
    velofacts.addEventListener("update", function(e) {
        if (!paused) {
            var d = JSON.parse(e.data);
            var html = '<div class="row group">';
            var previous_gap = 0;
            if (d.bind == 'telemetryCompetitor-2021') { //was 
                var riders = d.data.Riders;
                for (var i = 0; i < riders.length; i++) {
                    var rider = riders[i];
                    if (i == 0) { document.getElementById("distance").innerHTML = rider.kmToFinish}
                    var gap = rider.secToFirstRider;
                    var speed = rider.kph;
                    var speedAvg = rider.kphAvg;
                    var extra_class = '';
                    if ((gap - previous_gap) > min_gap) {
                        html += '</div><div class="row group">';
                    }
                    if (selected_team == '') {
                        // show points and gc VIP's
                        if (gc.includes(',' + rider.Bib + ',')) {
                            extra_class += ' gc'
                        }
                        if (green.includes(',' + rider.Bib + ',')) {
                            extra_class += ' green'
                        }
                    } else {
                        //
                        if (peloton[rider.Bib].$team.split(':')[1] == selected_team) extra_class += ' team';
                    }
                    if (speed < max_slow_speed) extra_class = 'slow';
                    html += '<div title="Speed: ' + speed + 'km/h | Average Speed: ' + speedAvg + 'km/h" class="col-md-2 ' + extra_class + '"><div>' + peloton[rider.Bib].lastnameshort + ' ' + peloton[rider.Bib].firstname + ' ' + prety_time(gap) + '</div></div>';
                    if (gap > 0) previous_gap = gap;
                }
                document.getElementById("rows").innerHTML = html + '</div>';
                riders_prev = riders;
            } else {}
        }
    });
}
