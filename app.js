// run script in javascript console on the live data page (https://racecenter.criterium-du-dauphine.fr/en)
// code by @velofacts and @Gnoembah
var max_gap = 5;
var max_slow_speed = 5;
var gc = ',11,21,31,33,35,41,44,47,51,54,56,61,63,71,75,81,84,91,101,111,121,125,136,165,176,181,191,201,';
var green = ',,';

var teams = [{
    "nameShort": "ISRAEL START-UP NATION",
    "banner": null,
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/isn/3661/0:0,400:400-0-0-70/97c67",
    "logo_live": null,
    "color": "#000000",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/isn/3629/0:0,400:400-0-0-70/a746a",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/isn/3692/0:0,2000:690-0-0-70/57345",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/isn/3629/0:0,400:400-60-0-70/60570",
    "code": "ISN",
    "nationality": "isr",
    "name": "ISRAEL START-UP NATION",
    "_id": "04f849582b1d2b4b32e77d09926ff226701e66d5bcd4fca31bde4980ba077959",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_updatedAt": 1622323310679,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5",
    "_key": "code"
}, {
    "logo_live": null,
    "banner": null,
    "color": "#000000",
    "code": "LTS",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/lts/3694/0:0,2000:690-0-0-70/34290",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/lts/3631/0:0,400:400-0-0-70/2517f",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/lts/3631/0:0,400:400-60-0-70/d4c76",
    "nameShort": "LOTTO SOUDAL",
    "name": "LOTTO SOUDAL",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/lts/3669/0:0,400:400-0-0-70/c3201",
    "nationality": "bel",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "05602bab385f988bb1fb1c0ccdff6067f474ed2069ba780071de479cc74f4ff9",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "code": "IWG",
    "banner": null,
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/iwg/3693/0:0,2000:690-0-0-70/f0d0d",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/3630/0:0,400:400-60-0-70/33399",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/3660/0:0,400:400-0-0-70/34287",
    "nameShort": "INTERMARCHE - WANTY - GOBERT",
    "nationality": "bel",
    "color": "#000000",
    "logo_live": null,
    "name": "INTERMARCHE - WANTY - GOBERT MATERIAUX",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/iwg/3630/0:0,400:400-0-0-70/4c130",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "0acab0ed1026a42b234314b0b84e95a6bb0ed051c78655fd091de7297bed47d4",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bahrain-victorious-2021-ok/3753/0:0,400:400-60-0-70/83b9b",
    "banner": null,
    "logo_live": null,
    "color": "#000000",
    "code": "TBV",
    "nameShort": "BAHRAIN VICTORIOUS",
    "nationality": "brn",
    "name": "BAHRAIN VICTORIOUS",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/tbv/3667/0:0,400:400-0-0-70/0005b",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/tbv/3696/0:0,2000:690-0-0-70/4c070",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/bahrain-victorious-2021-ok/3753/0:0,400:400-0-0-70/c7684",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "3683432480037f88866d8d01cdde55a4764598776c3215078c4b4c6ebe3daa6c",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "nameShort": "ASTANA - PREMIER TECH",
    "name": "ASTANA - PREMIER TECH",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/ast/3646/0:0,400:400-0-0-70/ec136",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/ast/3703/0:0,2000:690-0-0-70/39060",
    "code": "APT",
    "nationality": "kaz",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/ast/3613/0:0,400:400-0-0-70/3d939",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/ast/3613/0:0,400:400-60-0-70/3fb88",
    "logo_live": null,
    "color": "#000000",
    "banner": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "4533bd8a5f87e99cb5334c93a5763312af5fb7236a074e4279519d2822b99ba5",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/3665/0:0,400:400-0-0-70/21672",
    "color": "#000000",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/3639/0:0,400:400-0-0-70/e4291",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tjv/3639/0:0,400:400-60-0-70/ba16c",
    "logo_live": null,
    "banner": null,
    "name": "JUMBO - VISMA",
    "code": "TJV",
    "nationality": "ned",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/tjv/3698/0:0,2000:690-0-0-70/c8892",
    "nameShort": "JUMBO - VISMA",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "4b41fc45fb35938afa42af651bdc14b40103ac3d388eefe21c5e76ebe4be87a4",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "nameShort": "BORA - HANSGROHE",
    "logo_live": null,
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/boh/3616/0:0,400:400-0-0-70/a6e0c",
    "code": "BOH",
    "banner": null,
    "color": "#000000",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/boh/3649/0:0,400:400-0-0-70/29b7f",
    "name": "BORA - HANSGROHE",
    "nationality": "ger",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/boh/3685/0:0,2000:690-0-0-70/92ed1",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/boh/3616/0:0,400:400-60-0-70/7e4f0",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "50d051130dd148909d06571ef9c5fcd4fbf339741e560fad722512448fcc4bbe",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "color": "#000000",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/dqt/3621/0:0,400:400-60-0-70/51404",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/dqt/3687/0:0,2000:690-0-0-70/b37d9",
    "nationality": "bel",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/dqt/3655/0:0,400:400-0-0-70/e2b04",
    "logo_live": null,
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/dqt/3621/0:0,400:400-0-0-70/5f50d",
    "banner": null,
    "name": "DECEUNINCK - QUICK - STEP",
    "nameShort": "DECEUNINCK-QUICK-STEP",
    "code": "DQT",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "5ec63539d99ed324baadf41a1fc2d34b1177713ee09326f0bd2af1dd2a8aec7e",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/cof/3619/0:0,400:400-60-0-70/aac2b",
    "name": "COFIDIS",
    "nationality": "fra",
    "color": "#000000",
    "code": "COF",
    "banner": null,
    "nameShort": "COFIDIS",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/cof/3648/0:0,400:400-0-0-70/75031",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/cof/3619/0:0,400:400-0-0-70/c0472",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/cof/3686/0:0,2000:690-0-0-70/9f6f8",
    "logo_live": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "64d770a96b740c655c26776a7e0d14d820af41c8de0e3e86cda0a53d12f0e5f4",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "code": "EFN",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/efn/3623/0:0,400:400-0-0-70/14af9",
    "logo_live": null,
    "nameShort": "EF EDUCATION - NIPPO",
    "banner": null,
    "color": "#000000",
    "nationality": "usa",
    "name": "EF EDUCATION - NIPPO",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/efn/3623/0:0,400:400-60-0-70/af104",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/efn/3650/0:0,400:400-0-0-70/b0757",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/efn/3689/0:0,2000:690-0-0-70/0324b",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "68b455ef29303fb819db3bf7ffd735f46e3a1622661f12f22813d588380f18ec",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/dsm/3688/0:0,2000:690-0-0-70/146e3",
    "color": "#000000",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/3622/0:0,400:400-0-0-70/0c577",
    "name": "TEAM DSM",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/3652/0:0,400:400-0-0-70/31dde",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/dsm/3622/0:0,400:400-60-0-70/d4c73",
    "banner": null,
    "nationality": "ger",
    "logo_live": null,
    "code": "DSM",
    "nameShort": "TEAM DSM",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "6b33241c0941ebfb1231e93c013fdc5fad4435091069102817d6c59e2864e05e",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "nameShort": "TREK - SEGAFREDO",
    "banner": null,
    "logo_live": null,
    "nationality": "usa",
    "code": "TFS",
    "name": "TREK - SEGAFREDO",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/3637/0:0,400:400-0-0-70/b1e8b",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/3637/0:0,400:400-60-0-70/2466c",
    "color": "#000000",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/tfs/3697/0:0,2000:690-0-0-70/445f3",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/tfs/3668/0:0,400:400-0-0-70/dd393",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "7481d689babbb48ee8060e60080dfbff014e8b5cdcd4450d4b1432208e10f96c",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "name": "B&B HOTELS  P/B KTM",
    "nationality": "fra",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/bbk/3704/0:0,2000:690-0-0-70/e7240",
    "code": "BBK",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/3614/0:0,400:400-60-0-70/ea221",
    "banner": null,
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/3645/0:0,400:400-0-0-70/8d13d",
    "color": "#000000",
    "nameShort": "B&B HOTELS  P/B KTM",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/bbk/3614/0:0,400:400-0-0-70/e8e50",
    "logo_live": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "74d4d5148490ee9b839b9c777983bc74ac41fc8b14082597b3024d67c8a78ef7",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "nameShort": "UAE TEAM EMIRATES",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/uad/3666/0:0,400:400-0-0-70/073d7",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/uad/3700/0:0,2000:690-0-0-70/33333",
    "name": "UAE TEAM EMIRATES",
    "code": "UAD",
    "color": "#000000",
    "banner": null,
    "nationality": "uae",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/uad/3640/0:0,400:400-60-0-70/28d64",
    "logo_live": null,
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/uad/3640/0:0,400:400-0-0-70/14520",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "92cd16442c76102c1911fb54f4fb8d6c2b0df12ff22e98e62f4e2a75fda7e440",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "code": "MOV",
    "nameShort": "MOVISTAR TEAM",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/mov/3632/0:0,400:400-60-0-70/0684f",
    "banner": null,
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/mov/3695/0:0,2000:690-0-0-70/49628",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/mov/3663/0:0,400:400-0-0-70/78fb3",
    "nationality": "esp",
    "name": "MOVISTAR TEAM",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/mov/3632/0:0,400:400-0-0-70/1d549",
    "logo_live": null,
    "color": "#000000",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "935404586973b16693736cf1f0a010bd1fb70c23ce90057cea5dd632ff51f012",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/igd/3691/0:0,2000:690-0-0-70/e445e",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/igd/3658/0:0,400:400-0-0-70/4d5fa",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/igd/3628/0:0,400:400-60-0-70/27b57",
    "code": "IGD",
    "color": "#000000",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/igd/3628/0:0,400:400-0-0-70/bb685",
    "nameShort": "INEOS GRENADIERS",
    "logo_live": null,
    "name": "INEOS GRENADIERS",
    "nationality": "gbr",
    "banner": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "af65d43d878db85e164a04bc1c8e95318b728a7349fcb0b69609ac7846e363a5",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/act/3701/0:0,2000:690-0-0-70/f2f3d",
    "nameShort": "AG2R CITROEN TEAM",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/act/3610/0:0,400:400-0-0-70/67cc7",
    "code": "ACT",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/act/3610/0:0,400:400-60-0-70/29b73",
    "color": "#ffffff",
    "name": "AG2R CITROEN TEAM",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/act/3641/0:0,400:400-0-0-70/7de47",
    "nationality": "fra",
    "logo_live": null,
    "banner": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "b48460823a6531bcbddb6bd1bcc46b65d229fdb9dacdd9390b5334cb802451e1",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "nationality": "aus",
    "name": "TEAM BIKEEXCHANGE",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/bex/3647/0:0,400:400-0-0-70/4b1f9",
    "color": "#000000",
    "code": "BEX",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/bex/3615/0:0,400:400-60-0-70/b0c16",
    "logo_live": null,
    "banner": null,
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/bex/3615/0:0,400:400-0-0-70/41c5f",
    "nameShort": "TEAM BIKEEXCHANGE",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/bex/3684/0:0,2000:690-0-0-70/57bf9",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "bc6c490d2571258df000746a8dd5966723fe4f88ed715fa380fccf2fc742c716",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/3657/0:0,400:400-0-0-70/8920a",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/gfc/3690/0:0,2000:690-0-0-70/08616",
    "nameShort": "GROUPAMA - FDJ",
    "code": "GFC",
    "name": "GROUPAMA - FDJ",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/3627/0:0,400:400-0-0-70/d368a",
    "color": "#000000",
    "nationality": "fra",
    "logo_live": null,
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/gfc/3627/0:0,400:400-60-0-70/e7186",
    "banner": null,
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "d21be69ea4fd359e4b295459a54947454ff6b9edbc4b7cc4fd763235f5c77068",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/ark/3612/0:0,400:400-0-0-70/7cdb5",
    "color": "#000000",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/ark/3643/0:0,400:400-0-0-70/03c03",
    "name": "TEAM ARKEA - SAMSIC",
    "banner": null,
    "code": "ARK",
    "logo_live": null,
    "nameShort": "TEAM ARKEA - SAMSIC",
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/ark/3612/0:0,400:400-60-0-70/5385b",
    "nationality": "fra",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/ark/3702/0:0,2000:690-0-0-70/a8978",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "e11e7031c0d612a20d039b2dfd8fabfb7561a061a0fd37b652ce74cbab70bc4e",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
}, {
    "jersey_sm": "https://img.aso.fr/core_app/img-cycling-cdd-png/tqa/3638/0:0,400:400-60-0-70/a4288",
    "jersey": "https://img.aso.fr/core_app/img-cycling-cdd-png/tqa/3638/0:0,400:400-0-0-70/cc74e",
    "code": "TQA",
    "nameShort": "TEAM QHUBEKA ASSOS",
    "logo": "https://img.aso.fr/core_app/img-cycling-cdd-png/tqa/3659/0:0,400:400-0-0-70/3cbc4",
    "header": "https://img.aso.fr/core_app/img-cycling-cdd-jpg/tqa/3699/0:0,2000:690-0-0-70/86912",
    "nationality": "rsa",
    "banner": null,
    "logo_live": null,
    "color": "#000000",
    "name": "TEAM QHUBEKA ASSOS",
    "_bind": "team-2021",
    "_origin": "team-2021",
    "_id": "fcfdef3b16ea190cd84e1ca05ae4ac0d15e3fb422a51af6eee3d8e607f7c24a4",
    "_key": "code",
    "_updatedAt": 1622323243322,
    "_parent": "millesime:c7e64f527d9fd4c6347a39ac58d4c82913c3c8851618e19ed584331ea08568d5"
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
                    if ((gap - previous_gap) > max_gap) {
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
