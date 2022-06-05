// run script in javascript console on the live data page (https://racecenter.criterium-du-dauphine.fr/en/)
// code by @velofacts and @Gnoembah
var min_gap = 4;
var max_slow_speed = 5;
var gc = ''; 
var green = '';
var mylist = ',100,20,30,';
var mycolor = '#ff4500';

var teams = [{"name":"TOTALENERGIES","logo_live":null,"nationality":"fra","header":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/ten/5811/0:0,400:400-60-0-70/b6224","color":"#000000","banner":null,"code":"TEN","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/ten/5811/0:0,400:400-0-0-70/71234","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/ten/5843/0:0,400:400-0-0-70/2b78a","nameShort":"TOTALENERGIES","_id":"0e0021b08278719626b05e91d0d047ddf1f1cf2e235b13d2a55319425953e4c9","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397804,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo_live":null,"header":null,"banner":null,"nationality":"fra","code":"GFC","color":"#000000","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/5807/0:0,400:400-60-0-70/f31d2","name":"GROUPAMA - FDJ","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/gfc/5834/0:0,399:399-0-0-70/92c26","nameShort":"GROUPAMA - FDJ","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/5807/0:0,400:400-0-0-70/53d86","_id":"129ec8dcab90a70ef5606b46065ff8dff03806ef8fa7bb27bb957e725090ae9a","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397679,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"header":null,"name":"QUICK-STEP ALPHA VINYL TEAM","nameShort":"QUICK-STEP ALPHA VINYL TEAM","nationality":"bel","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/qst/5805/0:0,400:400-0-0-70/3c75d","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/qst/5805/0:0,400:400-60-0-70/c35f0","banner":null,"color":"#000000","code":"QST","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/qst/5839/0:0,399:399-0-0-70/6f8f5","_id":"32203fa292df3b61a76b11a511e357e6cb0d32a76a9c82d4d5f49c10d71b93e5","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397347,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/iwg/5836/0:0,400:400-0-0-70/2b472","nameShort":"INTERMARCHE - WANTY - GOBERT ","color":"#000000","banner":null,"logo_live":null,"header":null,"name":"INTERMARCHE - WANTY - GOBERT MATERIAUX","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/5803/0:0,400:400-60-0-70/29bab","code":"IWG","nationality":"bel","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/5803/0:0,400:400-0-0-70/eb608","_id":"344c57b2c0b77fe95f7a353df8c939f4a3959d5b16b5254602f0bf9495a38c87","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397470,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"code":"UAD","header":null,"color":"#000000","name":"UAE TEAM EMIRATES","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/uad/5845/0:0,400:400-0-0-70/70564","nationality":"uae","banner":null,"logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/uad/5814/0:0,400:400-60-0-70/8cab1","nameShort":"UAE TEAM EMIRATES","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/uad/5814/0:0,400:400-0-0-70/6bc08","_id":"3b4d76f5718faeda3ba9f326dfdc868539bb559377f7d87116f953b9110c5ff3","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397376,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/boh/5798/0:0,400:400-0-0-70/d475b","header":null,"nationality":"ger","banner":null,"code":"BOH","color":"#000000","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/boh/5798/0:0,400:400-60-0-70/59e7f","logo":"https://img.aso.fr/core_app/img-cycling-cdd-png/boh/5828/0:0,230:230-0-0-70/9662c","nameShort":"BORA - HANSGROHE","logo_live":null,"name":"BORA - HANSGROHE","_id":"543abf6ea6a98e5bdaf114be2723ceeb4f2d3d7835590624b4b1e23074e449c0","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397218,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"nationality":"aus","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/bex/5796/0:0,400:400-60-0-70/2f98d","nameShort":"TEAM BIKEEXCHANGE-JAYCO","banner":null,"color":"#000000","header":null,"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/bex/5827/0:0,400:400-0-0-70/a848f","name":"TEAM BIKEEXCHANGE-JAYCO","code":"BEX","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/bex/5796/0:0,400:400-0-0-70/f68a1","_id":"65646f8803345f90e6cdc28e95f18fe29fc8352620ad328169b5786f1a2af29c","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397740,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/cof/5799/0:0,400:400-60-0-70/0f0c8","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/cof/5799/0:0,400:400-0-0-70/2965d","banner":null,"nameShort":"COFIDIS","name":"COFIDIS","logo_live":null,"color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/cof/5833/0:0,400:400-0-0-70/c279a","nationality":"fra","header":null,"code":"COF","_id":"6d64d0a7d1837ba927c3525b8b9e587ea37d31f7b393fcbbbcb072aab7bcafb3","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397406,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"banner":null,"logo_live":null,"nationality":"fra","code":"ACT","color":"#000000","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/act/5794/0:0,400:400-0-0-70/4d2a5","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/act/5847/0:0,400:400-0-0-70/a0ee5","header":null,"name":"AG2R CITROEN TEAM","nameShort":"AG2R CITROEN TEAM","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/act/5794/0:0,400:400-60-0-70/cb0cf","_id":"70cfe9b4b58b6591fdc991cdbcc877c134b88db25b02016c64c0b17097af4ec5","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397278,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/5808/0:0,400:400-60-0-70/b7422","header":null,"nationality":"usa","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/tfs/5844/0:0,400:400-0-0-70/4d166","code":"TFS","color":"#000000","nameShort":"TREK - SEGAFREDO","name":"TREK - SEGAFREDO","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/5808/0:0,400:400-0-0-70/2dbcd","banner":null,"_id":"744f3b3b89767a19614aaf21ce21bbb02c4c68d88ff1eef48dddde6679786a27","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397774,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/5800/0:0,400:400-60-0-70/a4ca8","name":"TEAM DSM","nationality":"ned","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/5800/0:0,400:400-0-0-70/01b62","nameShort":"TEAM DSM","banner":null,"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/dsm/5830/0:0,400:400-0-0-70/aa86e","code":"DSM","header":null,"color":"#000000","_id":"77615cd58b6fcc71cbc44c2cfd83859bb30aee523b8728bcc3d5b7af63647f06","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397898,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/ipt/5848/0:0,400:400-0-0-70/ff37f","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/ipt/5802/0:0,400:400-0-0-70/6d19f","nameShort":"ISRAEL-PREMIER TECH","code":"IPT","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/ipt/5802/0:0,400:400-60-0-70/da8a3","color":"#000000","header":null,"nationality":"isr","banner":null,"name":"ISRAEL-PREMIER TECH","_id":"7908b13056ac2b3efc35de3f250b7e18519692c812b3653bc56f8f3df9891c85","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397308,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"nationality":"nor","code":"UXT","header":null,"logo_live":null,"color":"#000000","banner":null,"nameShort":"UNO-X PRO CYCLING TEAM","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/uxt/5812/0:0,400:400-0-0-70/2fcc9","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/uxt/5846/0:0,400:400-0-0-70/35731","name":"UNO-X PRO CYCLING TEAM","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/uxt/5812/0:0,400:400-60-0-70/cc6ce","_id":"81b19b7b1a8fe328579fc7cde55bbc7736b8b082cd0e1708085fd05334479962","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397709,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo_live":null,"color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/lts/5838/0:0,400:400-0-0-70/17b29","name":"LOTTO SOUDAL","code":"LTS","header":null,"nameShort":"LOTTO SOUDAL","nationality":"bel","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/lts/5804/0:0,400:400-0-0-70/74301","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/lts/5804/0:0,400:400-60-0-70/9e203","banner":null,"_id":"8558957fa34aee48f7819a4c559154f429b3bd83ddbd2fd585560f432551c882","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397500,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo_live":null,"code":"EFE","name":"EF EDUCATION - EASYPOST","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/efe/5806/0:0,400:400-0-0-70/e4573","header":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/efe/5806/0:0,400:400-60-0-70/720be","nameShort":"EF EDUCATION - EASYPOST","nationality":"usa","banner":null,"color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/efe/5831/0:0,400:400-0-0-70/13e8b","_id":"a436967b5678bbf5f009a9c0e2ac1e0f49d4a772fd5d7c0ec73502726565597f","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397434,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/ark/5795/0:0,400:400-60-0-70/8d7af","nameShort":"TEAM ARKEA - SAMSIC","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/ark/5795/0:0,400:400-0-0-70/35074","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/ark/5823/0:0,400:400-0-0-70/85d95","logo_live":null,"name":"TEAM ARKEA - SAMSIC","nationality":"fra","color":"#000000","header":null,"banner":null,"code":"ARK","_id":"aaea2c94c7c3fc4c6230befefdc82976bc8c4bba141a7428f6894bfc5c015c8a","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397836,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/5813/0:0,400:400-0-0-70/336a2","nameShort":"JUMBO - VISMA","nationality":"ned","logo_live":null,"header":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/5813/0:0,400:400-60-0-70/2c8d9","code":"TJV","name":"JUMBO - VISMA","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/tjv/5842/0:0,400:400-0-0-70/275f3","color":"#000000","banner":null,"_id":"bd4525258e51586355e2c0d001cbb29ce528fc42384a64d17527d0bed0575f9c","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397568,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/ast/5825/0:0,400:400-0-0-70/8aa26","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/ast/5793/0:0,400:400-60-0-70/cb4ac","code":"AST","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/ast/5793/0:0,400:400-0-0-70/44796","nationality":"kaz","color":"#000000","name":"ASTANA - QAZAQSTAN TEAM","header":null,"banner":null,"nameShort":"ASTANA - QAZAQSTAN TEAM","_id":"c7b13ec75c907e690691dcc2ce09500b08d23386a23c6d8ae71dc43a5549f812","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397866,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/igd/5832/0:0,400:400-0-0-70/6a35a","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/igd/5801/0:0,400:400-60-0-70/d3a2b","header":null,"code":"IGD","banner":null,"jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/igd/5801/0:0,400:400-0-0-70/a91c1","nameShort":"INEOS GRENADIERS","name":"INEOS GRENADIERS","nationality":"gbr","_id":"c7b77074740e7f29fed96db54c8abe295ae53b46388bf6ab2a1d018cb9fa3545","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397467,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/mov/5810/0:0,400:400-60-0-70/89de8","header":null,"nationality":"esp","logo_live":null,"name":"MOVISTAR TEAM","nameShort":"MOVISTAR TEAM","banner":null,"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/mov/5837/0:0,400:400-0-0-70/9b715","code":"MOV","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/mov/5810/0:0,400:400-0-0-70/63ddb","color":"#000000","_id":"ce22bada862a95d7aa05074774b287c98538d978cfff919a10a31cab6271ff13","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397250,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/bbk/5826/0:0,400:400-0-0-70/e8d62","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/5797/0:0,400:400-0-0-70/53d97","logo_live":null,"banner":null,"name":"B&B HOTELS - KTM","header":null,"nationality":"fra","nameShort":"B&B HOTELS - KTM","code":"BBK","color":"#000000","jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/5797/0:0,400:400-60-0-70/9b7d9","_id":"d28a2defb7055e1108b7c628d2a9e50b746a842bd0dfa5faf49442125f644336","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397527,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"},{"color":"#000000","code":"TBV","header":null,"name":"BAHRAIN VICTORIOUS","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-cdd-png/tbv/5809/0:0,400:400-60-0-70/c61ba","nationality":"brn","jersey":"https://img.aso.fr/core_app/img-cycling-cdd-png/tbv/5809/0:0,400:400-0-0-70/6c402","banner":null,"logo":"https://img.aso.fr/core_app/img-cycling-cdd-jpg/tbv/5840/0:0,400:400-0-0-70/7061d","nameShort":"BAHRAIN VICTORIOUS","_id":"f979128ef4aa468ffe0ad3eebabad8f723759fa4ea3d7685ecbc69f00bd2cd23","_bind":"team-2022","_origin":"team-2022","_updatedAt":1654248397500,"_parent":"millesime:85b9cb847f51cac990a811d67c57959311d792dc8659a25fb0ba38b94bc63210","_key":"code"}];


var xmlhttp = new XMLHttpRequest();
var url = "/api/allCompetitors-2022";
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
document.getElementById('toolbar').innerHTML += '<img src="https://racecenter.criterium-du-dauphine.fr/img/logo.b143143b.png" />';

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
            if (d.bind == 'telemetryCompetitor-2022') { //was 
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
