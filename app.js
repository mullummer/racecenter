// run script in javascript console on the live data page (https://racecenter.lavuelta.es/en)
// code by @velofacts and @Gnoembah
var min_gap = 4;
var max_slow_speed = 5;
var gc = ''; 
var green = '';
var mylist = ',100,20,30,';
var mycolor = '#ff4500';

var teams = [{"nationality":"gbr","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/igd/9684/0:0,400:400-0-0-70/a3344","logo_live":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/igd/10048/0:0,2000:690-0-0-70/936d1","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/igd/9684/0:0,400:400-60-0-70/e201f","name":"INEOS GRENADIERS","code":"IGD","banner":null,"logo":"https://img.aso.fr/core_app/img-cycling-vue-png/igd/9709/0:0,400:400-0-0-70/5ffd1","color":"#000000","nameShort":"INEOS GRENADIERS","_id":"0b1a1cc7a7d09c3a57083b74c5c390668701d7432c5eaea5f8a7fbf5a56c2f97","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885767,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nationality":"ger","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/dsm/9705/0:0,400:400-0-0-70/da11f","header":"https://img.aso.fr/core_app/img-cycling-vue-png/dsm/10044/0:0,2000:690-0-0-70/9f4bd","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/dsm/9678/0:0,400:400-0-0-70/8ec4c","name":"TEAM DSM","nameShort":"TEAM DSM","banner":null,"logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/dsm/9678/0:0,400:400-60-0-70/daeb3","code":"DSM","color":"#000000","_id":"0be93616c5ea0a48e6910c303c81ea0a980b734dd649827393d872aac4d55105","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886422,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"name":"COFIDIS","header":"https://img.aso.fr/core_app/img-cycling-vue-png/cof/10042/0:0,2000:690-0-0-70/ca4ac","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/cof/9702/0:0,400:400-0-0-70/5b586","code":"COF","nameShort":"COFIDIS","nationality":"fra","color":"#000000","banner":null,"logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/cof/9675/0:0,400:400-60-0-70/53e28","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/cof/9675/0:0,400:400-0-0-70/f52cb","_id":"1a2435ec8e5bc2713ab159565a4971e92086a20cf9ddd4c0e6b7d86781209d5c","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885855,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/efn/9679/0:0,400:400-60-0-70/32df7","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/efn/9679/0:0,400:400-0-0-70/0992b","nameShort":"EF EDUCATION - NIPPO","code":"EFN","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/efn/9701/0:0,400:400-0-0-70/b88bf","nationality":"usa","logo_live":null,"color":"#000000","name":"EF EDUCATION - NIPPO","banner":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/efn/10045/0:0,2000:690-0-0-70/f811c","_id":"1dd8fe20e99d7d3da99c572e2b9fafcc7e9e756333a32ee24c73c7eaac44ffac","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885885,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nameShort":"ASTANA - PREMIER TECH","nationality":"kaz","color":"#000000","logo_live":null,"code":"APT","banner":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/ast/9670/0:0,400:400-60-0-70/dbc1b","header":"https://img.aso.fr/core_app/img-cycling-vue-png/apt/10037/0:0,2000:690-0-0-70/90fe8","name":"ASTANA - PREMIER TECH","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/ast/9670/0:0,400:400-0-0-70/d1488","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/ast/9695/0:0,400:400-0-0-70/12017","_id":"1f3e4aa751aeb21b48c9fde55f315849406024dc8da6275be55ff5786175f62e","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768884866,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"name":"MOVISTAR TEAM","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/mov/9688/0:0,400:400-0-0-70/16c90","nationality":"esp","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/mov/9688/0:0,400:400-60-0-70/1d708","header":"https://img.aso.fr/core_app/img-cycling-vue-png/mov/10052/0:0,2000:690-0-0-70/452a9","nameShort":"MOVISTAR TEAM","color":"#000000","logo_live":null,"banner":null,"code":"MOV","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/mov/9714/0:0,400:400-0-0-70/ab65b","_id":"22d7f895df31dd013b424fc6a7389764491ff7b3b7fbfc892a20d44e3de692b0","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886218,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/isn/9685/0:0,400:400-60-0-70/fb8e0","code":"ISN","header":"https://img.aso.fr/core_app/img-cycling-vue-png/isn/10049/0:0,2000:690-0-0-70/a4d01","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/isn/9711/0:0,400:400-0-0-70/cf058","nationality":"isr","logo_live":null,"banner":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/isn/9685/0:0,400:400-0-0-70/6a1d6","name":"ISRAEL START-UP NATION","nameShort":"ISRAEL START-UP NATION","color":"#000000","_id":"26dbf25a344f5907db68e59019a53398eccbd33a8a0201ebfe9580dc26e6e380","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886017,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nationality":"rsa","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/team-qhubeka-nexthash-confidentiel-jusqu-au-depart-du-tdf-2021-ok-01/9853/0:0,400:400-0-0-70/41de5","name":"TEAM QHUBEKA NEXTHASH","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/team-qhubeka-nexthash-confidentiel-jusqu-au-depart-du-tdf-2021-ok-01/9853/0:0,400:400-60-0-70/18643","logo_live":null,"nameShort":"TEAM QHUBEKA NEXTHASH","code":"TQA","banner":null,"color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-vue-jpg/team-qhubeka-nexthash/10100/0:0,400:400-0-0-70/8abb7","header":"https://img.aso.fr/core_app/img-cycling-vue-png/tqa/10056/0:0,2000:690-0-0-70/32b36","_bind":"team-2021","_origin":"team-2021","_id":"30ad247b50055bcf1ac1bff25c106dd090ac017bd23c3f0161235a1174be9d04","_key":"code","_updatedAt":1627632039556,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce"},{"banner":null,"name":"AG2R CITROEN TEAM","nationality":"fra","logo_live":null,"logo":"https://img.aso.fr/core_app/img-cycling-vue-png/act/9692/0:0,400:400-0-0-70/60466","color":"#000000","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/act/9667/0:0,400:400-60-0-70/0063d","nameShort":"AG2R CITROEN TEAM","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/act/9667/0:0,400:400-0-0-70/ef021","header":"https://img.aso.fr/core_app/img-cycling-vue-png/act/10035/0:0,2000:690-0-0-70/7950f","code":"ACT","_id":"3369f1b44c9af47d37e0397c1d49837dd0ee5521fad41093cf6b1bf9eef48042","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768884841,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nameShort":"BURGOS BH","nationality":"esp","banner":null,"code":"BBH","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/bbh/9723/0:0,400:400-60-0-70/3515f","color":"#000000","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/bbh/9723/0:0,400:400-0-0-70/60304","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/bbh/9719/0:0,400:400-0-0-70/a69d1","name":"BURGOS-BH","header":"https://img.aso.fr/core_app/img-cycling-vue-png/bbh/10038/0:0,2000:690-0-0-70/e02b1","_id":"3438c979604929980640009198a3c31fb54737b435e7b0a34ee1742312603995","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885819,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/tjv/9664/0:0,400:400-60-0-70/79290","code":"TJV","name":"JUMBO - VISMA","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/tjv/9664/0:0,400:400-0-0-70/d773b","color":"#000000","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/tjv/9717/0:0,400:400-0-0-70/68312","nameShort":"JUMBO - VISMA","logo_live":null,"banner":null,"nationality":"ned","header":"https://img.aso.fr/core_app/img-cycling-vue-png/tjv/10055/0:0,2000:690-0-0-70/8d180","_id":"44e37dd5b92b498a66ad5a7be721678568cd126b87c60b6bd2819b7b14ffebd8","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885738,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"header":"https://img.aso.fr/core_app/img-cycling-vue-png/gfc/10047/0:0,2000:690-0-0-70/5ec62","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/gfc/9706/0:0,400:400-0-0-70/65b68","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/gfc/9683/0:0,400:400-60-0-70/85707","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/gfc/9683/0:0,400:400-0-0-70/60d92","name":"GROUPAMA - FDJ","color":"#000000","logo_live":null,"banner":null,"code":"GFC","nationality":"fra","nameShort":"GROUPAMA - FDJ","_id":"4fe1a8e0768af4d1257d335463b6f5250e43c7a684c988da193b539d34d34167","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885911,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/boh/9673/0:0,400:400-60-0-70/ad165","nameShort":"BORA - HANSGROHE","header":"https://img.aso.fr/core_app/img-cycling-vue-png/boh/10040/0:0,2000:690-0-0-70/ec40c","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/boh/9673/0:0,400:400-0-0-70/cfdf2","code":"BOH","nationality":"ger","banner":null,"color":"#000000","name":"BORA - HANSGROHE","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/boh/9698/0:0,400:400-0-0-70/250f7","_id":"51d4fda23e17a5394a524a2b656f944f1633ff64bcddde2ce83933d6c02690fe","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768884955,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"code":"TBV","nameShort":"BAHRAIN VICTORIOUS","name":"BAHRAIN VICTORIOUS","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/baharain-victorius-2021-vuelta-ok/10189/0:0,400:400-60-0-70/8058e","color":"#000000","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/baharain-victorius-2021-vuelta-ok/10189/0:0,400:400-0-0-70/2cb95","header":"https://img.aso.fr/core_app/img-cycling-vue-png/tbv/10053/0:0,2000:690-0-0-70/e9326","nationality":"brn","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/tbv/9715/0:0,400:400-0-0-70/8dbc4","banner":null,"_id":"582874b2c37b608578b00441b3f42fba495430aecc9514da655335e386f2841a","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628792304448,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nameShort":"DECEUNINCK-QUICK-STEP","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/dqt/9700/0:0,400:400-0-0-70/c95e9","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/dqt/9677/0:0,400:400-0-0-70/1b512","name":"DECEUNINCK - QUICK - STEP","color":"#000000","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/dqt/9677/0:0,400:400-60-0-70/9b362","nationality":"bel","banner":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/dqt/10043/0:0,2000:690-0-0-70/3720b","code":"DQT","_id":"693e2d118cd11a09d515de81eb8c3208f194dea042462f18f231691f2c8fd093","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885375,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/iwg/9686/0:0,400:400-0-0-70/08fcc","nameShort":"INTERMARCHE - WANTY - GOBERT ","code":"IWG","header":"https://img.aso.fr/core_app/img-cycling-vue-png/iwg/10050/0:0,2000:690-0-0-70/94f35","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/iwg/9712/0:0,400:400-0-0-70/c5d38","color":"#000000","nationality":"bel","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/iwg/9686/0:0,400:400-60-0-70/bd481","name":"INTERMARCHE - WANTY - GOBERT MATERIAUX","banner":null,"_id":"9300a8e72e45f993bb9c648f10d28268956fe7634b8d2ad3c9b47050a44509a1","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885943,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"name":"TREK - SEGAFREDO","logo_live":null,"logo":"https://img.aso.fr/core_app/img-cycling-vue-png/tfs/9708/0:0,400:400-0-0-70/115ff","banner":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/tfs/10054/0:0,2000:690-0-0-70/f1b10","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/tfs/9663/0:0,400:400-60-0-70/49d3f","nationality":"usa","code":"TFS","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/tfs/9663/0:0,400:400-0-0-70/1c1db","nameShort":"TREK - SEGAFREDO","color":"#000000","_id":"af16b053b33e0976058e2fd8cbeece1dfa242e0067848ce32d6a8170a4116981","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886667,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"code":"AFC","color":"#000000","nameShort":"ALPECIN - FENIX","banner":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/afc/10036/0:0,2000:690-0-0-70/f9278","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/afc/9693/0:0,400:400-0-0-70/d0487","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/afc/9668/0:0,400:400-60-0-70/5f529","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/afc/9668/0:0,400:400-0-0-70/d6d20","logo_live":null,"nationality":"bel","name":"ALPECIN - FENIX","_id":"b28391005c2a999185536d91620809926c53384f374088ff582b9d2c4b3faaf2","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885768,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"logo":"https://img.aso.fr/core_app/img-cycling-vue-jpg/eus/9699/0:0,400:400-0-0-70/bc4bb","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/eus/9681/0:0,400:400-60-0-70/865ea","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/eus/9681/0:0,400:400-0-0-70/9d202","header":"https://img.aso.fr/core_app/img-cycling-vue-png/eus/10046/0:0,2000:690-0-0-70/b34de","banner":null,"code":"EUS","nationality":"esp","nameShort":"EUSKALTEL-EUSKADI","name":"EUSKALTEL-EUSKADI","color":"#000000","logo_live":null,"_id":"c25d7f4333861339360c0a39ac2e1339305515a3ff06e03e0dd61d35578906ce","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885563,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"color":"#000000","banner":null,"code":"CJR","nationality":"esp","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/cjr/9691/0:0,400:400-60-0-70/0e54c","name":"CAJA RURAL - SEGUROS RGA","nameShort":"CAJA RURAL - SEGUROS RGA","logo_live":null,"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/cjr/9691/0:0,400:400-0-0-70/d213f","header":"https://img.aso.fr/core_app/img-cycling-vue-png/cjr/10041/0:0,2000:690-0-0-70/69c8d","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/cjr/9720/0:0,400:400-0-0-70/be8da","_id":"d8a17efebfa3ffa9a96420135ea43564b1030c56695ca13ee10eb9ba6e323298","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768885161,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"name":"LOTTO SOUDAL","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/lts/9687/0:0,400:400-60-0-70/0bfab","nationality":"bel","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/lts/9687/0:0,400:400-0-0-70/bede3","banner":null,"logo":"https://img.aso.fr/core_app/img-cycling-vue-png/lts/9713/0:0,400:400-0-0-70/da062","logo_live":null,"header":"https://img.aso.fr/core_app/img-cycling-vue-png/lts/10051/0:0,2000:690-0-0-70/b4e22","nameShort":"LOTTO SOUDAL","code":"LTS","color":"#000000","_id":"e32dda11caacb1a20d156c5b211b85036c7d3b6ade4daa7d996dc3bbaa50dbf0","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886131,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"nationality":"uae","banner":null,"nameShort":"UAE TEAM EMIRATES","code":"UAD","jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/uad/9666/0:0,400:400-0-0-70/915f3","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/uad/9718/0:0,400:400-0-0-70/4183f","header":"https://img.aso.fr/core_app/img-cycling-vue-png/uad/10057/0:0,2000:690-0-0-70/f13c8","name":"UAE TEAM EMIRATES","logo_live":null,"jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/uad/9666/0:0,400:400-60-0-70/e360b","color":"#000000","_id":"e9785bb882cfebfb4c74ff18ab32916a034fc3e1870ebfb2c020c4bddc097f45","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886753,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"},{"jersey":"https://img.aso.fr/core_app/img-cycling-vue-png/bex/9672/0:0,400:400-0-0-70/c104e","logo":"https://img.aso.fr/core_app/img-cycling-vue-png/bex/9697/0:0,400:400-0-0-70/80978","code":"BEX","nationality":"aus","header":"https://img.aso.fr/core_app/img-cycling-vue-png/bex/10039/0:0,2000:690-0-0-70/e6769","banner":null,"color":"#000000","logo_live":null,"name":"TEAM BIKEEXCHANGE","jersey_sm":"https://img.aso.fr/core_app/img-cycling-vue-png/bex/9672/0:0,400:400-60-0-70/c8c96","nameShort":"TEAM BIKEEXCHANGE","_id":"f5c6ed014e6caae9d192c0dc65260d810cb4721ee14ed6f8d96414ee81011fc2","_bind":"team-2021","_origin":"team-2021","_updatedAt":1628768886338,"_parent":"millesime:d64e59c0fcfc4e2ae119c1f10c8989f6948f2afe358721b8dd1d87ddcb6ac2ce","_key":"code"}];

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
document.getElementById('toolbar').innerHTML += '<img src="https://racecenter.lavuelta.es/img/logo.b231a68d.png" />';

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
