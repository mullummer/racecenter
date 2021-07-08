// run script in javascript console on the live data page (https://racecenter.letour.fr/en)
// code by @velofacts and @Gnoembah
var min_gap = 4;
var max_slow_speed = 5;
var gc = ',1,11,22,65,73,81,91,111,125,161,124,18,188,162,54,125,172,';
var green = ',12,34,45,55,71,83,95,101,103,105,132,143,151,171,198,208,216,221,163,222,64,48,192,';
var mylist = ',100,20,30,';
var mycolor = '#ff4500';

var teams = [{
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/mov/26368/0:0,400:400-60-0-70/ac4b9",
	"name": "Movistar Team",
	"_id": "8e18d8f96f10d2c0131d4fc7ce668eeb1e61f60acd020df57f0562301451998f"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/total-energies-2021-ok/28602/0:0,400:400-60-0-70/8cf01",
	"name": "Total Energies",
	"_id": "72c08593dd639a5e4c2c6c51a6c1ed5cda3f27f39de1bb861ebf99d55638a153"
}, {
	"name": "Astana – Premier Tech",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/ast/26355/0:0,400:400-60-0-70/4be14",
	"_id": "0fae82eab30a334b6d51f8dde0c6408f24c62e385259c145c7c6d65901374d81"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/gfc/26363/0:0,400:400-60-0-70/2ddc1",
	"name": "Groupama – FDJ",
	"_id": "1ae3118b8a4fbc5e2ef905cf09e81f6c5726cfacad377112f9456710e2e155d6"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/tqa/26373/0:0,400:400-60-0-70/92696",
	"name": "Team Qhubeka Assos",
	"_id": "b7d894de3d5350e71b88becc69f4148f6e3b699101179467a310d842524a2559"
}, {
	"name": "Cofidis",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/cof/26359/0:0,400:400-60-0-70/dc73c",
	"_id": "9c14f8e3697e26fc2f1232682d987098be81509ba527d0c069363d967a85305e"
}, {
	"name": "Ineos Grenadiers",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/igd/26364/0:0,400:400-60-0-70/1b92c",
	"_id": "1987a8172ed88458e3faad3aa99cb12278332ea49659618cb4e31ec66dec7e91"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/ark/26354/0:0,400:400-60-0-70/99dd6",
	"name": "Team Arkéa – Samsic",
	"_id": "a91733cccdfcd40e1eae9b7a7a466b2e146f929b40f45d56a252cb484e278bb3"
}, {
	"name": "Intermarché – Wanty – Gobert Matériaux",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/iwg/26366/0:0,400:400-60-0-70/0587c",
	"_id": "520020a03168134d87b2f367e08c7b5fd931767ac0191289f364d925c41e5327"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/bex/26357/0:0,400:400-60-0-70/fec70",
	"name": "Team BikeExchange",
	"_id": "eb527a08cde713a9d3a4809d1c370a5b2978a29a8c5a6d1d4408ec2d88e74d76"
}, {
	"name": "Bora – Hansgrohe",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/boh/3616/0:0,400:400-60-0-70/7e4f0",
	"_id": "c75a447aed2f34966bbd982292bea171f49386b756ac024744c1cb74c73f75cc"
}, {
	"name": "Deceuninck – Quick-Step",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/dqt/26360/0:0,400:400-60-0-70/9b279",
	"_id": "a06980928e71c69a04cdc62b1314a8e56bffd2a47bfe6c01dc14153289602343"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/lts/26367/0:0,400:400-60-0-70/a9db5",
	"name": "Lotto Soudal",
	"_id": "bb1472f3aa92a52cdcfccc777fe4954ce91f29de29e5c1f7c4c3ffd0a26357e1"
}, {
	"name": "B&B Hotels P/B KTM",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/bbk/26356/0:0,400:400-60-0-70/9e58c",
	"_id": "a5fc244b10c389e1e1c747ab636cf6d969fc51bbefa93603e1c0e39ca86a4430"
}, {
	"name": "AG2R Citroën Team",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/act/26352/0:0,400:400-60-0-70/b4b27",
	"_id": "d3316eb650bfe23062914c46d94752803cee9f393cfd74216b4d16329ab373bd"
}, {
	"name": "Alpecin – Fenix",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/afc/26353/0:0,400:400-60-0-70/458e8",
	"_id": "d920f2e4dd63d77614c2f99bcdc97e7a14f33551e2fd4b6cf341dd8adf160382"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/isn/26365/0:0,400:400-60-0-70/dc72f",
	"name": "Israel Start-Up Nation",
	"_id": "4742f664ca7c868554f86820ca18303eb70a1f49daf8e4c64c8958013f1d3635"
}, {
	"name": "Team DSM",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/dsm/26361/0:0,400:400-60-0-70/cf75c",
	"_id": "0088f9e8a23e42e2537cbe1a63d42fcd7625e49c68478c9e12cd4b8f89b52795"
}, {
	"name": "UAE Team Emirates",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/uad/26374/0:0,400:400-60-0-70/b14b1",
	"_id": "4d8033514b407ca05950b8b2bdaa9e3f0322060e17e0c57455b059cdaa99462c"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/tfs/26371/0:0,400:400-60-0-70/b7bb4",
	"name": "Trek – Segafredo",
	"_id": "ae3c1d9f7f99a6cf5070fc739f7a8f48809b2feb58a33b448fd34cc7cf782e1d"
}, {
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/bahrain-victorious-2021-ok/26797/0:0,400:400-60-0-70/f44f5",
	"name": "Bahrain Victorious",
	"_id": "86d30a985f2b02becb5c3d9a3bec41dc6f04596034dc242c6487c435fab5cc94"
}, {
	"name": "Jumbo – Visma",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/jumbo-visma-tdf-2021-ok/26796/0:0,400:400-60-0-70/439f5",
	"_id": "d8ee0a75c63a08923ef9891e207cab5ed5c8796a3d08d2ab0d287915d5c39f01"
}, {
	"name": "EF Education – NIPPO",
	"jersey_sm": "https://img.aso.fr/core_app/img-cycling-tdf-png/efn/26362/0:0,400:400-60-0-70/2ea1d",
	"_id": "d366e356207e22eb583df76ced15f7f2a0e04f14424122c195974872b6153813"
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
style.innerHTML = '.group {border-bottom: 2px solid #ba4a19; margin-bottom: 3px; font-size: 11px; color: #333} .gc div { background-color: #ff0; border: 1px solid #ffb700; } .green div { background-color: #45AE51; color: #fff}  .mylist div { background-color: '+ mycolor +'; color: #fff}  .slow div {color: #fff; background-color: #000} .team {color:#fff; background-color: #ba4a19; } #q-app {padding: 10px} #pause {font-size: 48px;} .group div div { padding-left: 2px; padding-right: 2px;} #toolbar { display: flex; background: #fee5d9; padding: 10px; border-bottom: 2px solid #ba4a19; align-items: center } #toolbar > img { width: 72px; } #jerseyWrapper { display: flex;margin: auto; align-items: center; } .row { justify-content: center; } .selected { background: #ffa47b; } .fas { color: #ba4a19; } .row>.col-md-2 { padding: 2px 5px } .teamJersey:hover { background: #ffa47b; } #toolbar .distance { padding-left: 10px; font-size: 24px } #jerseyWrapper a {width: 3.9%} #jerseyWrapper img {max-width:100%}';
document.head.appendChild(style);

// html
document.getElementById("q-app").innerHTML = '<div id="toolbar"><a href="#" id="pause"><i id="pause-icon" class="fas fa-pause-circle"></i></a><span class="distance"><span id="distance">...</span> km</span><div id="jerseyWrapper"></div></div><div id="rows">&nbsp; waiting for data...</div>';

// team jerseys
for (var i=0; i<teams.length; i++) {
    document.getElementById('jerseyWrapper').innerHTML += '<a href="#" class="teamJersey" id="team' + i + '" data-id="' + teams[i]._id + '" title="'+teams[i].name+'"><img src="' + teams[i].jersey_sm + '"></a>';
}
document.getElementById('toolbar').innerHTML += '<img src="https://www.letour.fr/img/global/logo.png" />';

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
			if (mylist.includes(',' + rider.Bib + ',')) {
                            extra_class += ' mylist'
                        }
                    } else {
                        //
                        if (peloton[rider.Bib].$team.split(':')[1] == selected_team) extra_class += ' team';
                    }
                    if (speed < max_slow_speed) extra_class = 'slow';
                    html += '<div title="Speed: ' + speed + 'km/h | Average Speed: ' + speedAvg + 'km/h | ' + rider.kmToFinish + 'km to go" class="col-md-2 ' + extra_class + '"><div>' + peloton[rider.Bib].lastnameshort + ' ' + peloton[rider.Bib].firstname + ' ' + prety_time(gap) + '</div></div>';
                    if (gap > 0) previous_gap = gap;
                }
                document.getElementById("rows").innerHTML = html + '</div>';
                riders_prev = riders;
            } else {}
        }
    });
}
