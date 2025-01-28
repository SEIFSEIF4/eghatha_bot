var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/.pnpm/hijri-converter@1.1.1/node_modules/hijri-converter/index.js
var require_hijri_converter = __commonJS({
  "node_modules/.pnpm/hijri-converter@1.1.1/node_modules/hijri-converter/index.js"(exports) {
    var ummalqura = {
      ummalquraData: [
        28607,
        28636,
        28665,
        28695,
        28724,
        28754,
        28783,
        28813,
        28843,
        28872,
        28901,
        28931,
        28960,
        28990,
        29019,
        29049,
        29078,
        29108,
        29137,
        29167,
        29196,
        29226,
        29255,
        29285,
        29315,
        29345,
        29375,
        29404,
        29434,
        29463,
        29492,
        29522,
        29551,
        29580,
        29610,
        29640,
        29669,
        29699,
        29729,
        29759,
        29788,
        29818,
        29847,
        29876,
        29906,
        29935,
        29964,
        29994,
        30023,
        30053,
        30082,
        30112,
        30141,
        30171,
        30200,
        30230,
        30259,
        30289,
        30318,
        30348,
        30378,
        30408,
        30437,
        30467,
        30496,
        30526,
        30555,
        30585,
        30614,
        30644,
        30673,
        30703,
        30732,
        30762,
        30791,
        30821,
        30850,
        30880,
        30909,
        30939,
        30968,
        30998,
        31027,
        31057,
        31086,
        31116,
        31145,
        31175,
        31204,
        31234,
        31263,
        31293,
        31322,
        31352,
        31381,
        31411,
        31441,
        31471,
        31500,
        31530,
        31559,
        31589,
        31618,
        31648,
        31676,
        31706,
        31736,
        31766,
        31795,
        31825,
        31854,
        31884,
        31913,
        31943,
        31972,
        32002,
        32031,
        32061,
        32090,
        32120,
        32150,
        32180,
        32209,
        32239,
        32268,
        32298,
        32327,
        32357,
        32386,
        32416,
        32445,
        32475,
        32504,
        32534,
        32563,
        32593,
        32622,
        32652,
        32681,
        32711,
        32740,
        32770,
        32799,
        32829,
        32858,
        32888,
        32917,
        32947,
        32976,
        33006,
        33035,
        33065,
        33094,
        33124,
        33153,
        33183,
        33213,
        33243,
        33272,
        33302,
        33331,
        33361,
        33390,
        33420,
        33450,
        33479,
        33509,
        33539,
        33568,
        33598,
        33627,
        33657,
        33686,
        33716,
        33745,
        33775,
        33804,
        33834,
        33863,
        33893,
        33922,
        33952,
        33981,
        34011,
        34040,
        34069,
        34099,
        34128,
        34158,
        34187,
        34217,
        34247,
        34277,
        34306,
        34336,
        34365,
        34395,
        34424,
        34454,
        34483,
        34512,
        34542,
        34571,
        34601,
        34631,
        34660,
        34690,
        34719,
        34749,
        34778,
        34808,
        34837,
        34867,
        34896,
        34926,
        34955,
        34985,
        35015,
        35044,
        35074,
        35103,
        35133,
        35162,
        35192,
        35222,
        35251,
        35280,
        35310,
        35340,
        35370,
        35399,
        35429,
        35458,
        35488,
        35517,
        35547,
        35576,
        35605,
        35635,
        35665,
        35694,
        35723,
        35753,
        35782,
        35811,
        35841,
        35871,
        35901,
        35930,
        35960,
        35989,
        36019,
        36048,
        36078,
        36107,
        36136,
        36166,
        36195,
        36225,
        36254,
        36284,
        36314,
        36343,
        36373,
        36403,
        36433,
        36462,
        36492,
        36521,
        36551,
        36580,
        36610,
        36639,
        36669,
        36698,
        36728,
        36757,
        36786,
        36816,
        36845,
        36875,
        36904,
        36934,
        36963,
        36993,
        37022,
        37052,
        37081,
        37111,
        37141,
        37170,
        37200,
        37229,
        37259,
        37288,
        37318,
        37347,
        37377,
        37406,
        37436,
        37465,
        37495,
        37524,
        37554,
        37584,
        37613,
        37643,
        37672,
        37701,
        37731,
        37760,
        37790,
        37819,
        37849,
        37878,
        37908,
        37938,
        37967,
        37997,
        38027,
        38056,
        38085,
        38115,
        38144,
        38174,
        38203,
        38233,
        38262,
        38292,
        38322,
        38351,
        38381,
        38410,
        38440,
        38469,
        38499,
        38528,
        38558,
        38587,
        38617,
        38646,
        38676,
        38705,
        38735,
        38764,
        38794,
        38823,
        38853,
        38882,
        38912,
        38941,
        38971,
        39001,
        39030,
        39059,
        39089,
        39118,
        39148,
        39178,
        39208,
        39237,
        39267,
        39297,
        39326,
        39355,
        39385,
        39414,
        39444,
        39473,
        39503,
        39532,
        39562,
        39592,
        39621,
        39650,
        39680,
        39709,
        39739,
        39768,
        39798,
        39827,
        39857,
        39886,
        39916,
        39946,
        39975,
        40005,
        40035,
        40064,
        40094,
        40123,
        40153,
        40182,
        40212,
        40241,
        40271,
        40300,
        40330,
        40359,
        40389,
        40418,
        40448,
        40477,
        40507,
        40536,
        40566,
        40595,
        40625,
        40655,
        40685,
        40714,
        40744,
        40773,
        40803,
        40832,
        40862,
        40892,
        40921,
        40951,
        40980,
        41009,
        41039,
        41068,
        41098,
        41127,
        41157,
        41186,
        41216,
        41245,
        41275,
        41304,
        41334,
        41364,
        41393,
        41422,
        41452,
        41481,
        41511,
        41540,
        41570,
        41599,
        41629,
        41658,
        41688,
        41718,
        41748,
        41777,
        41807,
        41836,
        41865,
        41894,
        41924,
        41953,
        41983,
        42012,
        42042,
        42072,
        42102,
        42131,
        42161,
        42190,
        42220,
        42249,
        42279,
        42308,
        42337,
        42367,
        42397,
        42426,
        42456,
        42485,
        42515,
        42545,
        42574,
        42604,
        42633,
        42662,
        42692,
        42721,
        42751,
        42780,
        42810,
        42839,
        42869,
        42899,
        42929,
        42958,
        42988,
        43017,
        43046,
        43076,
        43105,
        43135,
        43164,
        43194,
        43223,
        43253,
        43283,
        43312,
        43342,
        43371,
        43401,
        43430,
        43460,
        43489,
        43519,
        43548,
        43578,
        43607,
        43637,
        43666,
        43696,
        43726,
        43755,
        43785,
        43814,
        43844,
        43873,
        43903,
        43932,
        43962,
        43991,
        44021,
        44050,
        44080,
        44109,
        44139,
        44169,
        44198,
        44228,
        44258,
        44287,
        44317,
        44346,
        44375,
        44405,
        44434,
        44464,
        44493,
        44523,
        44553,
        44582,
        44612,
        44641,
        44671,
        44700,
        44730,
        44759,
        44788,
        44818,
        44847,
        44877,
        44906,
        44936,
        44966,
        44996,
        45025,
        45055,
        45084,
        45114,
        45143,
        45172,
        45202,
        45231,
        45261,
        45290,
        45320,
        45350,
        45380,
        45409,
        45439,
        45468,
        45498,
        45527,
        45556,
        45586,
        45615,
        45644,
        45674,
        45704,
        45733,
        45763,
        45793,
        45823,
        45852,
        45882,
        45911,
        45940,
        45970,
        45999,
        46028,
        46058,
        46088,
        46117,
        46147,
        46177,
        46206,
        46236,
        46265,
        46295,
        46324,
        46354,
        46383,
        46413,
        46442,
        46472,
        46501,
        46531,
        46560,
        46590,
        46620,
        46649,
        46679,
        46708,
        46738,
        46767,
        46797,
        46826,
        46856,
        46885,
        46915,
        46944,
        46974,
        47003,
        47033,
        47063,
        47092,
        47122,
        47151,
        47181,
        47210,
        47240,
        47269,
        47298,
        47328,
        47357,
        47387,
        47417,
        47446,
        47476,
        47506,
        47535,
        47565,
        47594,
        47624,
        47653,
        47682,
        47712,
        47741,
        47771,
        47800,
        47830,
        47860,
        47890,
        47919,
        47949,
        47978,
        48008,
        48037,
        48066,
        48096,
        48125,
        48155,
        48184,
        48214,
        48244,
        48273,
        48303,
        48333,
        48362,
        48392,
        48421,
        48450,
        48480,
        48509,
        48538,
        48568,
        48598,
        48627,
        48657,
        48687,
        48717,
        48746,
        48776,
        48805,
        48834,
        48864,
        48893,
        48922,
        48952,
        48982,
        49011,
        49041,
        49071,
        49100,
        49130,
        49160,
        49189,
        49218,
        49248,
        49277,
        49306,
        49336,
        49365,
        49395,
        49425,
        49455,
        49484,
        49514,
        49543,
        49573,
        49602,
        49632,
        49661,
        49690,
        49720,
        49749,
        49779,
        49809,
        49838,
        49868,
        49898,
        49927,
        49957,
        49986,
        50016,
        50045,
        50075,
        50104,
        50133,
        50163,
        50192,
        50222,
        50252,
        50281,
        50311,
        50340,
        50370,
        50400,
        50429,
        50459,
        50488,
        50518,
        50547,
        50576,
        50606,
        50635,
        50665,
        50694,
        50724,
        50754,
        50784,
        50813,
        50843,
        50872,
        50902,
        50931,
        50960,
        50990,
        51019,
        51049,
        51078,
        51108,
        51138,
        51167,
        51197,
        51227,
        51256,
        51286,
        51315,
        51345,
        51374,
        51403,
        51433,
        51462,
        51492,
        51522,
        51552,
        51582,
        51611,
        51641,
        51670,
        51699,
        51729,
        51758,
        51787,
        51816,
        51846,
        51876,
        51906,
        51936,
        51965,
        51995,
        52025,
        52054,
        52083,
        52113,
        52142,
        52171,
        52200,
        52230,
        52260,
        52290,
        52319,
        52349,
        52379,
        52408,
        52438,
        52467,
        52497,
        52526,
        52555,
        52585,
        52614,
        52644,
        52673,
        52703,
        52733,
        52762,
        52792,
        52822,
        52851,
        52881,
        52910,
        52939,
        52969,
        52998,
        53028,
        53057,
        53087,
        53116,
        53146,
        53176,
        53205,
        53235,
        53264,
        53294,
        53324,
        53353,
        53383,
        53412,
        53441,
        53471,
        53500,
        53530,
        53559,
        53589,
        53619,
        53648,
        53678,
        53708,
        53737,
        53767,
        53796,
        53825,
        53855,
        53884,
        53913,
        53943,
        53973,
        54003,
        54032,
        54062,
        54092,
        54121,
        54151,
        54180,
        54209,
        54239,
        54268,
        54297,
        54327,
        54357,
        54387,
        54416,
        54446,
        54476,
        54505,
        54535,
        54564,
        54593,
        54623,
        54652,
        54681,
        54711,
        54741,
        54770,
        54800,
        54830,
        54859,
        54889,
        54919,
        54948,
        54977,
        55007,
        55036,
        55066,
        55095,
        55125,
        55154,
        55184,
        55213,
        55243,
        55273,
        55302,
        55332,
        55361,
        55391,
        55420,
        55450,
        55479,
        55508,
        55538,
        55567,
        55597,
        55627,
        55657,
        55686,
        55716,
        55745,
        55775,
        55804,
        55834,
        55863,
        55892,
        55922,
        55951,
        55981,
        56011,
        56040,
        56070,
        56100,
        56129,
        56159,
        56188,
        56218,
        56247,
        56276,
        56306,
        56335,
        56365,
        56394,
        56424,
        56454,
        56483,
        56513,
        56543,
        56572,
        56601,
        56631,
        56660,
        56690,
        56719,
        56749,
        56778,
        56808,
        56837,
        56867,
        56897,
        56926,
        56956,
        56985,
        57015,
        57044,
        57074,
        57103,
        57133,
        57162,
        57192,
        57221,
        57251,
        57280,
        57310,
        57340,
        57369,
        57399,
        57429,
        57458,
        57487,
        57517,
        57546,
        57576,
        57605,
        57634,
        57664,
        57694,
        57723,
        57753,
        57783,
        57813,
        57842,
        57871,
        57901,
        57930,
        57959,
        57989,
        58018,
        58048,
        58077,
        58107,
        58137,
        58167,
        58196,
        58226,
        58255,
        58285,
        58314,
        58343,
        58373,
        58402,
        58432,
        58461,
        58491,
        58521,
        58551,
        58580,
        58610,
        58639,
        58669,
        58698,
        58727,
        58757,
        58786,
        58816,
        58845,
        58875,
        58905,
        58934,
        58964,
        58994,
        59023,
        59053,
        59082,
        59111,
        59141,
        59170,
        59200,
        59229,
        59259,
        59288,
        59318,
        59348,
        59377,
        59407,
        59436,
        59466,
        59495,
        59525,
        59554,
        59584,
        59613,
        59643,
        59672,
        59702,
        59731,
        59761,
        59791,
        59820,
        59850,
        59879,
        59909,
        59939,
        59968,
        59997,
        60027,
        60056,
        60086,
        60115,
        60145,
        60174,
        60204,
        60234,
        60264,
        60293,
        60323,
        60352,
        60381,
        60411,
        60440,
        60469,
        60499,
        60528,
        60558,
        60588,
        60618,
        60648,
        60677,
        60707,
        60736,
        60765,
        60795,
        60824,
        60853,
        60883,
        60912,
        60942,
        60972,
        61002,
        61031,
        61061,
        61090,
        61120,
        61149,
        61179,
        61208,
        61237,
        61267,
        61296,
        61326,
        61356,
        61385,
        61415,
        61445,
        61474,
        61504,
        61533,
        61563,
        61592,
        61621,
        61651,
        61680,
        61710,
        61739,
        61769,
        61799,
        61828,
        61858,
        61888,
        61917,
        61947,
        61976,
        62006,
        62035,
        62064,
        62094,
        62123,
        62153,
        62182,
        62212,
        62242,
        62271,
        62301,
        62331,
        62360,
        62390,
        62419,
        62448,
        62478,
        62507,
        62537,
        62566,
        62596,
        62625,
        62655,
        62685,
        62715,
        62744,
        62774,
        62803,
        62832,
        62862,
        62891,
        62921,
        62950,
        62980,
        63009,
        63039,
        63069,
        63099,
        63128,
        63157,
        63187,
        63216,
        63246,
        63275,
        63305,
        63334,
        63363,
        63393,
        63423,
        63453,
        63482,
        63512,
        63541,
        63571,
        63600,
        63630,
        63659,
        63689,
        63718,
        63747,
        63777,
        63807,
        63836,
        63866,
        63895,
        63925,
        63955,
        63984,
        64014,
        64043,
        64073,
        64102,
        64131,
        64161,
        64190,
        64220,
        64249,
        64279,
        64309,
        64339,
        64368,
        64398,
        64427,
        64457,
        64486,
        64515,
        64545,
        64574,
        64603,
        64633,
        64663,
        64692,
        64722,
        64752,
        64782,
        64811,
        64841,
        64870,
        64899,
        64929,
        64958,
        64987,
        65017,
        65047,
        65076,
        65106,
        65136,
        65166,
        65195,
        65225,
        65254,
        65283,
        65313,
        65342,
        65371,
        65401,
        65431,
        65460,
        65490,
        65520,
        65549,
        65579,
        65608,
        65638,
        65667,
        65697,
        65726,
        65755,
        65785,
        65815,
        65844,
        65874,
        65903,
        65933,
        65963,
        65992,
        66022,
        66051,
        66081,
        66110,
        66140,
        66169,
        66199,
        66228,
        66258,
        66287,
        66317,
        66346,
        66376,
        66405,
        66435,
        66465,
        66494,
        66524,
        66553,
        66583,
        66612,
        66641,
        66671,
        66700,
        66730,
        66760,
        66789,
        66819,
        66849,
        66878,
        66908,
        66937,
        66967,
        66996,
        67025,
        67055,
        67084,
        67114,
        67143,
        67173,
        67203,
        67233,
        67262,
        67292,
        67321,
        67351,
        67380,
        67409,
        67439,
        67468,
        67497,
        67527,
        67557,
        67587,
        67617,
        67646,
        67676,
        67705,
        67735,
        67764,
        67793,
        67823,
        67852,
        67882,
        67911,
        67941,
        67971,
        68e3,
        68030,
        68060,
        68089,
        68119,
        68148,
        68177,
        68207,
        68236,
        68266,
        68295,
        68325,
        68354,
        68384,
        68414,
        68443,
        68473,
        68502,
        68532,
        68561,
        68591,
        68620,
        68650,
        68679,
        68708,
        68738,
        68768,
        68797,
        68827,
        68857,
        68886,
        68916,
        68946,
        68975,
        69004,
        69034,
        69063,
        69092,
        69122,
        69152,
        69181,
        69211,
        69240,
        69270,
        69300,
        69330,
        69359,
        69388,
        69418,
        69447,
        69476,
        69506,
        69535,
        69565,
        69595,
        69624,
        69654,
        69684,
        69713,
        69743,
        69772,
        69802,
        69831,
        69861,
        69890,
        69919,
        69949,
        69978,
        70008,
        70038,
        70067,
        70097,
        70126,
        70156,
        70186,
        70215,
        70245,
        70274,
        70303,
        70333,
        70362,
        70392,
        70421,
        70451,
        70481,
        70510,
        70540,
        70570,
        70599,
        70629,
        70658,
        70687,
        70717,
        70746,
        70776,
        70805,
        70835,
        70864,
        70894,
        70924,
        70954,
        70983,
        71013,
        71042,
        71071,
        71101,
        71130,
        71159,
        71189,
        71218,
        71248,
        71278,
        71308,
        71337,
        71367,
        71397,
        71426,
        71455,
        71485,
        71514,
        71543,
        71573,
        71602,
        71632,
        71662,
        71691,
        71721,
        71751,
        71781,
        71810,
        71839,
        71869,
        71898,
        71927,
        71957,
        71986,
        72016,
        72046,
        72075,
        72105,
        72135,
        72164,
        72194,
        72223,
        72253,
        72282,
        72311,
        72341,
        72370,
        72400,
        72429,
        72459,
        72489,
        72518,
        72548,
        72577,
        72607,
        72637,
        72666,
        72695,
        72725,
        72754,
        72784,
        72813,
        72843,
        72872,
        72902,
        72931,
        72961,
        72991,
        73020,
        73050,
        73080,
        73109,
        73139,
        73168,
        73197,
        73227,
        73256,
        73286,
        73315,
        73345,
        73375,
        73404,
        73434,
        73464,
        73493,
        73523,
        73552,
        73581,
        73611,
        73640,
        73669,
        73699,
        73729,
        73758,
        73788,
        73818,
        73848,
        73877,
        73907,
        73936,
        73965,
        73995,
        74024,
        74053,
        74083,
        74113,
        74142,
        74172,
        74202,
        74231,
        74261,
        74291,
        74320,
        74349,
        74379,
        74408,
        74437,
        74467,
        74497,
        74526,
        74556,
        74586,
        74615,
        74645,
        74675,
        74704,
        74733,
        74763,
        74792,
        74822,
        74851,
        74881,
        74910,
        74940,
        74969,
        74999,
        75029,
        75058,
        75088,
        75117,
        75147,
        75176,
        75206,
        75235,
        75264,
        75294,
        75323,
        75353,
        75383,
        75412,
        75442,
        75472,
        75501,
        75531,
        75560,
        75590,
        75619,
        75648,
        75678,
        75707,
        75737,
        75766,
        75796,
        75826,
        75856,
        75885,
        75915,
        75944,
        75974,
        76003,
        76032,
        76062,
        76091,
        76121,
        76150,
        76180,
        76210,
        76239,
        76269,
        76299,
        76328,
        76358,
        76387,
        76416,
        76446,
        76475,
        76505,
        76534,
        76564,
        76593,
        76623,
        76653,
        76682,
        76712,
        76741,
        76771,
        76801,
        76830,
        76859,
        76889,
        76918,
        76948,
        76977,
        77007,
        77036,
        77066,
        77096,
        77125,
        77155,
        77185,
        77214,
        77243,
        77273,
        77302,
        77332,
        77361,
        77390,
        77420,
        77450,
        77479,
        77509,
        77539,
        77569,
        77598,
        77627,
        77657,
        77686,
        77715,
        77745,
        77774,
        77804,
        77833,
        77863,
        77893,
        77923,
        77952,
        77982,
        78011,
        78041,
        78070,
        78099,
        78129,
        78158,
        78188,
        78217,
        78247,
        78277,
        78307,
        78336,
        78366,
        78395,
        78425,
        78454,
        78483,
        78513,
        78542,
        78572,
        78601,
        78631,
        78661,
        78690,
        78720,
        78750,
        78779,
        78808,
        78838,
        78867,
        78897,
        78926,
        78956,
        78985,
        79015,
        79044,
        79074,
        79104,
        79133,
        79163,
        79192,
        79222,
        79251,
        79281,
        79310,
        79340,
        79369,
        79399,
        79428,
        79458,
        79487,
        79517,
        79546,
        79576,
        79606,
        79635,
        79665,
        79695,
        79724,
        79753,
        79783,
        79812,
        79841,
        79871,
        79900,
        79930,
        79960,
        79990
      ]
    };
    function div(a, b) {
      return ~~(a / b);
    }
    __name(div, "div");
    function mod(a, b) {
      return a - ~~(a / b) * b;
    }
    __name(mod, "mod");
    function h2d(hy, hm, hd) {
      var i = getNewMoonMJDNIndex(hy, hm);
      var mjdn = hd + ummalqura.ummalquraData[i - 1] - 1;
      var jdn = mjdn + 24e5;
      return jdn;
    }
    __name(h2d, "h2d");
    function d2h(jdn) {
      var mjdn = jdn - 24e5, i = getNewMoonMJDNIndexByJDN(mjdn), totalMonths = i + 16260, cYears = Math.floor((totalMonths - 1) / 12), hy = cYears + 1, hm = totalMonths - 12 * cYears, hd = mjdn - ummalqura.ummalquraData[i - 1] + 1;
      return {
        hy,
        hm,
        hd
      };
    }
    __name(d2h, "d2h");
    function g2d(gy, gm, gd) {
      var d2 = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
      d2 = d2 - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
      return d2;
    }
    __name(g2d, "g2d");
    function d2g(jdn) {
      var j, i, gd, gm, gy;
      j = 4 * jdn + 139361631;
      j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
      i = div(mod(j, 1461), 4) * 5 + 308;
      gd = div(mod(i, 153), 5) + 1;
      gm = mod(div(i, 153), 12) + 1;
      gy = div(j, 1461) - 100100 + div(8 - gm, 6);
      return {
        gy,
        gm,
        gd
      };
    }
    __name(d2g, "d2g");
    function getNewMoonMJDNIndex(hy, hm) {
      var cYears = hy - 1, totalMonths = cYears * 12 + 1 + (hm - 1), i = totalMonths - 16260;
      return i;
    }
    __name(getNewMoonMJDNIndex, "getNewMoonMJDNIndex");
    function getNewMoonMJDNIndexByJDN(mjdn) {
      for (var i = 0; i < ummalqura.ummalquraData.length; i = i + 1) {
        if (ummalqura.ummalquraData[i] > mjdn)
          return i;
      }
    }
    __name(getNewMoonMJDNIndexByJDN, "getNewMoonMJDNIndexByJDN");
    exports.toHijri = function(gy, gm, gd) {
      var h2 = d2h(g2d(gy, gm, gd));
      return h2;
    };
    exports.toGregorian = function(hy, hm, hd) {
      var g = d2g(h2d(hy, hm, hd));
      return g;
    };
  }
});

// node_modules/.pnpm/grammy@1.34.0/node_modules/grammy/out/web.mjs
var filterQueryCache = /* @__PURE__ */ new Map();
function matchFilter(filter) {
  const queries = Array.isArray(filter) ? filter : [
    filter
  ];
  const key = queries.join(",");
  const predicate = filterQueryCache.get(key) ?? (() => {
    const parsed = parse(queries);
    const pred = compile(parsed);
    filterQueryCache.set(key, pred);
    return pred;
  })();
  return (ctx) => predicate(ctx);
}
__name(matchFilter, "matchFilter");
function parse(filter) {
  return Array.isArray(filter) ? filter.map((q) => q.split(":")) : [
    filter.split(":")
  ];
}
__name(parse, "parse");
function compile(parsed) {
  const preprocessed = parsed.flatMap((q) => check(q, preprocess(q)));
  const ltree = treeify(preprocessed);
  const predicate = arborist(ltree);
  return (ctx) => !!predicate(ctx.update, ctx);
}
__name(compile, "compile");
function preprocess(filter) {
  const valid = UPDATE_KEYS;
  const expanded = [
    filter
  ].flatMap((q) => {
    const [l1, l2, l3] = q;
    if (!(l1 in L1_SHORTCUTS))
      return [
        q
      ];
    if (!l1 && !l2 && !l3)
      return [
        q
      ];
    const targets = L1_SHORTCUTS[l1];
    const expanded2 = targets.map((s2) => [
      s2,
      l2,
      l3
    ]);
    if (l2 === void 0)
      return expanded2;
    if (l2 in L2_SHORTCUTS && (l2 || l3))
      return expanded2;
    return expanded2.filter(([s2]) => !!valid[s2]?.[l2]);
  }).flatMap((q) => {
    const [l1, l2, l3] = q;
    if (!(l2 in L2_SHORTCUTS))
      return [
        q
      ];
    if (!l2 && !l3)
      return [
        q
      ];
    const targets = L2_SHORTCUTS[l2];
    const expanded2 = targets.map((s2) => [
      l1,
      s2,
      l3
    ]);
    if (l3 === void 0)
      return expanded2;
    return expanded2.filter(([, s2]) => !!valid[l1]?.[s2]?.[l3]);
  });
  if (expanded.length === 0) {
    throw new Error(`Shortcuts in '${filter.join(":")}' do not expand to any valid filter query`);
  }
  return expanded;
}
__name(preprocess, "preprocess");
function check(original, preprocessed) {
  if (preprocessed.length === 0)
    throw new Error("Empty filter query given");
  const errors = preprocessed.map(checkOne).filter((r) => r !== true);
  if (errors.length === 0)
    return preprocessed;
  else if (errors.length === 1)
    throw new Error(errors[0]);
  else {
    throw new Error(`Invalid filter query '${original.join(":")}'. There are ${errors.length} errors after expanding the contained shortcuts: ${errors.join("; ")}`);
  }
}
__name(check, "check");
function checkOne(filter) {
  const [l1, l2, l3, ...n] = filter;
  if (l1 === void 0)
    return "Empty filter query given";
  if (!(l1 in UPDATE_KEYS)) {
    const permitted = Object.keys(UPDATE_KEYS);
    return `Invalid L1 filter '${l1}' given in '${filter.join(":")}'. Permitted values are: ${permitted.map((k) => `'${k}'`).join(", ")}.`;
  }
  if (l2 === void 0)
    return true;
  const l1Obj = UPDATE_KEYS[l1];
  if (!(l2 in l1Obj)) {
    const permitted = Object.keys(l1Obj);
    return `Invalid L2 filter '${l2}' given in '${filter.join(":")}'. Permitted values are: ${permitted.map((k) => `'${k}'`).join(", ")}.`;
  }
  if (l3 === void 0)
    return true;
  const l2Obj = l1Obj[l2];
  if (!(l3 in l2Obj)) {
    const permitted = Object.keys(l2Obj);
    return `Invalid L3 filter '${l3}' given in '${filter.join(":")}'. ${permitted.length === 0 ? `No further filtering is possible after '${l1}:${l2}'.` : `Permitted values are: ${permitted.map((k) => `'${k}'`).join(", ")}.`}`;
  }
  if (n.length === 0)
    return true;
  return `Cannot filter further than three levels, ':${n.join(":")}' is invalid!`;
}
__name(checkOne, "checkOne");
function treeify(paths) {
  const tree = {};
  for (const [l1, l2, l3] of paths) {
    const subtree = tree[l1] ??= {};
    if (l2 !== void 0) {
      const set = subtree[l2] ??= /* @__PURE__ */ new Set();
      if (l3 !== void 0)
        set.add(l3);
    }
  }
  return tree;
}
__name(treeify, "treeify");
function or(left, right) {
  return (obj, ctx) => left(obj, ctx) || right(obj, ctx);
}
__name(or, "or");
function concat(get, test) {
  return (obj, ctx) => {
    const nextObj = get(obj, ctx);
    return nextObj && test(nextObj, ctx);
  };
}
__name(concat, "concat");
function leaf(pred) {
  return (obj, ctx) => pred(obj, ctx) != null;
}
__name(leaf, "leaf");
function arborist(tree) {
  const l1Predicates = Object.entries(tree).map(([l1, subtree]) => {
    const l1Pred = /* @__PURE__ */ __name((obj) => obj[l1], "l1Pred");
    const l2Predicates = Object.entries(subtree).map(([l2, set]) => {
      const l2Pred = /* @__PURE__ */ __name((obj) => obj[l2], "l2Pred");
      const l3Predicates = Array.from(set).map((l3) => {
        const l3Pred = l3 === "me" ? (obj, ctx) => {
          const me = ctx.me.id;
          return testMaybeArray(obj, (u) => u.id === me);
        } : (obj) => testMaybeArray(obj, (e) => e[l3] || e.type === l3);
        return l3Pred;
      });
      return l3Predicates.length === 0 ? leaf(l2Pred) : concat(l2Pred, l3Predicates.reduce(or));
    });
    return l2Predicates.length === 0 ? leaf(l1Pred) : concat(l1Pred, l2Predicates.reduce(or));
  });
  if (l1Predicates.length === 0) {
    throw new Error("Cannot create filter function for empty query");
  }
  return l1Predicates.reduce(or);
}
__name(arborist, "arborist");
function testMaybeArray(t, pred) {
  const p = /* @__PURE__ */ __name((x) => x != null && pred(x), "p");
  return Array.isArray(t) ? t.some(p) : p(t);
}
__name(testMaybeArray, "testMaybeArray");
var ENTITY_KEYS = {
  mention: {},
  hashtag: {},
  cashtag: {},
  bot_command: {},
  url: {},
  email: {},
  phone_number: {},
  bold: {},
  italic: {},
  underline: {},
  strikethrough: {},
  spoiler: {},
  blockquote: {},
  expandable_blockquote: {},
  code: {},
  pre: {},
  text_link: {},
  text_mention: {},
  custom_emoji: {}
};
var USER_KEYS = {
  me: {},
  is_bot: {},
  is_premium: {},
  added_to_attachment_menu: {}
};
var FORWARD_ORIGIN_KEYS = {
  user: {},
  hidden_user: {},
  chat: {},
  channel: {}
};
var STICKER_KEYS = {
  is_video: {},
  is_animated: {},
  premium_animation: {}
};
var REACTION_KEYS = {
  emoji: {},
  custom_emoji: {},
  paid: {}
};
var COMMON_MESSAGE_KEYS = {
  forward_origin: FORWARD_ORIGIN_KEYS,
  is_topic_message: {},
  is_automatic_forward: {},
  business_connection_id: {},
  text: {},
  animation: {},
  audio: {},
  document: {},
  paid_media: {},
  photo: {},
  sticker: STICKER_KEYS,
  story: {},
  video: {},
  video_note: {},
  voice: {},
  contact: {},
  dice: {},
  game: {},
  poll: {},
  venue: {},
  location: {},
  entities: ENTITY_KEYS,
  caption_entities: ENTITY_KEYS,
  caption: {},
  effect_id: {},
  has_media_spoiler: {},
  new_chat_title: {},
  new_chat_photo: {},
  delete_chat_photo: {},
  message_auto_delete_timer_changed: {},
  pinned_message: {},
  invoice: {},
  proximity_alert_triggered: {},
  chat_background_set: {},
  giveaway_created: {},
  giveaway: {
    only_new_members: {},
    has_public_winners: {}
  },
  giveaway_winners: {
    only_new_members: {},
    was_refunded: {}
  },
  giveaway_completed: {},
  video_chat_scheduled: {},
  video_chat_started: {},
  video_chat_ended: {},
  video_chat_participants_invited: {},
  web_app_data: {}
};
var MESSAGE_KEYS = {
  ...COMMON_MESSAGE_KEYS,
  new_chat_members: USER_KEYS,
  left_chat_member: USER_KEYS,
  group_chat_created: {},
  supergroup_chat_created: {},
  migrate_to_chat_id: {},
  migrate_from_chat_id: {},
  successful_payment: {},
  refunded_payment: {},
  users_shared: {},
  chat_shared: {},
  connected_website: {},
  write_access_allowed: {},
  passport_data: {},
  boost_added: {},
  forum_topic_created: {},
  forum_topic_edited: {
    name: {},
    icon_custom_emoji_id: {}
  },
  forum_topic_closed: {},
  forum_topic_reopened: {},
  general_forum_topic_hidden: {},
  general_forum_topic_unhidden: {},
  sender_boost_count: {}
};
var CHANNEL_POST_KEYS = {
  ...COMMON_MESSAGE_KEYS,
  channel_chat_created: {}
};
var BUSINESS_CONNECTION_KEYS = {
  can_reply: {},
  is_enabled: {}
};
var MESSAGE_REACTION_KEYS = {
  old_reaction: REACTION_KEYS,
  new_reaction: REACTION_KEYS
};
var MESSAGE_REACTION_COUNT_UPDATED_KEYS = {
  reactions: REACTION_KEYS
};
var CALLBACK_QUERY_KEYS = {
  data: {},
  game_short_name: {}
};
var CHAT_MEMBER_UPDATED_KEYS = {
  from: USER_KEYS
};
var UPDATE_KEYS = {
  message: MESSAGE_KEYS,
  edited_message: MESSAGE_KEYS,
  channel_post: CHANNEL_POST_KEYS,
  edited_channel_post: CHANNEL_POST_KEYS,
  business_connection: BUSINESS_CONNECTION_KEYS,
  business_message: MESSAGE_KEYS,
  edited_business_message: MESSAGE_KEYS,
  deleted_business_messages: {},
  inline_query: {},
  chosen_inline_result: {},
  callback_query: CALLBACK_QUERY_KEYS,
  shipping_query: {},
  pre_checkout_query: {},
  poll: {},
  poll_answer: {},
  my_chat_member: CHAT_MEMBER_UPDATED_KEYS,
  chat_member: CHAT_MEMBER_UPDATED_KEYS,
  chat_join_request: {},
  message_reaction: MESSAGE_REACTION_KEYS,
  message_reaction_count: MESSAGE_REACTION_COUNT_UPDATED_KEYS,
  chat_boost: {},
  removed_chat_boost: {},
  purchased_paid_media: {}
};
var L1_SHORTCUTS = {
  "": [
    "message",
    "channel_post"
  ],
  msg: [
    "message",
    "channel_post"
  ],
  edit: [
    "edited_message",
    "edited_channel_post"
  ]
};
var L2_SHORTCUTS = {
  "": [
    "entities",
    "caption_entities"
  ],
  media: [
    "photo",
    "video"
  ],
  file: [
    "photo",
    "animation",
    "audio",
    "document",
    "video",
    "video_note",
    "voice",
    "sticker"
  ]
};
var checker = {
  filterQuery(filter) {
    const pred = matchFilter(filter);
    return (ctx) => pred(ctx);
  },
  text(trigger) {
    const hasText = checker.filterQuery([
      ":text",
      ":caption"
    ]);
    const trg = triggerFn(trigger);
    return (ctx) => {
      if (!hasText(ctx))
        return false;
      const msg = ctx.message ?? ctx.channelPost;
      const txt = msg.text ?? msg.caption;
      return match(ctx, txt, trg);
    };
  },
  command(command) {
    const hasEntities = checker.filterQuery(":entities:bot_command");
    const atCommands = /* @__PURE__ */ new Set();
    const noAtCommands = /* @__PURE__ */ new Set();
    toArray(command).forEach((cmd) => {
      if (cmd.startsWith("/")) {
        throw new Error(`Do not include '/' when registering command handlers (use '${cmd.substring(1)}' not '${cmd}')`);
      }
      const set = cmd.includes("@") ? atCommands : noAtCommands;
      set.add(cmd);
    });
    return (ctx) => {
      if (!hasEntities(ctx))
        return false;
      const msg = ctx.message ?? ctx.channelPost;
      const txt = msg.text ?? msg.caption;
      return msg.entities.some((e) => {
        if (e.type !== "bot_command")
          return false;
        if (e.offset !== 0)
          return false;
        const cmd = txt.substring(1, e.length);
        if (noAtCommands.has(cmd) || atCommands.has(cmd)) {
          ctx.match = txt.substring(cmd.length + 1).trimStart();
          return true;
        }
        const index = cmd.indexOf("@");
        if (index === -1)
          return false;
        const atTarget = cmd.substring(index + 1).toLowerCase();
        const username = ctx.me.username.toLowerCase();
        if (atTarget !== username)
          return false;
        const atCommand = cmd.substring(0, index);
        if (noAtCommands.has(atCommand)) {
          ctx.match = txt.substring(cmd.length + 1).trimStart();
          return true;
        }
        return false;
      });
    };
  },
  reaction(reaction) {
    const hasMessageReaction = checker.filterQuery("message_reaction");
    const normalized = typeof reaction === "string" ? [
      {
        type: "emoji",
        emoji: reaction
      }
    ] : (Array.isArray(reaction) ? reaction : [
      reaction
    ]).map((emoji2) => typeof emoji2 === "string" ? {
      type: "emoji",
      emoji: emoji2
    } : emoji2);
    const emoji = new Set(normalized.filter((r) => r.type === "emoji").map((r) => r.emoji));
    const customEmoji = new Set(normalized.filter((r) => r.type === "custom_emoji").map((r) => r.custom_emoji_id));
    const paid = normalized.some((r) => r.type === "paid");
    return (ctx) => {
      if (!hasMessageReaction(ctx))
        return false;
      const { old_reaction, new_reaction } = ctx.messageReaction;
      for (const reaction2 of new_reaction) {
        let isOld = false;
        if (reaction2.type === "emoji") {
          for (const old of old_reaction) {
            if (old.type !== "emoji")
              continue;
            if (old.emoji === reaction2.emoji) {
              isOld = true;
              break;
            }
          }
        } else if (reaction2.type === "custom_emoji") {
          for (const old of old_reaction) {
            if (old.type !== "custom_emoji")
              continue;
            if (old.custom_emoji_id === reaction2.custom_emoji_id) {
              isOld = true;
              break;
            }
          }
        } else if (reaction2.type === "paid") {
          for (const old of old_reaction) {
            if (old.type !== "paid")
              continue;
            isOld = true;
            break;
          }
        } else {
        }
        if (isOld)
          continue;
        if (reaction2.type === "emoji") {
          if (emoji.has(reaction2.emoji))
            return true;
        } else if (reaction2.type === "custom_emoji") {
          if (customEmoji.has(reaction2.custom_emoji_id))
            return true;
        } else if (reaction2.type === "paid") {
          if (paid)
            return true;
        } else {
          return true;
        }
      }
      return false;
    };
  },
  chatType(chatType) {
    const set = new Set(toArray(chatType));
    return (ctx) => ctx.chat?.type !== void 0 && set.has(ctx.chat.type);
  },
  callbackQuery(trigger) {
    const hasCallbackQuery = checker.filterQuery("callback_query:data");
    const trg = triggerFn(trigger);
    return (ctx) => hasCallbackQuery(ctx) && match(ctx, ctx.callbackQuery.data, trg);
  },
  gameQuery(trigger) {
    const hasGameQuery = checker.filterQuery("callback_query:game_short_name");
    const trg = triggerFn(trigger);
    return (ctx) => hasGameQuery(ctx) && match(ctx, ctx.callbackQuery.game_short_name, trg);
  },
  inlineQuery(trigger) {
    const hasInlineQuery = checker.filterQuery("inline_query");
    const trg = triggerFn(trigger);
    return (ctx) => hasInlineQuery(ctx) && match(ctx, ctx.inlineQuery.query, trg);
  },
  chosenInlineResult(trigger) {
    const hasChosenInlineResult = checker.filterQuery("chosen_inline_result");
    const trg = triggerFn(trigger);
    return (ctx) => hasChosenInlineResult(ctx) && match(ctx, ctx.chosenInlineResult.result_id, trg);
  },
  preCheckoutQuery(trigger) {
    const hasPreCheckoutQuery = checker.filterQuery("pre_checkout_query");
    const trg = triggerFn(trigger);
    return (ctx) => hasPreCheckoutQuery(ctx) && match(ctx, ctx.preCheckoutQuery.invoice_payload, trg);
  },
  shippingQuery(trigger) {
    const hasShippingQuery = checker.filterQuery("shipping_query");
    const trg = triggerFn(trigger);
    return (ctx) => hasShippingQuery(ctx) && match(ctx, ctx.shippingQuery.invoice_payload, trg);
  }
};
var _Context = class {
  update;
  api;
  me;
  match;
  constructor(update, api, me) {
    this.update = update;
    this.api = api;
    this.me = me;
  }
  get message() {
    return this.update.message;
  }
  get editedMessage() {
    return this.update.edited_message;
  }
  get channelPost() {
    return this.update.channel_post;
  }
  get editedChannelPost() {
    return this.update.edited_channel_post;
  }
  get businessConnection() {
    return this.update.business_connection;
  }
  get businessMessage() {
    return this.update.business_message;
  }
  get editedBusinessMessage() {
    return this.update.edited_business_message;
  }
  get deletedBusinessMessages() {
    return this.update.deleted_business_messages;
  }
  get messageReaction() {
    return this.update.message_reaction;
  }
  get messageReactionCount() {
    return this.update.message_reaction_count;
  }
  get inlineQuery() {
    return this.update.inline_query;
  }
  get chosenInlineResult() {
    return this.update.chosen_inline_result;
  }
  get callbackQuery() {
    return this.update.callback_query;
  }
  get shippingQuery() {
    return this.update.shipping_query;
  }
  get preCheckoutQuery() {
    return this.update.pre_checkout_query;
  }
  get poll() {
    return this.update.poll;
  }
  get pollAnswer() {
    return this.update.poll_answer;
  }
  get myChatMember() {
    return this.update.my_chat_member;
  }
  get chatMember() {
    return this.update.chat_member;
  }
  get chatJoinRequest() {
    return this.update.chat_join_request;
  }
  get chatBoost() {
    return this.update.chat_boost;
  }
  get removedChatBoost() {
    return this.update.removed_chat_boost;
  }
  get purchasedPaidMedia() {
    return this.update.purchased_paid_media;
  }
  get msg() {
    return this.message ?? this.editedMessage ?? this.channelPost ?? this.editedChannelPost ?? this.businessMessage ?? this.editedBusinessMessage ?? this.callbackQuery?.message;
  }
  get chat() {
    return (this.msg ?? this.deletedBusinessMessages ?? this.messageReaction ?? this.messageReactionCount ?? this.myChatMember ?? this.chatMember ?? this.chatJoinRequest ?? this.chatBoost ?? this.removedChatBoost)?.chat;
  }
  get senderChat() {
    return this.msg?.sender_chat;
  }
  get from() {
    return (this.businessConnection ?? this.messageReaction ?? (this.chatBoost?.boost ?? this.removedChatBoost)?.source)?.user ?? (this.callbackQuery ?? this.msg ?? this.inlineQuery ?? this.chosenInlineResult ?? this.shippingQuery ?? this.preCheckoutQuery ?? this.myChatMember ?? this.chatMember ?? this.chatJoinRequest ?? this.purchasedPaidMedia)?.from;
  }
  get msgId() {
    return this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id;
  }
  get chatId() {
    return this.chat?.id ?? this.businessConnection?.user_chat_id;
  }
  get inlineMessageId() {
    return this.callbackQuery?.inline_message_id ?? this.chosenInlineResult?.inline_message_id;
  }
  get businessConnectionId() {
    return this.msg?.business_connection_id ?? this.businessConnection?.id ?? this.deletedBusinessMessages?.business_connection_id;
  }
  entities(types) {
    const message = this.msg;
    if (message === void 0)
      return [];
    const text = message.text ?? message.caption;
    if (text === void 0)
      return [];
    let entities = message.entities ?? message.caption_entities;
    if (entities === void 0)
      return [];
    if (types !== void 0) {
      const filters = new Set(toArray(types));
      entities = entities.filter((entity) => filters.has(entity.type));
    }
    return entities.map((entity) => ({
      ...entity,
      text: text.substring(entity.offset, entity.offset + entity.length)
    }));
  }
  reactions() {
    const emoji = [];
    const emojiAdded = [];
    const emojiKept = [];
    const emojiRemoved = [];
    const customEmoji = [];
    const customEmojiAdded = [];
    const customEmojiKept = [];
    const customEmojiRemoved = [];
    let paid = false;
    let paidAdded = false;
    const r = this.messageReaction;
    if (r !== void 0) {
      const { old_reaction, new_reaction } = r;
      for (const reaction of new_reaction) {
        if (reaction.type === "emoji") {
          emoji.push(reaction.emoji);
        } else if (reaction.type === "custom_emoji") {
          customEmoji.push(reaction.custom_emoji_id);
        } else if (reaction.type === "paid") {
          paid = paidAdded = true;
        }
      }
      for (const reaction of old_reaction) {
        if (reaction.type === "emoji") {
          emojiRemoved.push(reaction.emoji);
        } else if (reaction.type === "custom_emoji") {
          customEmojiRemoved.push(reaction.custom_emoji_id);
        } else if (reaction.type === "paid") {
          paidAdded = false;
        }
      }
      emojiAdded.push(...emoji);
      customEmojiAdded.push(...customEmoji);
      for (let i = 0; i < emojiRemoved.length; i++) {
        const len = emojiAdded.length;
        if (len === 0)
          break;
        const rem = emojiRemoved[i];
        for (let j = 0; j < len; j++) {
          if (rem === emojiAdded[j]) {
            emojiKept.push(rem);
            emojiRemoved.splice(i, 1);
            emojiAdded.splice(j, 1);
            i--;
            break;
          }
        }
      }
      for (let i = 0; i < customEmojiRemoved.length; i++) {
        const len = customEmojiAdded.length;
        if (len === 0)
          break;
        const rem = customEmojiRemoved[i];
        for (let j = 0; j < len; j++) {
          if (rem === customEmojiAdded[j]) {
            customEmojiKept.push(rem);
            customEmojiRemoved.splice(i, 1);
            customEmojiAdded.splice(j, 1);
            i--;
            break;
          }
        }
      }
    }
    return {
      emoji,
      emojiAdded,
      emojiKept,
      emojiRemoved,
      customEmoji,
      customEmojiAdded,
      customEmojiKept,
      customEmojiRemoved,
      paid,
      paidAdded
    };
  }
  has(filter) {
    return _Context.has.filterQuery(filter)(this);
  }
  hasText(trigger) {
    return _Context.has.text(trigger)(this);
  }
  hasCommand(command) {
    return _Context.has.command(command)(this);
  }
  hasReaction(reaction) {
    return _Context.has.reaction(reaction)(this);
  }
  hasChatType(chatType) {
    return _Context.has.chatType(chatType)(this);
  }
  hasCallbackQuery(trigger) {
    return _Context.has.callbackQuery(trigger)(this);
  }
  hasGameQuery(trigger) {
    return _Context.has.gameQuery(trigger)(this);
  }
  hasInlineQuery(trigger) {
    return _Context.has.inlineQuery(trigger)(this);
  }
  hasChosenInlineResult(trigger) {
    return _Context.has.chosenInlineResult(trigger)(this);
  }
  hasPreCheckoutQuery(trigger) {
    return _Context.has.preCheckoutQuery(trigger)(this);
  }
  hasShippingQuery(trigger) {
    return _Context.has.shippingQuery(trigger)(this);
  }
  reply(text, other, signal) {
    return this.api.sendMessage(orThrow(this.chatId, "sendMessage"), text, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  forwardMessage(chat_id, other, signal) {
    return this.api.forwardMessage(chat_id, orThrow(this.chatId, "forwardMessage"), orThrow(this.msgId, "forwardMessage"), other, signal);
  }
  forwardMessages(chat_id, message_ids, other, signal) {
    return this.api.forwardMessages(chat_id, orThrow(this.chatId, "forwardMessages"), message_ids, other, signal);
  }
  copyMessage(chat_id, other, signal) {
    return this.api.copyMessage(chat_id, orThrow(this.chatId, "copyMessage"), orThrow(this.msgId, "copyMessage"), other, signal);
  }
  copyMessages(chat_id, message_ids, other, signal) {
    return this.api.copyMessages(chat_id, orThrow(this.chatId, "copyMessages"), message_ids, other, signal);
  }
  replyWithPhoto(photo, other, signal) {
    return this.api.sendPhoto(orThrow(this.chatId, "sendPhoto"), photo, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithAudio(audio, other, signal) {
    return this.api.sendAudio(orThrow(this.chatId, "sendAudio"), audio, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithDocument(document1, other, signal) {
    return this.api.sendDocument(orThrow(this.chatId, "sendDocument"), document1, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithVideo(video, other, signal) {
    return this.api.sendVideo(orThrow(this.chatId, "sendVideo"), video, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithAnimation(animation, other, signal) {
    return this.api.sendAnimation(orThrow(this.chatId, "sendAnimation"), animation, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithVoice(voice, other, signal) {
    return this.api.sendVoice(orThrow(this.chatId, "sendVoice"), voice, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithVideoNote(video_note, other, signal) {
    return this.api.sendVideoNote(orThrow(this.chatId, "sendVideoNote"), video_note, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithMediaGroup(media, other, signal) {
    return this.api.sendMediaGroup(orThrow(this.chatId, "sendMediaGroup"), media, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithLocation(latitude, longitude, other, signal) {
    return this.api.sendLocation(orThrow(this.chatId, "sendLocation"), latitude, longitude, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  editMessageLiveLocation(latitude, longitude, other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.editMessageLiveLocationInline(inlineId, latitude, longitude, other) : this.api.editMessageLiveLocation(orThrow(this.chatId, "editMessageLiveLocation"), orThrow(this.msgId, "editMessageLiveLocation"), latitude, longitude, other, signal);
  }
  stopMessageLiveLocation(other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.stopMessageLiveLocationInline(inlineId, other) : this.api.stopMessageLiveLocation(orThrow(this.chatId, "stopMessageLiveLocation"), orThrow(this.msgId, "stopMessageLiveLocation"), other, signal);
  }
  sendPaidMedia(star_count, media, other, signal) {
    return this.api.sendPaidMedia(orThrow(this.chatId, "sendPaidMedia"), star_count, media, other, signal);
  }
  replyWithVenue(latitude, longitude, title2, address, other, signal) {
    return this.api.sendVenue(orThrow(this.chatId, "sendVenue"), latitude, longitude, title2, address, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithContact(phone_number, first_name, other, signal) {
    return this.api.sendContact(orThrow(this.chatId, "sendContact"), phone_number, first_name, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithPoll(question, options, other, signal) {
    return this.api.sendPoll(orThrow(this.chatId, "sendPoll"), question, options, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithDice(emoji, other, signal) {
    return this.api.sendDice(orThrow(this.chatId, "sendDice"), emoji, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  replyWithChatAction(action, other, signal) {
    return this.api.sendChatAction(orThrow(this.chatId, "sendChatAction"), action, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  react(reaction, other, signal) {
    return this.api.setMessageReaction(orThrow(this.chatId, "setMessageReaction"), orThrow(this.msgId, "setMessageReaction"), typeof reaction === "string" ? [
      {
        type: "emoji",
        emoji: reaction
      }
    ] : (Array.isArray(reaction) ? reaction : [
      reaction
    ]).map((emoji) => typeof emoji === "string" ? {
      type: "emoji",
      emoji
    } : emoji), other, signal);
  }
  getUserProfilePhotos(other, signal) {
    return this.api.getUserProfilePhotos(orThrow(this.from, "getUserProfilePhotos").id, other, signal);
  }
  setUserEmojiStatus(other, signal) {
    return this.api.setUserEmojiStatus(orThrow(this.from, "setUserEmojiStatus").id, other, signal);
  }
  getUserChatBoosts(chat_id, signal) {
    return this.api.getUserChatBoosts(chat_id, orThrow(this.from, "getUserChatBoosts").id, signal);
  }
  getBusinessConnection(signal) {
    return this.api.getBusinessConnection(orThrow(this.businessConnectionId, "getBusinessConnection"), signal);
  }
  getFile(signal) {
    const m2 = orThrow(this.msg, "getFile");
    const file = m2.photo !== void 0 ? m2.photo[m2.photo.length - 1] : m2.animation ?? m2.audio ?? m2.document ?? m2.video ?? m2.video_note ?? m2.voice ?? m2.sticker;
    return this.api.getFile(orThrow(file, "getFile").file_id, signal);
  }
  kickAuthor(...args) {
    return this.banAuthor(...args);
  }
  banAuthor(other, signal) {
    return this.api.banChatMember(orThrow(this.chatId, "banAuthor"), orThrow(this.from, "banAuthor").id, other, signal);
  }
  kickChatMember(...args) {
    return this.banChatMember(...args);
  }
  banChatMember(user_id, other, signal) {
    return this.api.banChatMember(orThrow(this.chatId, "banChatMember"), user_id, other, signal);
  }
  unbanChatMember(user_id, other, signal) {
    return this.api.unbanChatMember(orThrow(this.chatId, "unbanChatMember"), user_id, other, signal);
  }
  restrictAuthor(permissions, other, signal) {
    return this.api.restrictChatMember(orThrow(this.chatId, "restrictAuthor"), orThrow(this.from, "restrictAuthor").id, permissions, other, signal);
  }
  restrictChatMember(user_id, permissions, other, signal) {
    return this.api.restrictChatMember(orThrow(this.chatId, "restrictChatMember"), user_id, permissions, other, signal);
  }
  promoteAuthor(other, signal) {
    return this.api.promoteChatMember(orThrow(this.chatId, "promoteAuthor"), orThrow(this.from, "promoteAuthor").id, other, signal);
  }
  promoteChatMember(user_id, other, signal) {
    return this.api.promoteChatMember(orThrow(this.chatId, "promoteChatMember"), user_id, other, signal);
  }
  setChatAdministratorAuthorCustomTitle(custom_title, signal) {
    return this.api.setChatAdministratorCustomTitle(orThrow(this.chatId, "setChatAdministratorAuthorCustomTitle"), orThrow(this.from, "setChatAdministratorAuthorCustomTitle").id, custom_title, signal);
  }
  setChatAdministratorCustomTitle(user_id, custom_title, signal) {
    return this.api.setChatAdministratorCustomTitle(orThrow(this.chatId, "setChatAdministratorCustomTitle"), user_id, custom_title, signal);
  }
  banChatSenderChat(sender_chat_id, signal) {
    return this.api.banChatSenderChat(orThrow(this.chatId, "banChatSenderChat"), sender_chat_id, signal);
  }
  unbanChatSenderChat(sender_chat_id, signal) {
    return this.api.unbanChatSenderChat(orThrow(this.chatId, "unbanChatSenderChat"), sender_chat_id, signal);
  }
  setChatPermissions(permissions, other, signal) {
    return this.api.setChatPermissions(orThrow(this.chatId, "setChatPermissions"), permissions, other, signal);
  }
  exportChatInviteLink(signal) {
    return this.api.exportChatInviteLink(orThrow(this.chatId, "exportChatInviteLink"), signal);
  }
  createChatInviteLink(other, signal) {
    return this.api.createChatInviteLink(orThrow(this.chatId, "createChatInviteLink"), other, signal);
  }
  editChatInviteLink(invite_link, other, signal) {
    return this.api.editChatInviteLink(orThrow(this.chatId, "editChatInviteLink"), invite_link, other, signal);
  }
  createChatSubscriptionInviteLink(subscription_period, subscription_price, other, signal) {
    return this.api.createChatSubscriptionInviteLink(orThrow(this.chatId, "createChatSubscriptionInviteLink"), subscription_period, subscription_price, other, signal);
  }
  editChatSubscriptionInviteLink(invite_link, other, signal) {
    return this.api.editChatSubscriptionInviteLink(orThrow(this.chatId, "editChatSubscriptionInviteLink"), invite_link, other, signal);
  }
  revokeChatInviteLink(invite_link, signal) {
    return this.api.revokeChatInviteLink(orThrow(this.chatId, "editChatInviteLink"), invite_link, signal);
  }
  approveChatJoinRequest(user_id, signal) {
    return this.api.approveChatJoinRequest(orThrow(this.chatId, "approveChatJoinRequest"), user_id, signal);
  }
  declineChatJoinRequest(user_id, signal) {
    return this.api.declineChatJoinRequest(orThrow(this.chatId, "declineChatJoinRequest"), user_id, signal);
  }
  setChatPhoto(photo, signal) {
    return this.api.setChatPhoto(orThrow(this.chatId, "setChatPhoto"), photo, signal);
  }
  deleteChatPhoto(signal) {
    return this.api.deleteChatPhoto(orThrow(this.chatId, "deleteChatPhoto"), signal);
  }
  setChatTitle(title2, signal) {
    return this.api.setChatTitle(orThrow(this.chatId, "setChatTitle"), title2, signal);
  }
  setChatDescription(description, signal) {
    return this.api.setChatDescription(orThrow(this.chatId, "setChatDescription"), description, signal);
  }
  pinChatMessage(message_id, other, signal) {
    return this.api.pinChatMessage(orThrow(this.chatId, "pinChatMessage"), message_id, other, signal);
  }
  unpinChatMessage(message_id, signal) {
    return this.api.unpinChatMessage(orThrow(this.chatId, "unpinChatMessage"), message_id, signal);
  }
  unpinAllChatMessages(signal) {
    return this.api.unpinAllChatMessages(orThrow(this.chatId, "unpinAllChatMessages"), signal);
  }
  leaveChat(signal) {
    return this.api.leaveChat(orThrow(this.chatId, "leaveChat"), signal);
  }
  getChat(signal) {
    return this.api.getChat(orThrow(this.chatId, "getChat"), signal);
  }
  getChatAdministrators(signal) {
    return this.api.getChatAdministrators(orThrow(this.chatId, "getChatAdministrators"), signal);
  }
  getChatMembersCount(...args) {
    return this.getChatMemberCount(...args);
  }
  getChatMemberCount(signal) {
    return this.api.getChatMemberCount(orThrow(this.chatId, "getChatMemberCount"), signal);
  }
  getAuthor(signal) {
    return this.api.getChatMember(orThrow(this.chatId, "getAuthor"), orThrow(this.from, "getAuthor").id, signal);
  }
  getChatMember(user_id, signal) {
    return this.api.getChatMember(orThrow(this.chatId, "getChatMember"), user_id, signal);
  }
  setChatStickerSet(sticker_set_name, signal) {
    return this.api.setChatStickerSet(orThrow(this.chatId, "setChatStickerSet"), sticker_set_name, signal);
  }
  deleteChatStickerSet(signal) {
    return this.api.deleteChatStickerSet(orThrow(this.chatId, "deleteChatStickerSet"), signal);
  }
  createForumTopic(name, other, signal) {
    return this.api.createForumTopic(orThrow(this.chatId, "createForumTopic"), name, other, signal);
  }
  editForumTopic(other, signal) {
    const message = orThrow(this.msg, "editForumTopic");
    const thread = orThrow(message.message_thread_id, "editForumTopic");
    return this.api.editForumTopic(message.chat.id, thread, other, signal);
  }
  closeForumTopic(signal) {
    const message = orThrow(this.msg, "closeForumTopic");
    const thread = orThrow(message.message_thread_id, "closeForumTopic");
    return this.api.closeForumTopic(message.chat.id, thread, signal);
  }
  reopenForumTopic(signal) {
    const message = orThrow(this.msg, "reopenForumTopic");
    const thread = orThrow(message.message_thread_id, "reopenForumTopic");
    return this.api.reopenForumTopic(message.chat.id, thread, signal);
  }
  deleteForumTopic(signal) {
    const message = orThrow(this.msg, "deleteForumTopic");
    const thread = orThrow(message.message_thread_id, "deleteForumTopic");
    return this.api.deleteForumTopic(message.chat.id, thread, signal);
  }
  unpinAllForumTopicMessages(signal) {
    const message = orThrow(this.msg, "unpinAllForumTopicMessages");
    const thread = orThrow(message.message_thread_id, "unpinAllForumTopicMessages");
    return this.api.unpinAllForumTopicMessages(message.chat.id, thread, signal);
  }
  editGeneralForumTopic(name, signal) {
    return this.api.editGeneralForumTopic(orThrow(this.chatId, "editGeneralForumTopic"), name, signal);
  }
  closeGeneralForumTopic(signal) {
    return this.api.closeGeneralForumTopic(orThrow(this.chatId, "closeGeneralForumTopic"), signal);
  }
  reopenGeneralForumTopic(signal) {
    return this.api.reopenGeneralForumTopic(orThrow(this.chatId, "reopenGeneralForumTopic"), signal);
  }
  hideGeneralForumTopic(signal) {
    return this.api.hideGeneralForumTopic(orThrow(this.chatId, "hideGeneralForumTopic"), signal);
  }
  unhideGeneralForumTopic(signal) {
    return this.api.unhideGeneralForumTopic(orThrow(this.chatId, "unhideGeneralForumTopic"), signal);
  }
  unpinAllGeneralForumTopicMessages(signal) {
    return this.api.unpinAllGeneralForumTopicMessages(orThrow(this.chatId, "unpinAllGeneralForumTopicMessages"), signal);
  }
  answerCallbackQuery(other, signal) {
    return this.api.answerCallbackQuery(orThrow(this.callbackQuery, "answerCallbackQuery").id, typeof other === "string" ? {
      text: other
    } : other, signal);
  }
  setChatMenuButton(other, signal) {
    return this.api.setChatMenuButton(other, signal);
  }
  getChatMenuButton(other, signal) {
    return this.api.getChatMenuButton(other, signal);
  }
  setMyDefaultAdministratorRights(other, signal) {
    return this.api.setMyDefaultAdministratorRights(other, signal);
  }
  getMyDefaultAdministratorRights(other, signal) {
    return this.api.getMyDefaultAdministratorRights(other, signal);
  }
  editMessageText(text, other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.editMessageTextInline(inlineId, text, other) : this.api.editMessageText(orThrow(this.chatId, "editMessageText"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "editMessageText"), text, other, signal);
  }
  editMessageCaption(other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.editMessageCaptionInline(inlineId, other) : this.api.editMessageCaption(orThrow(this.chatId, "editMessageCaption"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "editMessageCaption"), other, signal);
  }
  editMessageMedia(media, other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.editMessageMediaInline(inlineId, media, other) : this.api.editMessageMedia(orThrow(this.chatId, "editMessageMedia"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "editMessageMedia"), media, other, signal);
  }
  editMessageReplyMarkup(other, signal) {
    const inlineId = this.inlineMessageId;
    return inlineId !== void 0 ? this.api.editMessageReplyMarkupInline(inlineId, other) : this.api.editMessageReplyMarkup(orThrow(this.chatId, "editMessageReplyMarkup"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "editMessageReplyMarkup"), other, signal);
  }
  stopPoll(other, signal) {
    return this.api.stopPoll(orThrow(this.chatId, "stopPoll"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "stopPoll"), other, signal);
  }
  deleteMessage(signal) {
    return this.api.deleteMessage(orThrow(this.chatId, "deleteMessage"), orThrow(this.msg?.message_id ?? this.messageReaction?.message_id ?? this.messageReactionCount?.message_id, "deleteMessage"), signal);
  }
  deleteMessages(message_ids, signal) {
    return this.api.deleteMessages(orThrow(this.chatId, "deleteMessages"), message_ids, signal);
  }
  replyWithSticker(sticker, other, signal) {
    return this.api.sendSticker(orThrow(this.chatId, "sendSticker"), sticker, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
  getCustomEmojiStickers(signal) {
    return this.api.getCustomEmojiStickers((this.msg?.entities ?? []).filter((e) => e.type === "custom_emoji").map((e) => e.custom_emoji_id), signal);
  }
  replyWithGift(gift_id, other, signal) {
    return this.api.sendGift(orThrow(this.from, "sendGift").id, gift_id, other, signal);
  }
  answerInlineQuery(results, other, signal) {
    return this.api.answerInlineQuery(orThrow(this.inlineQuery, "answerInlineQuery").id, results, other, signal);
  }
  savePreparedInlineMessage(result, other, signal) {
    return this.api.savePreparedInlineMessage(orThrow(this.from, "savePreparedInlineMessage").id, result, other, signal);
  }
  replyWithInvoice(title2, description, payload, currency, prices, other, signal) {
    return this.api.sendInvoice(orThrow(this.chatId, "sendInvoice"), title2, description, payload, currency, prices, other, signal);
  }
  answerShippingQuery(ok2, other, signal) {
    return this.api.answerShippingQuery(orThrow(this.shippingQuery, "answerShippingQuery").id, ok2, other, signal);
  }
  answerPreCheckoutQuery(ok2, other, signal) {
    return this.api.answerPreCheckoutQuery(orThrow(this.preCheckoutQuery, "answerPreCheckoutQuery").id, ok2, typeof other === "string" ? {
      error_message: other
    } : other, signal);
  }
  refundStarPayment(signal) {
    return this.api.refundStarPayment(orThrow(this.from, "refundStarPayment").id, orThrow(this.msg?.successful_payment, "refundStarPayment").telegram_payment_charge_id, signal);
  }
  editUserStarSubscription(telegram_payment_charge_id, is_canceled, signal) {
    return this.api.editUserStarSubscription(orThrow(this.from, "editUserStarSubscription").id, telegram_payment_charge_id, is_canceled, signal);
  }
  verifyUser(other, signal) {
    return this.api.verifyUser(orThrow(this.from, "verifyUser").id, other, signal);
  }
  verifyChat(other, signal) {
    return this.api.verifyChat(orThrow(this.chatId, "verifyChat"), other, signal);
  }
  removeUserVerification(signal) {
    return this.api.removeUserVerification(orThrow(this.from, "removeUserVerification").id, signal);
  }
  removeChatVerification(signal) {
    return this.api.removeChatVerification(orThrow(this.chatId, "removeChatVerification"), signal);
  }
  setPassportDataErrors(errors, signal) {
    return this.api.setPassportDataErrors(orThrow(this.from, "setPassportDataErrors").id, errors, signal);
  }
  replyWithGame(game_short_name, other, signal) {
    return this.api.sendGame(orThrow(this.chatId, "sendGame"), game_short_name, {
      business_connection_id: this.businessConnectionId,
      ...other
    }, signal);
  }
};
var Context = _Context;
__name(Context, "Context");
__publicField(Context, "has", checker);
function orThrow(value, method) {
  if (value === void 0) {
    throw new Error(`Missing information for API call to ${method}`);
  }
  return value;
}
__name(orThrow, "orThrow");
function triggerFn(trigger) {
  return toArray(trigger).map((t) => typeof t === "string" ? (txt) => txt === t ? t : null : (txt) => txt.match(t));
}
__name(triggerFn, "triggerFn");
function match(ctx, content, triggers) {
  for (const t of triggers) {
    const res = t(content);
    if (res) {
      ctx.match = res;
      return true;
    }
  }
  return false;
}
__name(match, "match");
function toArray(e) {
  return Array.isArray(e) ? e : [
    e
  ];
}
__name(toArray, "toArray");
var BotError = class extends Error {
  error;
  ctx;
  constructor(error, ctx) {
    super(generateBotErrorMessage(error));
    this.error = error;
    this.ctx = ctx;
    this.name = "BotError";
    if (error instanceof Error)
      this.stack = error.stack;
  }
};
__name(BotError, "BotError");
function generateBotErrorMessage(error) {
  let msg;
  if (error instanceof Error) {
    msg = `${error.name} in middleware: ${error.message}`;
  } else {
    const type = typeof error;
    msg = `Non-error value of type ${type} thrown in middleware`;
    switch (type) {
      case "bigint":
      case "boolean":
      case "number":
      case "symbol":
        msg += `: ${error}`;
        break;
      case "string":
        msg += `: ${String(error).substring(0, 50)}`;
        break;
      default:
        msg += "!";
        break;
    }
  }
  return msg;
}
__name(generateBotErrorMessage, "generateBotErrorMessage");
function flatten(mw) {
  return typeof mw === "function" ? mw : (ctx, next) => mw.middleware()(ctx, next);
}
__name(flatten, "flatten");
function concat1(first, andThen) {
  return async (ctx, next) => {
    let nextCalled = false;
    await first(ctx, async () => {
      if (nextCalled)
        throw new Error("`next` already called before!");
      else
        nextCalled = true;
      await andThen(ctx, next);
    });
  };
}
__name(concat1, "concat1");
function pass(_ctx, next) {
  return next();
}
__name(pass, "pass");
var leaf1 = /* @__PURE__ */ __name(() => Promise.resolve(), "leaf1");
async function run(middleware, ctx) {
  await middleware(ctx, leaf1);
}
__name(run, "run");
var Composer = class {
  handler;
  constructor(...middleware) {
    this.handler = middleware.length === 0 ? pass : middleware.map(flatten).reduce(concat1);
  }
  middleware() {
    return this.handler;
  }
  use(...middleware) {
    const composer = new Composer(...middleware);
    this.handler = concat1(this.handler, flatten(composer));
    return composer;
  }
  on(filter, ...middleware) {
    return this.filter(Context.has.filterQuery(filter), ...middleware);
  }
  hears(trigger, ...middleware) {
    return this.filter(Context.has.text(trigger), ...middleware);
  }
  command(command, ...middleware) {
    return this.filter(Context.has.command(command), ...middleware);
  }
  reaction(reaction, ...middleware) {
    return this.filter(Context.has.reaction(reaction), ...middleware);
  }
  chatType(chatType, ...middleware) {
    return this.filter(Context.has.chatType(chatType), ...middleware);
  }
  callbackQuery(trigger, ...middleware) {
    return this.filter(Context.has.callbackQuery(trigger), ...middleware);
  }
  gameQuery(trigger, ...middleware) {
    return this.filter(Context.has.gameQuery(trigger), ...middleware);
  }
  inlineQuery(trigger, ...middleware) {
    return this.filter(Context.has.inlineQuery(trigger), ...middleware);
  }
  chosenInlineResult(resultId, ...middleware) {
    return this.filter(Context.has.chosenInlineResult(resultId), ...middleware);
  }
  preCheckoutQuery(trigger, ...middleware) {
    return this.filter(Context.has.preCheckoutQuery(trigger), ...middleware);
  }
  shippingQuery(trigger, ...middleware) {
    return this.filter(Context.has.shippingQuery(trigger), ...middleware);
  }
  filter(predicate, ...middleware) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, pass);
    return composer;
  }
  drop(predicate, ...middleware) {
    return this.filter(async (ctx) => !await predicate(ctx), ...middleware);
  }
  fork(...middleware) {
    const composer = new Composer(...middleware);
    const fork = flatten(composer);
    this.use((ctx, next) => Promise.all([
      next(),
      run(fork, ctx)
    ]));
    return composer;
  }
  lazy(middlewareFactory) {
    return this.use(async (ctx, next) => {
      const middleware = await middlewareFactory(ctx);
      const arr = Array.isArray(middleware) ? middleware : [
        middleware
      ];
      await flatten(new Composer(...arr))(ctx, next);
    });
  }
  route(router, routeHandlers, fallback = pass) {
    return this.lazy(async (ctx) => {
      const route = await router(ctx);
      return (route === void 0 || !routeHandlers[route] ? fallback : routeHandlers[route]) ?? [];
    });
  }
  branch(predicate, trueMiddleware, falseMiddleware) {
    return this.lazy(async (ctx) => await predicate(ctx) ? trueMiddleware : falseMiddleware);
  }
  errorBoundary(errorHandler, ...middleware) {
    const composer = new Composer(...middleware);
    const bound = flatten(composer);
    this.use(async (ctx, next) => {
      let nextCalled = false;
      const cont = /* @__PURE__ */ __name(() => (nextCalled = true, Promise.resolve()), "cont");
      try {
        await bound(ctx, cont);
      } catch (err) {
        nextCalled = false;
        await errorHandler(new BotError(err, ctx), cont);
      }
      if (nextCalled)
        await next();
    });
    return composer;
  }
};
__name(Composer, "Composer");
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
var ms = /* @__PURE__ */ __name(function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse1(val);
  } else if (type === "number" && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
}, "ms");
function parse1(str2) {
  str2 = String(str2);
  if (str2.length > 100) {
    return;
  }
  var match2 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str2);
  if (!match2) {
    return;
  }
  var n = parseFloat(match2[1]);
  var type = (match2[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "weeks":
    case "week":
    case "w":
      return n * w;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return void 0;
  }
}
__name(parse1, "parse1");
function fmtShort(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
__name(fmtShort, "fmtShort");
function fmtLong(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return plural(ms2, msAbs, d, "day");
  }
  if (msAbs >= h) {
    return plural(ms2, msAbs, h, "hour");
  }
  if (msAbs >= m) {
    return plural(ms2, msAbs, m, "minute");
  }
  if (msAbs >= s) {
    return plural(ms2, msAbs, s, "second");
  }
  return ms2 + " ms";
}
__name(fmtLong, "fmtLong");
function plural(ms2, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
}
__name(plural, "plural");
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
__name(defaultSetTimout, "defaultSetTimout");
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
__name(defaultClearTimeout, "defaultClearTimeout");
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
__name(runTimeout, "runTimeout");
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
__name(runClearTimeout, "runClearTimeout");
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
__name(cleanUpNextTick, "cleanUpNextTick");
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
__name(drainQueue, "drainQueue");
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
__name(nextTick, "nextTick");
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
__name(Item, "Item");
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
__name(noop, "noop");
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
__name(binding, "binding");
function cwd() {
  return "/";
}
__name(cwd, "cwd");
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
__name(chdir, "chdir");
function umask() {
  return 0;
}
__name(umask, "umask");
var performance = globalContext.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [
    seconds,
    nanoseconds
  ];
}
__name(hrtime, "hrtime");
var startTime = /* @__PURE__ */ new Date();
function uptime() {
  var currentTime = /* @__PURE__ */ new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
__name(uptime, "uptime");
var process = {
  nextTick,
  title,
  browser,
  env: {
    NODE_ENV: "production"
  },
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
__name(createCommonjsModule, "createCommonjsModule");
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
__name(commonjsRequire, "commonjsRequire");
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = ms;
  createDebug.destroy = destroy2;
  Object.keys(env).forEach((key) => {
    createDebug[key] = env[key];
  });
  createDebug.names = [];
  createDebug.skips = [];
  createDebug.formatters = {};
  function selectColor(namespace) {
    let hash = 0;
    for (let i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }
  __name(selectColor, "selectColor");
  createDebug.selectColor = selectColor;
  function createDebug(namespace) {
    let prevTime;
    let enableOverride = null;
    let namespacesCache;
    let enabledCache;
    function debug4(...args) {
      if (!debug4.enabled) {
        return;
      }
      const self2 = debug4;
      const curr = Number(/* @__PURE__ */ new Date());
      const ms2 = curr - (prevTime || curr);
      self2.diff = ms2;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      let index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, (match2, format) => {
        if (match2 === "%%") {
          return "%";
        }
        index++;
        const formatter = createDebug.formatters[format];
        if (typeof formatter === "function") {
          const val = args[index];
          match2 = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match2;
      });
      createDebug.formatArgs.call(self2, args);
      const logFn = self2.log || createDebug.log;
      logFn.apply(self2, args);
    }
    __name(debug4, "debug");
    debug4.namespace = namespace;
    debug4.useColors = createDebug.useColors();
    debug4.color = createDebug.selectColor(namespace);
    debug4.extend = extend;
    debug4.destroy = createDebug.destroy;
    Object.defineProperty(debug4, "enabled", {
      enumerable: true,
      configurable: false,
      get: () => {
        if (enableOverride !== null) {
          return enableOverride;
        }
        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }
        return enabledCache;
      },
      set: (v) => {
        enableOverride = v;
      }
    });
    if (typeof createDebug.init === "function") {
      createDebug.init(debug4);
    }
    return debug4;
  }
  __name(createDebug, "createDebug");
  function extend(namespace, delimiter) {
    const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  __name(extend, "extend");
  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    let i;
    const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    const len = split.length;
    for (i = 0; i < len; i++) {
      if (!split[i]) {
        continue;
      }
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
      } else {
        createDebug.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  __name(enable, "enable");
  function disable() {
    const namespaces = [
      ...createDebug.names.map(toNamespace),
      ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
    ].join(",");
    createDebug.enable("");
    return namespaces;
  }
  __name(disable, "disable");
  function enabled(name) {
    if (name[name.length - 1] === "*") {
      return true;
    }
    let i;
    let len;
    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  __name(enabled, "enabled");
  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  __name(toNamespace, "toNamespace");
  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }
  __name(coerce, "coerce");
  function destroy2() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  __name(destroy2, "destroy2");
  createDebug.enable(createDebug.load());
  return createDebug;
}
__name(setup, "setup");
var common = setup;
var browser$1 = createCommonjsModule(function(module, exports) {
  exports.formatArgs = formatArgs2;
  exports.save = save2;
  exports.load = load2;
  exports.useColors = useColors2;
  exports.storage = localstorage();
  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors2() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/applewebkit\/(\d+)/);
  }
  __name(useColors2, "useColors2");
  function formatArgs2(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match2) => {
      if (match2 === "%%") {
        return;
      }
      index++;
      if (match2 === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  __name(formatArgs2, "formatArgs2");
  exports.log = console.debug || console.log || (() => {
  });
  function save2(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem("debug", namespaces);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (error) {
    }
  }
  __name(save2, "save2");
  function load2() {
    let r;
    try {
      r = exports.storage.getItem("debug");
    } catch (error) {
    }
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = process.env.DEBUG;
    }
    return r;
  }
  __name(load2, "load2");
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {
    }
  }
  __name(localstorage, "localstorage");
  module.exports = common(exports);
  const { formatters } = module.exports;
  formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
});
browser$1.colors;
browser$1.destroy;
browser$1.formatArgs;
browser$1.load;
browser$1.log;
browser$1.save;
browser$1.storage;
browser$1.useColors;
var itrToStream = /* @__PURE__ */ __name((itr) => {
  const it = itr[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const chunk = await it.next();
      if (chunk.done)
        controller.close();
      else
        controller.enqueue(chunk.value);
    }
  });
}, "itrToStream");
var baseFetchConfig = /* @__PURE__ */ __name((_apiRoot) => ({}), "baseFetchConfig");
var debug = browser$1("grammy:warn");
var GrammyError = class extends Error {
  method;
  payload;
  ok;
  error_code;
  description;
  parameters;
  constructor(message, err, method, payload) {
    super(`${message} (${err.error_code}: ${err.description})`);
    this.method = method;
    this.payload = payload;
    this.ok = false;
    this.name = "GrammyError";
    this.error_code = err.error_code;
    this.description = err.description;
    this.parameters = err.parameters ?? {};
  }
};
__name(GrammyError, "GrammyError");
function toGrammyError(err, method, payload) {
  switch (err.error_code) {
    case 401:
      debug("Error 401 means that your bot token is wrong, talk to https://t.me/BotFather to check it.");
      break;
    case 409:
      debug("Error 409 means that you are running your bot several times on long polling. Consider revoking the bot token if you believe that no other instance is running.");
      break;
  }
  return new GrammyError(`Call to '${method}' failed!`, err, method, payload);
}
__name(toGrammyError, "toGrammyError");
var HttpError = class extends Error {
  error;
  constructor(message, error) {
    super(message);
    this.error = error;
    this.name = "HttpError";
  }
};
__name(HttpError, "HttpError");
function isTelegramError(err) {
  return typeof err === "object" && err !== null && "status" in err && "statusText" in err;
}
__name(isTelegramError, "isTelegramError");
function toHttpError(method, sensitiveLogs) {
  return (err) => {
    let msg = `Network request for '${method}' failed!`;
    if (isTelegramError(err))
      msg += ` (${err.status}: ${err.statusText})`;
    if (sensitiveLogs && err instanceof Error)
      msg += ` ${err.message}`;
    throw new HttpError(msg, err);
  };
}
__name(toHttpError, "toHttpError");
var osType = (() => {
  const { Deno } = globalThis;
  if (typeof Deno?.build?.os === "string") {
    return Deno.build.os;
  }
  const { navigator: navigator1 } = globalThis;
  if (navigator1?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}`);
  }
}
__name(assertPath, "assertPath");
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1; i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}
__name(stripSuffix, "stripSuffix");
function lastPathSegment(path, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path.length;
  for (let i = path.length - 1; i >= start; --i) {
    if (isSep(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path.slice(start, end);
}
__name(lastPathSegment, "lastPathSegment");
function assertArgs(path, suffix) {
  assertPath(path);
  if (path.length === 0)
    return path;
  if (typeof suffix !== "string") {
    throw new TypeError(`Suffix must be a string. Received ${JSON.stringify(suffix)}`);
  }
}
__name(assertArgs, "assertArgs");
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
__name(stripTrailingSeparators, "stripTrailingSeparators");
function isPosixPathSeparator(code) {
  return code === 47;
}
__name(isPosixPathSeparator, "isPosixPathSeparator");
function basename(path, suffix = "") {
  assertArgs(path, suffix);
  const lastSegment = lastPathSegment(path, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPosixPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
__name(basename, "basename");
function isPathSeparator(code) {
  return code === 47 || code === 92;
}
__name(isPathSeparator, "isPathSeparator");
function isWindowsDeviceRoot(code) {
  return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
__name(isWindowsDeviceRoot, "isWindowsDeviceRoot");
function basename1(path, suffix = "") {
  assertArgs(path, suffix);
  let start = 0;
  if (path.length >= 2) {
    const drive = path.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path.charCodeAt(1) === 58)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
__name(basename1, "basename1");
function basename2(path, suffix = "") {
  return isWindows ? basename1(path, suffix) : basename(path, suffix);
}
__name(basename2, "basename2");
var InputFile = class {
  consumed = false;
  fileData;
  filename;
  constructor(file, filename) {
    this.fileData = file;
    filename ??= this.guessFilename(file);
    this.filename = filename;
  }
  guessFilename(file) {
    if (typeof file === "string")
      return basename2(file);
    if (typeof file !== "object")
      return void 0;
    if ("url" in file)
      return basename2(file.url);
    if (!(file instanceof URL))
      return void 0;
    return basename2(file.pathname) || basename2(file.hostname);
  }
  toRaw() {
    if (this.consumed) {
      throw new Error("Cannot reuse InputFile data source!");
    }
    const data = this.fileData;
    if (data instanceof Blob)
      return data.stream();
    if (data instanceof URL)
      return fetchFile(data);
    if ("url" in data)
      return fetchFile(data.url);
    if (!(data instanceof Uint8Array))
      this.consumed = true;
    return data;
  }
};
__name(InputFile, "InputFile");
async function* fetchFile(url) {
  const { body } = await fetch(url);
  if (body === null) {
    throw new Error(`Download failed, no response body from '${url}'`);
  }
  yield* body;
}
__name(fetchFile, "fetchFile");
function requiresFormDataUpload(payload) {
  return payload instanceof InputFile || typeof payload === "object" && payload !== null && Object.values(payload).some((v) => Array.isArray(v) ? v.some(requiresFormDataUpload) : v instanceof InputFile || requiresFormDataUpload(v));
}
__name(requiresFormDataUpload, "requiresFormDataUpload");
function str(value) {
  return JSON.stringify(value, (_, v) => v ?? void 0);
}
__name(str, "str");
function createJsonPayload(payload) {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
      connection: "keep-alive"
    },
    body: str(payload)
  };
}
__name(createJsonPayload, "createJsonPayload");
async function* protectItr(itr, onError) {
  try {
    yield* itr;
  } catch (err) {
    onError(err);
  }
}
__name(protectItr, "protectItr");
function createFormDataPayload(payload, onError) {
  const boundary = createBoundary();
  const itr = payloadToMultipartItr(payload, boundary);
  const safeItr = protectItr(itr, onError);
  const stream = itrToStream(safeItr);
  return {
    method: "POST",
    headers: {
      "content-type": `multipart/form-data; boundary=${boundary}`,
      connection: "keep-alive"
    },
    body: stream
  };
}
__name(createFormDataPayload, "createFormDataPayload");
function createBoundary() {
  return "----------" + randomId(32);
}
__name(createBoundary, "createBoundary");
function randomId(length = 16) {
  return Array.from(Array(length)).map(() => Math.random().toString(36)[2] || 0).join("");
}
__name(randomId, "randomId");
var enc = new TextEncoder();
async function* payloadToMultipartItr(payload, boundary) {
  const files = extractFiles(payload);
  yield enc.encode(`--${boundary}\r
`);
  const separator = enc.encode(`\r
--${boundary}\r
`);
  let first = true;
  for (const [key, value] of Object.entries(payload)) {
    if (value == null)
      continue;
    if (!first)
      yield separator;
    yield valuePart(key, typeof value === "object" ? str(value) : value);
    first = false;
  }
  for (const { id, origin, file } of files) {
    if (!first)
      yield separator;
    yield* filePart(id, origin, file);
    first = false;
  }
  yield enc.encode(`\r
--${boundary}--\r
`);
}
__name(payloadToMultipartItr, "payloadToMultipartItr");
function extractFiles(value) {
  if (typeof value !== "object" || value === null)
    return [];
  return Object.entries(value).flatMap(([k, v]) => {
    if (Array.isArray(v))
      return v.flatMap((p) => extractFiles(p));
    else if (v instanceof InputFile) {
      const id = randomId();
      Object.assign(value, {
        [k]: `attach://${id}`
      });
      const origin = k === "media" && "type" in value && typeof value.type === "string" ? value.type : k;
      return {
        id,
        origin,
        file: v
      };
    } else
      return extractFiles(v);
  });
}
__name(extractFiles, "extractFiles");
function valuePart(key, value) {
  return enc.encode(`content-disposition:form-data;name="${key}"\r
\r
${value}`);
}
__name(valuePart, "valuePart");
async function* filePart(id, origin, input) {
  const filename = input.filename || `${origin}.${getExt(origin)}`;
  if (filename.includes("\r") || filename.includes("\n")) {
    throw new Error(`File paths cannot contain carriage-return (\\r) or newline (\\n) characters! Filename for property '${origin}' was:
"""
${filename}
"""`);
  }
  yield enc.encode(`content-disposition:form-data;name="${id}";filename=${filename}\r
content-type:application/octet-stream\r
\r
`);
  const data = await input.toRaw();
  if (data instanceof Uint8Array)
    yield data;
  else
    yield* data;
}
__name(filePart, "filePart");
function getExt(key) {
  switch (key) {
    case "certificate":
      return "pem";
    case "photo":
    case "thumbnail":
      return "jpg";
    case "voice":
      return "ogg";
    case "audio":
      return "mp3";
    case "animation":
    case "video":
    case "video_note":
      return "mp4";
    case "sticker":
      return "webp";
    default:
      return "dat";
  }
}
__name(getExt, "getExt");
var debug1 = browser$1("grammy:core");
function concatTransformer(prev, trans) {
  return (method, payload, signal) => trans(prev, method, payload, signal);
}
__name(concatTransformer, "concatTransformer");
var ApiClient = class {
  token;
  webhookReplyEnvelope;
  options;
  fetch;
  hasUsedWebhookReply;
  installedTransformers;
  constructor(token, options = {}, webhookReplyEnvelope = {}) {
    this.token = token;
    this.webhookReplyEnvelope = webhookReplyEnvelope;
    this.hasUsedWebhookReply = false;
    this.installedTransformers = [];
    this.call = async (method, p, signal) => {
      const payload = p ?? {};
      debug1(`Calling ${method}`);
      if (signal !== void 0)
        validateSignal(method, payload, signal);
      const opts = this.options;
      const formDataRequired = requiresFormDataUpload(payload);
      if (this.webhookReplyEnvelope.send !== void 0 && !this.hasUsedWebhookReply && !formDataRequired && opts.canUseWebhookReply(method)) {
        this.hasUsedWebhookReply = true;
        const config3 = createJsonPayload({
          ...payload,
          method
        });
        await this.webhookReplyEnvelope.send(config3.body);
        return {
          ok: true,
          result: true
        };
      }
      const controller = createAbortControllerFromSignal(signal);
      const timeout = createTimeout(controller, opts.timeoutSeconds, method);
      const streamErr = createStreamError(controller);
      const url = opts.buildUrl(opts.apiRoot, this.token, method, opts.environment);
      const config2 = formDataRequired ? createFormDataPayload(payload, (err) => streamErr.catch(err)) : createJsonPayload(payload);
      const sig = controller.signal;
      const options2 = {
        ...opts.baseFetchConfig,
        signal: sig,
        ...config2
      };
      const successPromise = this.fetch(url instanceof URL ? url.href : url, options2).catch(toHttpError(method, opts.sensitiveLogs));
      const operations = [
        successPromise,
        streamErr.promise,
        timeout.promise
      ];
      try {
        const res = await Promise.race(operations);
        return await res.json();
      } finally {
        if (timeout.handle !== void 0)
          clearTimeout(timeout.handle);
      }
    };
    const apiRoot = options.apiRoot ?? "https://api.telegram.org";
    const environment = options.environment ?? "prod";
    const { fetch: customFetch } = options;
    const fetchFn = customFetch ?? fetch;
    this.options = {
      apiRoot,
      environment,
      buildUrl: options.buildUrl ?? defaultBuildUrl,
      timeoutSeconds: options.timeoutSeconds ?? 500,
      baseFetchConfig: {
        ...baseFetchConfig(apiRoot),
        ...options.baseFetchConfig
      },
      canUseWebhookReply: options.canUseWebhookReply ?? (() => false),
      sensitiveLogs: options.sensitiveLogs ?? false,
      fetch: (...args) => fetchFn(...args)
    };
    this.fetch = this.options.fetch;
    if (this.options.apiRoot.endsWith("/")) {
      throw new Error(`Remove the trailing '/' from the 'apiRoot' option (use '${this.options.apiRoot.substring(0, this.options.apiRoot.length - 1)}' instead of '${this.options.apiRoot}')`);
    }
  }
  call;
  use(...transformers) {
    this.call = transformers.reduce(concatTransformer, this.call);
    this.installedTransformers.push(...transformers);
    return this;
  }
  async callApi(method, payload, signal) {
    const data = await this.call(method, payload, signal);
    if (data.ok)
      return data.result;
    else
      throw toGrammyError(data, method, payload);
  }
};
__name(ApiClient, "ApiClient");
function createRawApi(token, options, webhookReplyEnvelope) {
  const client = new ApiClient(token, options, webhookReplyEnvelope);
  const proxyHandler = {
    get(_, m2) {
      return m2 === "toJSON" ? "__internal" : m2 === "getMe" || m2 === "getWebhookInfo" || m2 === "getForumTopicIconStickers" || m2 === "logOut" || m2 === "close" ? client.callApi.bind(client, m2, {}) : client.callApi.bind(client, m2);
    },
    ...proxyMethods
  };
  const raw = new Proxy({}, proxyHandler);
  const installedTransformers = client.installedTransformers;
  const api = {
    raw,
    installedTransformers,
    use: (...t) => {
      client.use(...t);
      return api;
    }
  };
  return api;
}
__name(createRawApi, "createRawApi");
var defaultBuildUrl = /* @__PURE__ */ __name((root, token, method, env) => {
  const prefix = env === "test" ? "test/" : "";
  return `${root}/bot${token}/${prefix}${method}`;
}, "defaultBuildUrl");
var proxyMethods = {
  set() {
    return false;
  },
  defineProperty() {
    return false;
  },
  deleteProperty() {
    return false;
  },
  ownKeys() {
    return [];
  }
};
function createTimeout(controller, seconds, method) {
  let handle = void 0;
  const promise = new Promise((_, reject) => {
    handle = setTimeout(() => {
      const msg = `Request to '${method}' timed out after ${seconds} seconds`;
      reject(new Error(msg));
      controller.abort();
    }, 1e3 * seconds);
  });
  return {
    promise,
    handle
  };
}
__name(createTimeout, "createTimeout");
function createStreamError(abortController) {
  let onError = /* @__PURE__ */ __name((err) => {
    throw err;
  }, "onError");
  const promise = new Promise((_, reject) => {
    onError = /* @__PURE__ */ __name((err) => {
      reject(err);
      abortController.abort();
    }, "onError");
  });
  return {
    promise,
    catch: onError
  };
}
__name(createStreamError, "createStreamError");
function createAbortControllerFromSignal(signal) {
  const abortController = new AbortController();
  if (signal === void 0)
    return abortController;
  const sig = signal;
  function abort() {
    abortController.abort();
    sig.removeEventListener("abort", abort);
  }
  __name(abort, "abort");
  if (sig.aborted)
    abort();
  else
    sig.addEventListener("abort", abort);
  return {
    abort,
    signal: abortController.signal
  };
}
__name(createAbortControllerFromSignal, "createAbortControllerFromSignal");
function validateSignal(method, payload, signal) {
  if (typeof signal?.addEventListener === "function") {
    return;
  }
  let payload0 = JSON.stringify(payload);
  if (payload0.length > 20) {
    payload0 = payload0.substring(0, 16) + " ...";
  }
  let payload1 = JSON.stringify(signal);
  if (payload1.length > 20) {
    payload1 = payload1.substring(0, 16) + " ...";
  }
  throw new Error(`Incorrect abort signal instance found! You passed two payloads to '${method}' but you should merge the second one containing '${payload1}' into the first one containing '${payload0}'! If you are using context shortcuts, you may want to use a method on 'ctx.api' instead.

If you want to prevent such mistakes in the future, consider using TypeScript. https://www.typescriptlang.org/`);
}
__name(validateSignal, "validateSignal");
var Api = class {
  token;
  options;
  raw;
  config;
  constructor(token, options, webhookReplyEnvelope) {
    this.token = token;
    this.options = options;
    const { raw, use, installedTransformers } = createRawApi(token, options, webhookReplyEnvelope);
    this.raw = raw;
    this.config = {
      use,
      installedTransformers: () => installedTransformers.slice()
    };
  }
  getUpdates(other, signal) {
    return this.raw.getUpdates({
      ...other
    }, signal);
  }
  setWebhook(url, other, signal) {
    return this.raw.setWebhook({
      url,
      ...other
    }, signal);
  }
  deleteWebhook(other, signal) {
    return this.raw.deleteWebhook({
      ...other
    }, signal);
  }
  getWebhookInfo(signal) {
    return this.raw.getWebhookInfo(signal);
  }
  getMe(signal) {
    return this.raw.getMe(signal);
  }
  logOut(signal) {
    return this.raw.logOut(signal);
  }
  close(signal) {
    return this.raw.close(signal);
  }
  sendMessage(chat_id, text, other, signal) {
    return this.raw.sendMessage({
      chat_id,
      text,
      ...other
    }, signal);
  }
  forwardMessage(chat_id, from_chat_id, message_id, other, signal) {
    return this.raw.forwardMessage({
      chat_id,
      from_chat_id,
      message_id,
      ...other
    }, signal);
  }
  forwardMessages(chat_id, from_chat_id, message_ids, other, signal) {
    return this.raw.forwardMessages({
      chat_id,
      from_chat_id,
      message_ids,
      ...other
    }, signal);
  }
  copyMessage(chat_id, from_chat_id, message_id, other, signal) {
    return this.raw.copyMessage({
      chat_id,
      from_chat_id,
      message_id,
      ...other
    }, signal);
  }
  copyMessages(chat_id, from_chat_id, message_ids, other, signal) {
    return this.raw.copyMessages({
      chat_id,
      from_chat_id,
      message_ids,
      ...other
    }, signal);
  }
  sendPhoto(chat_id, photo, other, signal) {
    return this.raw.sendPhoto({
      chat_id,
      photo,
      ...other
    }, signal);
  }
  sendAudio(chat_id, audio, other, signal) {
    return this.raw.sendAudio({
      chat_id,
      audio,
      ...other
    }, signal);
  }
  sendDocument(chat_id, document1, other, signal) {
    return this.raw.sendDocument({
      chat_id,
      document: document1,
      ...other
    }, signal);
  }
  sendVideo(chat_id, video, other, signal) {
    return this.raw.sendVideo({
      chat_id,
      video,
      ...other
    }, signal);
  }
  sendAnimation(chat_id, animation, other, signal) {
    return this.raw.sendAnimation({
      chat_id,
      animation,
      ...other
    }, signal);
  }
  sendVoice(chat_id, voice, other, signal) {
    return this.raw.sendVoice({
      chat_id,
      voice,
      ...other
    }, signal);
  }
  sendVideoNote(chat_id, video_note, other, signal) {
    return this.raw.sendVideoNote({
      chat_id,
      video_note,
      ...other
    }, signal);
  }
  sendMediaGroup(chat_id, media, other, signal) {
    return this.raw.sendMediaGroup({
      chat_id,
      media,
      ...other
    }, signal);
  }
  sendLocation(chat_id, latitude, longitude, other, signal) {
    return this.raw.sendLocation({
      chat_id,
      latitude,
      longitude,
      ...other
    }, signal);
  }
  editMessageLiveLocation(chat_id, message_id, latitude, longitude, other, signal) {
    return this.raw.editMessageLiveLocation({
      chat_id,
      message_id,
      latitude,
      longitude,
      ...other
    }, signal);
  }
  editMessageLiveLocationInline(inline_message_id, latitude, longitude, other, signal) {
    return this.raw.editMessageLiveLocation({
      inline_message_id,
      latitude,
      longitude,
      ...other
    }, signal);
  }
  stopMessageLiveLocation(chat_id, message_id, other, signal) {
    return this.raw.stopMessageLiveLocation({
      chat_id,
      message_id,
      ...other
    }, signal);
  }
  stopMessageLiveLocationInline(inline_message_id, other, signal) {
    return this.raw.stopMessageLiveLocation({
      inline_message_id,
      ...other
    }, signal);
  }
  sendPaidMedia(chat_id, star_count, media, other, signal) {
    return this.raw.sendPaidMedia({
      chat_id,
      star_count,
      media,
      ...other
    }, signal);
  }
  sendVenue(chat_id, latitude, longitude, title2, address, other, signal) {
    return this.raw.sendVenue({
      chat_id,
      latitude,
      longitude,
      title: title2,
      address,
      ...other
    }, signal);
  }
  sendContact(chat_id, phone_number, first_name, other, signal) {
    return this.raw.sendContact({
      chat_id,
      phone_number,
      first_name,
      ...other
    }, signal);
  }
  sendPoll(chat_id, question, options, other, signal) {
    return this.raw.sendPoll({
      chat_id,
      question,
      options,
      ...other
    }, signal);
  }
  sendDice(chat_id, emoji, other, signal) {
    return this.raw.sendDice({
      chat_id,
      emoji,
      ...other
    }, signal);
  }
  setMessageReaction(chat_id, message_id, reaction, other, signal) {
    return this.raw.setMessageReaction({
      chat_id,
      message_id,
      reaction,
      ...other
    }, signal);
  }
  sendChatAction(chat_id, action, other, signal) {
    return this.raw.sendChatAction({
      chat_id,
      action,
      ...other
    }, signal);
  }
  getUserProfilePhotos(user_id, other, signal) {
    return this.raw.getUserProfilePhotos({
      user_id,
      ...other
    }, signal);
  }
  setUserEmojiStatus(user_id, other, signal) {
    return this.raw.setUserEmojiStatus({
      user_id,
      ...other
    }, signal);
  }
  getUserChatBoosts(chat_id, user_id, signal) {
    return this.raw.getUserChatBoosts({
      chat_id,
      user_id
    }, signal);
  }
  getBusinessConnection(business_connection_id, signal) {
    return this.raw.getBusinessConnection({
      business_connection_id
    }, signal);
  }
  getFile(file_id, signal) {
    return this.raw.getFile({
      file_id
    }, signal);
  }
  kickChatMember(...args) {
    return this.banChatMember(...args);
  }
  banChatMember(chat_id, user_id, other, signal) {
    return this.raw.banChatMember({
      chat_id,
      user_id,
      ...other
    }, signal);
  }
  unbanChatMember(chat_id, user_id, other, signal) {
    return this.raw.unbanChatMember({
      chat_id,
      user_id,
      ...other
    }, signal);
  }
  restrictChatMember(chat_id, user_id, permissions, other, signal) {
    return this.raw.restrictChatMember({
      chat_id,
      user_id,
      permissions,
      ...other
    }, signal);
  }
  promoteChatMember(chat_id, user_id, other, signal) {
    return this.raw.promoteChatMember({
      chat_id,
      user_id,
      ...other
    }, signal);
  }
  setChatAdministratorCustomTitle(chat_id, user_id, custom_title, signal) {
    return this.raw.setChatAdministratorCustomTitle({
      chat_id,
      user_id,
      custom_title
    }, signal);
  }
  banChatSenderChat(chat_id, sender_chat_id, signal) {
    return this.raw.banChatSenderChat({
      chat_id,
      sender_chat_id
    }, signal);
  }
  unbanChatSenderChat(chat_id, sender_chat_id, signal) {
    return this.raw.unbanChatSenderChat({
      chat_id,
      sender_chat_id
    }, signal);
  }
  setChatPermissions(chat_id, permissions, other, signal) {
    return this.raw.setChatPermissions({
      chat_id,
      permissions,
      ...other
    }, signal);
  }
  exportChatInviteLink(chat_id, signal) {
    return this.raw.exportChatInviteLink({
      chat_id
    }, signal);
  }
  createChatInviteLink(chat_id, other, signal) {
    return this.raw.createChatInviteLink({
      chat_id,
      ...other
    }, signal);
  }
  editChatInviteLink(chat_id, invite_link, other, signal) {
    return this.raw.editChatInviteLink({
      chat_id,
      invite_link,
      ...other
    }, signal);
  }
  createChatSubscriptionInviteLink(chat_id, subscription_period, subscription_price, other, signal) {
    return this.raw.createChatSubscriptionInviteLink({
      chat_id,
      subscription_period,
      subscription_price,
      ...other
    }, signal);
  }
  editChatSubscriptionInviteLink(chat_id, invite_link, other, signal) {
    return this.raw.editChatSubscriptionInviteLink({
      chat_id,
      invite_link,
      ...other
    }, signal);
  }
  revokeChatInviteLink(chat_id, invite_link, signal) {
    return this.raw.revokeChatInviteLink({
      chat_id,
      invite_link
    }, signal);
  }
  approveChatJoinRequest(chat_id, user_id, signal) {
    return this.raw.approveChatJoinRequest({
      chat_id,
      user_id
    }, signal);
  }
  declineChatJoinRequest(chat_id, user_id, signal) {
    return this.raw.declineChatJoinRequest({
      chat_id,
      user_id
    }, signal);
  }
  setChatPhoto(chat_id, photo, signal) {
    return this.raw.setChatPhoto({
      chat_id,
      photo
    }, signal);
  }
  deleteChatPhoto(chat_id, signal) {
    return this.raw.deleteChatPhoto({
      chat_id
    }, signal);
  }
  setChatTitle(chat_id, title2, signal) {
    return this.raw.setChatTitle({
      chat_id,
      title: title2
    }, signal);
  }
  setChatDescription(chat_id, description, signal) {
    return this.raw.setChatDescription({
      chat_id,
      description
    }, signal);
  }
  pinChatMessage(chat_id, message_id, other, signal) {
    return this.raw.pinChatMessage({
      chat_id,
      message_id,
      ...other
    }, signal);
  }
  unpinChatMessage(chat_id, message_id, signal) {
    return this.raw.unpinChatMessage({
      chat_id,
      message_id
    }, signal);
  }
  unpinAllChatMessages(chat_id, signal) {
    return this.raw.unpinAllChatMessages({
      chat_id
    }, signal);
  }
  leaveChat(chat_id, signal) {
    return this.raw.leaveChat({
      chat_id
    }, signal);
  }
  getChat(chat_id, signal) {
    return this.raw.getChat({
      chat_id
    }, signal);
  }
  getChatAdministrators(chat_id, signal) {
    return this.raw.getChatAdministrators({
      chat_id
    }, signal);
  }
  getChatMembersCount(...args) {
    return this.getChatMemberCount(...args);
  }
  getChatMemberCount(chat_id, signal) {
    return this.raw.getChatMemberCount({
      chat_id
    }, signal);
  }
  getChatMember(chat_id, user_id, signal) {
    return this.raw.getChatMember({
      chat_id,
      user_id
    }, signal);
  }
  setChatStickerSet(chat_id, sticker_set_name, signal) {
    return this.raw.setChatStickerSet({
      chat_id,
      sticker_set_name
    }, signal);
  }
  deleteChatStickerSet(chat_id, signal) {
    return this.raw.deleteChatStickerSet({
      chat_id
    }, signal);
  }
  getForumTopicIconStickers(signal) {
    return this.raw.getForumTopicIconStickers(signal);
  }
  createForumTopic(chat_id, name, other, signal) {
    return this.raw.createForumTopic({
      chat_id,
      name,
      ...other
    }, signal);
  }
  editForumTopic(chat_id, message_thread_id, other, signal) {
    return this.raw.editForumTopic({
      chat_id,
      message_thread_id,
      ...other
    }, signal);
  }
  closeForumTopic(chat_id, message_thread_id, signal) {
    return this.raw.closeForumTopic({
      chat_id,
      message_thread_id
    }, signal);
  }
  reopenForumTopic(chat_id, message_thread_id, signal) {
    return this.raw.reopenForumTopic({
      chat_id,
      message_thread_id
    }, signal);
  }
  deleteForumTopic(chat_id, message_thread_id, signal) {
    return this.raw.deleteForumTopic({
      chat_id,
      message_thread_id
    }, signal);
  }
  unpinAllForumTopicMessages(chat_id, message_thread_id, signal) {
    return this.raw.unpinAllForumTopicMessages({
      chat_id,
      message_thread_id
    }, signal);
  }
  editGeneralForumTopic(chat_id, name, signal) {
    return this.raw.editGeneralForumTopic({
      chat_id,
      name
    }, signal);
  }
  closeGeneralForumTopic(chat_id, signal) {
    return this.raw.closeGeneralForumTopic({
      chat_id
    }, signal);
  }
  reopenGeneralForumTopic(chat_id, signal) {
    return this.raw.reopenGeneralForumTopic({
      chat_id
    }, signal);
  }
  hideGeneralForumTopic(chat_id, signal) {
    return this.raw.hideGeneralForumTopic({
      chat_id
    }, signal);
  }
  unhideGeneralForumTopic(chat_id, signal) {
    return this.raw.unhideGeneralForumTopic({
      chat_id
    }, signal);
  }
  unpinAllGeneralForumTopicMessages(chat_id, signal) {
    return this.raw.unpinAllGeneralForumTopicMessages({
      chat_id
    }, signal);
  }
  answerCallbackQuery(callback_query_id, other, signal) {
    return this.raw.answerCallbackQuery({
      callback_query_id,
      ...other
    }, signal);
  }
  setMyName(name, other, signal) {
    return this.raw.setMyName({
      name,
      ...other
    }, signal);
  }
  getMyName(other, signal) {
    return this.raw.getMyName(other ?? {}, signal);
  }
  setMyCommands(commands, other, signal) {
    return this.raw.setMyCommands({
      commands,
      ...other
    }, signal);
  }
  deleteMyCommands(other, signal) {
    return this.raw.deleteMyCommands({
      ...other
    }, signal);
  }
  getMyCommands(other, signal) {
    return this.raw.getMyCommands({
      ...other
    }, signal);
  }
  setMyDescription(description, other, signal) {
    return this.raw.setMyDescription({
      description,
      ...other
    }, signal);
  }
  getMyDescription(other, signal) {
    return this.raw.getMyDescription({
      ...other
    }, signal);
  }
  setMyShortDescription(short_description, other, signal) {
    return this.raw.setMyShortDescription({
      short_description,
      ...other
    }, signal);
  }
  getMyShortDescription(other, signal) {
    return this.raw.getMyShortDescription({
      ...other
    }, signal);
  }
  setChatMenuButton(other, signal) {
    return this.raw.setChatMenuButton({
      ...other
    }, signal);
  }
  getChatMenuButton(other, signal) {
    return this.raw.getChatMenuButton({
      ...other
    }, signal);
  }
  setMyDefaultAdministratorRights(other, signal) {
    return this.raw.setMyDefaultAdministratorRights({
      ...other
    }, signal);
  }
  getMyDefaultAdministratorRights(other, signal) {
    return this.raw.getMyDefaultAdministratorRights({
      ...other
    }, signal);
  }
  editMessageText(chat_id, message_id, text, other, signal) {
    return this.raw.editMessageText({
      chat_id,
      message_id,
      text,
      ...other
    }, signal);
  }
  editMessageTextInline(inline_message_id, text, other, signal) {
    return this.raw.editMessageText({
      inline_message_id,
      text,
      ...other
    }, signal);
  }
  editMessageCaption(chat_id, message_id, other, signal) {
    return this.raw.editMessageCaption({
      chat_id,
      message_id,
      ...other
    }, signal);
  }
  editMessageCaptionInline(inline_message_id, other, signal) {
    return this.raw.editMessageCaption({
      inline_message_id,
      ...other
    }, signal);
  }
  editMessageMedia(chat_id, message_id, media, other, signal) {
    return this.raw.editMessageMedia({
      chat_id,
      message_id,
      media,
      ...other
    }, signal);
  }
  editMessageMediaInline(inline_message_id, media, other, signal) {
    return this.raw.editMessageMedia({
      inline_message_id,
      media,
      ...other
    }, signal);
  }
  editMessageReplyMarkup(chat_id, message_id, other, signal) {
    return this.raw.editMessageReplyMarkup({
      chat_id,
      message_id,
      ...other
    }, signal);
  }
  editMessageReplyMarkupInline(inline_message_id, other, signal) {
    return this.raw.editMessageReplyMarkup({
      inline_message_id,
      ...other
    }, signal);
  }
  stopPoll(chat_id, message_id, other, signal) {
    return this.raw.stopPoll({
      chat_id,
      message_id,
      ...other
    }, signal);
  }
  deleteMessage(chat_id, message_id, signal) {
    return this.raw.deleteMessage({
      chat_id,
      message_id
    }, signal);
  }
  deleteMessages(chat_id, message_ids, signal) {
    return this.raw.deleteMessages({
      chat_id,
      message_ids
    }, signal);
  }
  sendSticker(chat_id, sticker, other, signal) {
    return this.raw.sendSticker({
      chat_id,
      sticker,
      ...other
    }, signal);
  }
  getStickerSet(name, signal) {
    return this.raw.getStickerSet({
      name
    }, signal);
  }
  getCustomEmojiStickers(custom_emoji_ids, signal) {
    return this.raw.getCustomEmojiStickers({
      custom_emoji_ids
    }, signal);
  }
  uploadStickerFile(user_id, sticker_format, sticker, signal) {
    return this.raw.uploadStickerFile({
      user_id,
      sticker_format,
      sticker
    }, signal);
  }
  createNewStickerSet(user_id, name, title2, stickers, other, signal) {
    return this.raw.createNewStickerSet({
      user_id,
      name,
      title: title2,
      stickers,
      ...other
    }, signal);
  }
  addStickerToSet(user_id, name, sticker, signal) {
    return this.raw.addStickerToSet({
      user_id,
      name,
      sticker
    }, signal);
  }
  setStickerPositionInSet(sticker, position, signal) {
    return this.raw.setStickerPositionInSet({
      sticker,
      position
    }, signal);
  }
  deleteStickerFromSet(sticker, signal) {
    return this.raw.deleteStickerFromSet({
      sticker
    }, signal);
  }
  replaceStickerInSet(user_id, name, old_sticker, sticker, signal) {
    return this.raw.replaceStickerInSet({
      user_id,
      name,
      old_sticker,
      sticker
    }, signal);
  }
  setStickerEmojiList(sticker, emoji_list, signal) {
    return this.raw.setStickerEmojiList({
      sticker,
      emoji_list
    }, signal);
  }
  setStickerKeywords(sticker, keywords, signal) {
    return this.raw.setStickerKeywords({
      sticker,
      keywords
    }, signal);
  }
  setStickerMaskPosition(sticker, mask_position, signal) {
    return this.raw.setStickerMaskPosition({
      sticker,
      mask_position
    }, signal);
  }
  setStickerSetTitle(name, title2, signal) {
    return this.raw.setStickerSetTitle({
      name,
      title: title2
    }, signal);
  }
  deleteStickerSet(name, signal) {
    return this.raw.deleteStickerSet({
      name
    }, signal);
  }
  setStickerSetThumbnail(name, user_id, thumbnail, format, signal) {
    return this.raw.setStickerSetThumbnail({
      name,
      user_id,
      thumbnail,
      format
    }, signal);
  }
  setCustomEmojiStickerSetThumbnail(name, custom_emoji_id, signal) {
    return this.raw.setCustomEmojiStickerSetThumbnail({
      name,
      custom_emoji_id
    }, signal);
  }
  getAvailableGifts(signal) {
    return this.raw.getAvailableGifts(signal);
  }
  sendGift(user_id, gift_id, other, signal) {
    return this.raw.sendGift({
      user_id,
      gift_id,
      ...other
    }, signal);
  }
  answerInlineQuery(inline_query_id, results, other, signal) {
    return this.raw.answerInlineQuery({
      inline_query_id,
      results,
      ...other
    }, signal);
  }
  answerWebAppQuery(web_app_query_id, result, signal) {
    return this.raw.answerWebAppQuery({
      web_app_query_id,
      result
    }, signal);
  }
  savePreparedInlineMessage(user_id, result, other, signal) {
    return this.raw.savePreparedInlineMessage({
      user_id,
      result,
      ...other
    }, signal);
  }
  sendInvoice(chat_id, title2, description, payload, currency, prices, other, signal) {
    return this.raw.sendInvoice({
      chat_id,
      title: title2,
      description,
      payload,
      currency,
      prices,
      ...other
    }, signal);
  }
  createInvoiceLink(title2, description, payload, provider_token, currency, prices, other, signal) {
    return this.raw.createInvoiceLink({
      title: title2,
      description,
      payload,
      provider_token,
      currency,
      prices,
      ...other
    }, signal);
  }
  answerShippingQuery(shipping_query_id, ok2, other, signal) {
    return this.raw.answerShippingQuery({
      shipping_query_id,
      ok: ok2,
      ...other
    }, signal);
  }
  answerPreCheckoutQuery(pre_checkout_query_id, ok2, other, signal) {
    return this.raw.answerPreCheckoutQuery({
      pre_checkout_query_id,
      ok: ok2,
      ...other
    }, signal);
  }
  getStarTransactions(other, signal) {
    return this.raw.getStarTransactions({
      ...other
    }, signal);
  }
  refundStarPayment(user_id, telegram_payment_charge_id, signal) {
    return this.raw.refundStarPayment({
      user_id,
      telegram_payment_charge_id
    }, signal);
  }
  editUserStarSubscription(user_id, telegram_payment_charge_id, is_canceled, signal) {
    return this.raw.editUserStarSubscription({
      user_id,
      telegram_payment_charge_id,
      is_canceled
    }, signal);
  }
  verifyUser(user_id, other, signal) {
    return this.raw.verifyUser({
      user_id,
      ...other
    }, signal);
  }
  verifyChat(chat_id, other, signal) {
    return this.raw.verifyChat({
      chat_id,
      ...other
    }, signal);
  }
  removeUserVerification(user_id, signal) {
    return this.raw.removeUserVerification({
      user_id
    }, signal);
  }
  removeChatVerification(chat_id, signal) {
    return this.raw.removeChatVerification({
      chat_id
    }, signal);
  }
  setPassportDataErrors(user_id, errors, signal) {
    return this.raw.setPassportDataErrors({
      user_id,
      errors
    }, signal);
  }
  sendGame(chat_id, game_short_name, other, signal) {
    return this.raw.sendGame({
      chat_id,
      game_short_name,
      ...other
    }, signal);
  }
  setGameScore(chat_id, message_id, user_id, score, other, signal) {
    return this.raw.setGameScore({
      chat_id,
      message_id,
      user_id,
      score,
      ...other
    }, signal);
  }
  setGameScoreInline(inline_message_id, user_id, score, other, signal) {
    return this.raw.setGameScore({
      inline_message_id,
      user_id,
      score,
      ...other
    }, signal);
  }
  getGameHighScores(chat_id, message_id, user_id, signal) {
    return this.raw.getGameHighScores({
      chat_id,
      message_id,
      user_id
    }, signal);
  }
  getGameHighScoresInline(inline_message_id, user_id, signal) {
    return this.raw.getGameHighScores({
      inline_message_id,
      user_id
    }, signal);
  }
};
__name(Api, "Api");
var debug2 = browser$1("grammy:bot");
var debugWarn = browser$1("grammy:warn");
var debugErr = browser$1("grammy:error");
var DEFAULT_UPDATE_TYPES = [
  "message",
  "edited_message",
  "channel_post",
  "edited_channel_post",
  "business_connection",
  "business_message",
  "edited_business_message",
  "deleted_business_messages",
  "inline_query",
  "chosen_inline_result",
  "callback_query",
  "shipping_query",
  "pre_checkout_query",
  "poll",
  "poll_answer",
  "my_chat_member",
  "chat_join_request",
  "chat_boost",
  "removed_chat_boost"
];
var Bot = class extends Composer {
  token;
  pollingRunning;
  pollingAbortController;
  lastTriedUpdateId;
  api;
  me;
  mePromise;
  clientConfig;
  ContextConstructor;
  observedUpdateTypes;
  errorHandler;
  constructor(token, config2) {
    super();
    this.token = token;
    this.pollingRunning = false;
    this.lastTriedUpdateId = 0;
    this.observedUpdateTypes = /* @__PURE__ */ new Set();
    this.errorHandler = async (err) => {
      console.error("Error in middleware while handling update", err.ctx?.update?.update_id, err.error);
      console.error("No error handler was set!");
      console.error("Set your own error handler with `bot.catch = ...`");
      if (this.pollingRunning) {
        console.error("Stopping bot");
        await this.stop();
      }
      throw err;
    };
    if (!token)
      throw new Error("Empty token!");
    this.me = config2?.botInfo;
    this.clientConfig = config2?.client;
    this.ContextConstructor = config2?.ContextConstructor ?? Context;
    this.api = new Api(token, this.clientConfig);
  }
  set botInfo(botInfo) {
    this.me = botInfo;
  }
  get botInfo() {
    if (this.me === void 0) {
      throw new Error("Bot information unavailable! Make sure to call `await bot.init()` before accessing `bot.botInfo`!");
    }
    return this.me;
  }
  on(filter, ...middleware) {
    for (const [u] of parse(filter).flatMap(preprocess)) {
      this.observedUpdateTypes.add(u);
    }
    return super.on(filter, ...middleware);
  }
  reaction(reaction, ...middleware) {
    this.observedUpdateTypes.add("message_reaction");
    return super.reaction(reaction, ...middleware);
  }
  isInited() {
    return this.me !== void 0;
  }
  async init(signal) {
    if (!this.isInited()) {
      debug2("Initializing bot");
      this.mePromise ??= withRetries(() => this.api.getMe(signal), signal);
      let me;
      try {
        me = await this.mePromise;
      } finally {
        this.mePromise = void 0;
      }
      if (this.me === void 0)
        this.me = me;
      else
        debug2("Bot info was set by now, will not overwrite");
    }
    debug2(`I am ${this.me.username}!`);
  }
  async handleUpdates(updates) {
    for (const update of updates) {
      this.lastTriedUpdateId = update.update_id;
      try {
        await this.handleUpdate(update);
      } catch (err) {
        if (err instanceof BotError) {
          await this.errorHandler(err);
        } else {
          console.error("FATAL: grammY unable to handle:", err);
          throw err;
        }
      }
    }
  }
  async handleUpdate(update, webhookReplyEnvelope) {
    if (this.me === void 0) {
      throw new Error("Bot not initialized! Either call `await bot.init()`, or directly set the `botInfo` option in the `Bot` constructor to specify a known bot info object.");
    }
    debug2(`Processing update ${update.update_id}`);
    const api = new Api(this.token, this.clientConfig, webhookReplyEnvelope);
    const t = this.api.config.installedTransformers();
    if (t.length > 0)
      api.config.use(...t);
    const ctx = new this.ContextConstructor(update, api, this.me);
    try {
      await run(this.middleware(), ctx);
    } catch (err) {
      debugErr(`Error in middleware for update ${update.update_id}`);
      throw new BotError(err, ctx);
    }
  }
  async start(options) {
    const setup2 = [];
    if (!this.isInited()) {
      setup2.push(this.init(this.pollingAbortController?.signal));
    }
    if (this.pollingRunning) {
      await Promise.all(setup2);
      debug2("Simple long polling already running!");
      return;
    }
    this.pollingRunning = true;
    this.pollingAbortController = new AbortController();
    try {
      setup2.push(withRetries(async () => {
        await this.api.deleteWebhook({
          drop_pending_updates: options?.drop_pending_updates
        }, this.pollingAbortController?.signal);
      }, this.pollingAbortController?.signal));
      await Promise.all(setup2);
      await options?.onStart?.(this.botInfo);
    } catch (err) {
      this.pollingRunning = false;
      this.pollingAbortController = void 0;
      throw err;
    }
    if (!this.pollingRunning)
      return;
    validateAllowedUpdates(this.observedUpdateTypes, options?.allowed_updates);
    this.use = noUseFunction;
    debug2("Starting simple long polling");
    await this.loop(options);
    debug2("Middleware is done running");
  }
  async stop() {
    if (this.pollingRunning) {
      debug2("Stopping bot, saving update offset");
      this.pollingRunning = false;
      this.pollingAbortController?.abort();
      const offset = this.lastTriedUpdateId + 1;
      await this.api.getUpdates({
        offset,
        limit: 1
      }).finally(() => this.pollingAbortController = void 0);
    } else {
      debug2("Bot is not running!");
    }
  }
  isRunning() {
    return this.pollingRunning;
  }
  catch(errorHandler) {
    this.errorHandler = errorHandler;
  }
  async loop(options) {
    const limit = options?.limit;
    const timeout = options?.timeout ?? 30;
    let allowed_updates = options?.allowed_updates ?? [];
    try {
      while (this.pollingRunning) {
        const updates = await this.fetchUpdates({
          limit,
          timeout,
          allowed_updates
        });
        if (updates === void 0)
          break;
        await this.handleUpdates(updates);
        allowed_updates = void 0;
      }
    } finally {
      this.pollingRunning = false;
    }
  }
  async fetchUpdates({ limit, timeout, allowed_updates }) {
    const offset = this.lastTriedUpdateId + 1;
    let updates = void 0;
    do {
      try {
        updates = await this.api.getUpdates({
          offset,
          limit,
          timeout,
          allowed_updates
        }, this.pollingAbortController?.signal);
      } catch (error) {
        await this.handlePollingError(error);
      }
    } while (updates === void 0 && this.pollingRunning);
    return updates;
  }
  async handlePollingError(error) {
    if (!this.pollingRunning) {
      debug2("Pending getUpdates request cancelled");
      return;
    }
    let sleepSeconds = 3;
    if (error instanceof GrammyError) {
      debugErr(error.message);
      if (error.error_code === 401 || error.error_code === 409) {
        throw error;
      } else if (error.error_code === 429) {
        debugErr("Bot API server is closing.");
        sleepSeconds = error.parameters.retry_after ?? sleepSeconds;
      }
    } else
      debugErr(error);
    debugErr(`Call to getUpdates failed, retrying in ${sleepSeconds} seconds ...`);
    await sleep(sleepSeconds);
  }
};
__name(Bot, "Bot");
async function withRetries(task, signal) {
  const INITIAL_DELAY = 50;
  let lastDelay = 50;
  async function handleError(error) {
    let delay = false;
    let strategy = "rethrow";
    if (error instanceof HttpError) {
      delay = true;
      strategy = "retry";
    } else if (error instanceof GrammyError) {
      if (error.error_code >= 500) {
        delay = true;
        strategy = "retry";
      } else if (error.error_code === 429) {
        const retryAfter = error.parameters.retry_after;
        if (typeof retryAfter === "number") {
          await sleep(retryAfter, signal);
          lastDelay = INITIAL_DELAY;
        } else {
          delay = true;
        }
        strategy = "retry";
      }
    }
    if (delay) {
      if (lastDelay !== 50) {
        await sleep(lastDelay, signal);
      }
      const TWENTY_MINUTES = 20 * 60 * 1e3;
      lastDelay = Math.min(TWENTY_MINUTES, 2 * lastDelay);
    }
    return strategy;
  }
  __name(handleError, "handleError");
  let result = {
    ok: false
  };
  while (!result.ok) {
    try {
      result = {
        ok: true,
        value: await task()
      };
    } catch (error) {
      debugErr(error);
      const strategy = await handleError(error);
      switch (strategy) {
        case "retry":
          continue;
        case "rethrow":
          throw error;
      }
    }
  }
  return result.value;
}
__name(withRetries, "withRetries");
async function sleep(seconds, signal) {
  let handle;
  let reject;
  function abort() {
    reject?.(new Error("Aborted delay"));
    if (handle !== void 0)
      clearTimeout(handle);
  }
  __name(abort, "abort");
  try {
    await new Promise((res, rej) => {
      reject = rej;
      if (signal?.aborted) {
        abort();
        return;
      }
      signal?.addEventListener("abort", abort);
      handle = setTimeout(res, 1e3 * seconds);
    });
  } finally {
    signal?.removeEventListener("abort", abort);
  }
}
__name(sleep, "sleep");
function validateAllowedUpdates(updates, allowed = DEFAULT_UPDATE_TYPES) {
  const impossible = Array.from(updates).filter((u) => !allowed.includes(u));
  if (impossible.length > 0) {
    debugWarn(`You registered listeners for the following update types, but you did not specify them in \`allowed_updates\` so they may not be received: ${impossible.map((u) => `'${u}'`).join(", ")}`);
  }
}
__name(validateAllowedUpdates, "validateAllowedUpdates");
function noUseFunction() {
  throw new Error(`It looks like you are registering more listeners on your bot from within other listeners! This means that every time your bot handles a message like this one, new listeners will be added. This list grows until your machine crashes, so grammY throws this error to tell you that you should probably do things a bit differently. If you're unsure how to resolve this problem, you can ask in the group chat: https://telegram.me/grammyjs

On the other hand, if you actually know what you're doing and you do need to install further middleware while your bot is running, consider installing a composer instance on your bot, and in turn augment the composer after the fact. This way, you can circumvent this protection against memory leaks.`);
}
__name(noUseFunction, "noUseFunction");
var ALL_UPDATE_TYPES = [
  ...DEFAULT_UPDATE_TYPES,
  "chat_member",
  "message_reaction",
  "message_reaction_count"
];
var ALL_CHAT_PERMISSIONS = {
  is_anonymous: true,
  can_manage_chat: true,
  can_delete_messages: true,
  can_manage_video_chats: true,
  can_restrict_members: true,
  can_promote_members: true,
  can_change_info: true,
  can_invite_users: true,
  can_post_stories: true,
  can_edit_stories: true,
  can_delete_stories: true,
  can_post_messages: true,
  can_edit_messages: true,
  can_pin_messages: true,
  can_manage_topics: true
};
var API_CONSTANTS = {
  DEFAULT_UPDATE_TYPES,
  ALL_UPDATE_TYPES,
  ALL_CHAT_PERMISSIONS
};
Object.freeze(API_CONSTANTS);
var debug3 = browser$1("grammy:session");
var SECRET_HEADER = "X-Telegram-Bot-Api-Secret-Token";
var SECRET_HEADER_LOWERCASE = SECRET_HEADER.toLowerCase();
var WRONG_TOKEN_ERROR = "secret token is wrong";
var ok = /* @__PURE__ */ __name(() => new Response(null, {
  status: 200
}), "ok");
var okJson = /* @__PURE__ */ __name((json) => new Response(json, {
  status: 200,
  headers: {
    "Content-Type": "application/json"
  }
}), "okJson");
var unauthorized = /* @__PURE__ */ __name(() => new Response('"unauthorized"', {
  status: 401,
  statusText: WRONG_TOKEN_ERROR
}), "unauthorized");
var awsLambda = /* @__PURE__ */ __name((event, _context, callback) => ({
  update: JSON.parse(event.body ?? "{}"),
  header: event.headers[SECRET_HEADER],
  end: () => callback(null, {
    statusCode: 200
  }),
  respond: (json) => callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: json
  }),
  unauthorized: () => callback(null, {
    statusCode: 401
  })
}), "awsLambda");
var awsLambdaAsync = /* @__PURE__ */ __name((event, _context) => {
  let resolveResponse;
  return {
    update: JSON.parse(event.body ?? "{}"),
    header: event.headers[SECRET_HEADER],
    end: () => resolveResponse({
      statusCode: 200
    }),
    respond: (json) => resolveResponse({
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    }),
    unauthorized: () => resolveResponse({
      statusCode: 401
    }),
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "awsLambdaAsync");
var azure = /* @__PURE__ */ __name((request, context) => ({
  update: Promise.resolve(request.body),
  header: context.res?.headers?.[SECRET_HEADER],
  end: () => context.res = {
    status: 200,
    body: ""
  },
  respond: (json) => {
    context.res?.set?.("Content-Type", "application/json");
    context.res?.send?.(json);
  },
  unauthorized: () => {
    context.res?.send?.(401, WRONG_TOKEN_ERROR);
  }
}), "azure");
var bun = /* @__PURE__ */ __name((request) => {
  let resolveResponse;
  return {
    update: request.json(),
    header: request.headers.get(SECRET_HEADER) || void 0,
    end: () => {
      resolveResponse(ok());
    },
    respond: (json) => {
      resolveResponse(okJson(json));
    },
    unauthorized: () => {
      resolveResponse(unauthorized());
    },
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "bun");
var cloudflare = /* @__PURE__ */ __name((event) => {
  let resolveResponse;
  event.respondWith(new Promise((resolve) => {
    resolveResponse = resolve;
  }));
  return {
    update: event.request.json(),
    header: event.request.headers.get(SECRET_HEADER) || void 0,
    end: () => {
      resolveResponse(ok());
    },
    respond: (json) => {
      resolveResponse(okJson(json));
    },
    unauthorized: () => {
      resolveResponse(unauthorized());
    }
  };
}, "cloudflare");
var cloudflareModule = /* @__PURE__ */ __name((request) => {
  let resolveResponse;
  return {
    update: request.json(),
    header: request.headers.get(SECRET_HEADER) || void 0,
    end: () => {
      resolveResponse(ok());
    },
    respond: (json) => {
      resolveResponse(okJson(json));
    },
    unauthorized: () => {
      resolveResponse(unauthorized());
    },
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "cloudflareModule");
var express = /* @__PURE__ */ __name((req, res) => ({
  update: Promise.resolve(req.body),
  header: req.header(SECRET_HEADER),
  end: () => res.end(),
  respond: (json) => {
    res.set("Content-Type", "application/json");
    res.send(json);
  },
  unauthorized: () => {
    res.status(401).send(WRONG_TOKEN_ERROR);
  }
}), "express");
var fastify = /* @__PURE__ */ __name((request, reply) => ({
  update: Promise.resolve(request.body),
  header: request.headers[SECRET_HEADER_LOWERCASE],
  end: () => reply.status(200).send(),
  respond: (json) => reply.headers({
    "Content-Type": "application/json"
  }).send(json),
  unauthorized: () => reply.code(401).send(WRONG_TOKEN_ERROR)
}), "fastify");
var hono = /* @__PURE__ */ __name((c) => {
  let resolveResponse;
  return {
    update: c.req.json(),
    header: c.req.header(SECRET_HEADER),
    end: () => {
      resolveResponse(c.body(""));
    },
    respond: (json) => {
      resolveResponse(c.json(json));
    },
    unauthorized: () => {
      c.status(401);
      resolveResponse(c.body(""));
    },
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "hono");
var http = /* @__PURE__ */ __name((req, res) => {
  const secretHeaderFromRequest = req.headers[SECRET_HEADER_LOWERCASE];
  return {
    update: new Promise((resolve, reject) => {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk)).once("end", () => {
        const raw = Buffer.concat(chunks).toString("utf-8");
        resolve(JSON.parse(raw));
      }).once("error", reject);
    }),
    header: Array.isArray(secretHeaderFromRequest) ? secretHeaderFromRequest[0] : secretHeaderFromRequest,
    end: () => res.end(),
    respond: (json) => res.writeHead(200, {
      "Content-Type": "application/json"
    }).end(json),
    unauthorized: () => res.writeHead(401).end(WRONG_TOKEN_ERROR)
  };
}, "http");
var koa = /* @__PURE__ */ __name((ctx) => ({
  update: Promise.resolve(ctx.request.body),
  header: ctx.get(SECRET_HEADER) || void 0,
  end: () => {
    ctx.body = "";
  },
  respond: (json) => {
    ctx.set("Content-Type", "application/json");
    ctx.response.body = json;
  },
  unauthorized: () => {
    ctx.status = 401;
  }
}), "koa");
var nextJs = /* @__PURE__ */ __name((request, response) => ({
  update: Promise.resolve(request.body),
  header: request.headers[SECRET_HEADER_LOWERCASE],
  end: () => response.end(),
  respond: (json) => response.status(200).json(json),
  unauthorized: () => response.status(401).send(WRONG_TOKEN_ERROR)
}), "nextJs");
var nhttp = /* @__PURE__ */ __name((rev) => ({
  update: Promise.resolve(rev.body),
  header: rev.headers.get(SECRET_HEADER) || void 0,
  end: () => rev.response.sendStatus(200),
  respond: (json) => rev.response.status(200).send(json),
  unauthorized: () => rev.response.status(401).send(WRONG_TOKEN_ERROR)
}), "nhttp");
var oak = /* @__PURE__ */ __name((ctx) => ({
  update: ctx.request.body.json(),
  header: ctx.request.headers.get(SECRET_HEADER) || void 0,
  end: () => {
    ctx.response.status = 200;
  },
  respond: (json) => {
    ctx.response.type = "json";
    ctx.response.body = json;
  },
  unauthorized: () => {
    ctx.response.status = 401;
  }
}), "oak");
var serveHttp = /* @__PURE__ */ __name((requestEvent) => ({
  update: requestEvent.request.json(),
  header: requestEvent.request.headers.get(SECRET_HEADER) || void 0,
  end: () => requestEvent.respondWith(ok()),
  respond: (json) => requestEvent.respondWith(okJson(json)),
  unauthorized: () => requestEvent.respondWith(unauthorized())
}), "serveHttp");
var stdHttp = /* @__PURE__ */ __name((req) => {
  let resolveResponse;
  return {
    update: req.json(),
    header: req.headers.get(SECRET_HEADER) || void 0,
    end: () => {
      if (resolveResponse)
        resolveResponse(ok());
    },
    respond: (json) => {
      if (resolveResponse)
        resolveResponse(okJson(json));
    },
    unauthorized: () => {
      if (resolveResponse)
        resolveResponse(unauthorized());
    },
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "stdHttp");
var sveltekit = /* @__PURE__ */ __name(({ request }) => {
  let resolveResponse;
  return {
    update: Promise.resolve(request.json()),
    header: request.headers.get(SECRET_HEADER) || void 0,
    end: () => {
      if (resolveResponse)
        resolveResponse(ok());
    },
    respond: (json) => {
      if (resolveResponse)
        resolveResponse(okJson(json));
    },
    unauthorized: () => {
      if (resolveResponse)
        resolveResponse(unauthorized());
    },
    handlerReturn: new Promise((resolve) => {
      resolveResponse = resolve;
    })
  };
}, "sveltekit");
var worktop = /* @__PURE__ */ __name((req, res) => ({
  update: Promise.resolve(req.json()),
  header: req.headers.get(SECRET_HEADER) ?? void 0,
  end: () => res.end(null),
  respond: (json) => res.send(200, json),
  unauthorized: () => res.send(401, WRONG_TOKEN_ERROR)
}), "worktop");
var adapters = {
  "aws-lambda": awsLambda,
  "aws-lambda-async": awsLambdaAsync,
  azure,
  bun,
  cloudflare,
  "cloudflare-mod": cloudflareModule,
  express,
  fastify,
  hono,
  http,
  https: http,
  koa,
  "next-js": nextJs,
  nhttp,
  oak,
  serveHttp,
  "std/http": stdHttp,
  sveltekit,
  worktop
};
var debugErr1 = browser$1("grammy:error");
var callbackAdapter = /* @__PURE__ */ __name((update, callback, header, unauthorized2 = () => callback('"unauthorized"')) => ({
  update: Promise.resolve(update),
  respond: callback,
  header,
  unauthorized: unauthorized2
}), "callbackAdapter");
var adapters1 = {
  ...adapters,
  callback: callbackAdapter
};

// src/helpers/getHijriDate.ts
var import_hijri_converter = __toESM(require_hijri_converter());
var ARABIC_DAYS = [
  "\u0627\u0644\u0623\u062D\u062F",
  "\u0627\u0644\u0625\u062B\u0646\u064A\u0646",
  "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
  "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
  "\u0627\u0644\u062E\u0645\u064A\u0633",
  "\u0627\u0644\u062C\u0645\u0639\u0629",
  "\u0627\u0644\u0633\u0628\u062A"
];
var ARABIC_MONTHS = {
  1: "\u0645\u062D\u0631\u0645",
  2: "\u0635\u0641\u0631",
  3: "\u0631\u0628\u064A\u0639 \u0627\u0644\u0623\u0648\u0644",
  4: "\u0631\u0628\u064A\u0639 \u0627\u0644\u062B\u0627\u0646\u064A",
  5: "\u062C\u0645\u0627\u062F\u0649 \u0627\u0644\u0623\u0648\u0644\u0649",
  6: "\u062C\u0645\u0627\u062F\u0649 \u0627\u0644\u0622\u062E\u0631\u0629",
  7: "\u0631\u062C\u0628",
  8: "\u0634\u0639\u0628\u0627\u0646",
  9: "\u0631\u0645\u0636\u0627\u0646",
  10: "\u0634\u0648\u0627\u0644",
  11: "\u0630\u0648 \u0627\u0644\u0642\u0639\u062F\u0629",
  12: "\u0630\u0648 \u0627\u0644\u062D\u062C\u0629"
};
function getHijriDate() {
  const today = /* @__PURE__ */ new Date();
  const gYear = today.getFullYear();
  const gMonth = today.getMonth() + 1;
  const gDay = today.getDate();
  const hijriDate = (0, import_hijri_converter.toHijri)(gYear, gMonth, gDay);
  const weekNumber = Math.ceil(hijriDate.hd / 7);
  const dayOfWeek = today.getDay();
  const arabicDay = ARABIC_DAYS[dayOfWeek];
  const arabicMonth = ARABIC_MONTHS[hijriDate.hm];
  return `${arabicDay} - \u0627\u0644\u0627\u0633\u0628\u0648\u0639 #${weekNumber} \u0645\u0646 \u0634\u0647\u0631 ${arabicMonth}`;
}
__name(getHijriDate, "getHijriDate");

// src/bot/polls/content.ts
var pollConfigurations = [
  {
    type: "custom",
    content: {
      question: `\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629:
${getHijriDate()}`,
      options: [
        { text: "\u0627\u0644\u0635\u0644\u0627\u0629 5 \u0641\u0631\u0627\u0626\u0636" },
        { text: "\u0635\u0644\u0627\u0629 \u0627\u0644\u0646\u0648\u0627\u0641\u0644 (6 \u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644)" }
      ],
      duration: 2 * 60 * 1e3
    }
  },
  {
    type: "daily",
    content: {
      question: `\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u064A\u0648\u0645\u064A\u0629:
${getHijriDate()}`,
      options: [
        { text: "\u0627\u0644\u0635\u0644\u0627\u0629 5 \u0641\u0631\u0627\u0626\u0636" },
        { text: "\u0635\u0644\u0627\u0629 \u0627\u0644\u0646\u0648\u0627\u0641\u0644 (6 \u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644)" },
        { text: "\u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0627\u0644\u0646\u0628\u064A" },
        { text: "\u0623\u0630\u0643\u0627\u0631 \u0627\u0644\u0635\u0628\u0627\u062D \u0648 \u0627\u0644\u0645\u0633\u0627\u0621" },
        { text: "\u0648\u0631\u062F \u0627\u0644\u0642\u0631\u0627\u0646" },
        { text: "\u0627\u0644\u0636\u062D\u0649" }
      ],
      duration: 24 * 3600 * 1e3
      // will expire after 1 day
    }
  },
  {
    type: "weekly",
    content: {
      question: `\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629:
${getHijriDate()}`,
      options: [
        { text: "\u0627\u0644\u0635\u0644\u0627\u0629 5 \u0641\u0631\u0627\u0626\u0636" },
        { text: "\u0635\u0644\u0627\u0629 \u0627\u0644\u0646\u0648\u0627\u0641\u0644 (6 \u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644)" },
        { text: "\u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0627\u0644\u0646\u0628\u064A" },
        { text: "\u0623\u0630\u0643\u0627\u0631 \u0627\u0644\u0635\u0628\u0627\u062D \u0648 \u0627\u0644\u0645\u0633\u0627\u0621" },
        { text: "\u0648\u0631\u062F \u0627\u0644\u0642\u0631\u0627\u0646" },
        { text: "\u0627\u0644\u0636\u062D\u0649" }
      ],
      duration: 7 * 24 * 3600 * 1e3
      // ill expire after 1 week
    }
  }
];

// src/bot/polls/scheduler.ts
async function setupPollSchedulers(bot, env, type) {
  const config2 = pollConfigurations.find((c) => c.type === type);
  if (!config2)
    return;
  console.log(`[DEBUG] Starting ${type} poll at ${(/* @__PURE__ */ new Date()).toISOString()}`);
  console.log(
    `[DEBUG] Will auto-stop at ${new Date(
      Date.now() + (config2.duration ?? 0)
    ).toISOString()}`
  );
  try {
    const { question, options } = config2.content;
    const pollMessage = await bot.api.sendPoll(
      env.CHANNEL_ID,
      question,
      options,
      {
        is_anonymous: true,
        allows_multiple_answers: true
      }
    );
    const activePoll = {
      messageId: pollMessage.message_id,
      stopTime: Date.now() + (config2.duration ?? 0)
    };
    await env.POLL_STORE.put(`poll:${type}`, JSON.stringify(activePoll));
    console.log(`${type} poll started: ${pollMessage.message_id}`);
  } catch (error) {
    console.error(`Failed to start ${type} poll:`, error);
  }
}
__name(setupPollSchedulers, "setupPollSchedulers");

// src/bot.ts
function createBot(token) {
  const bot = new Bot(token);
  bot.command("start", async (ctx) => {
    await ctx.reply("Hello, world!");
    console.log("Start command processed");
  });
  bot.on("message", (ctx) => {
    console.log("Received message:", ctx.message);
    ctx.reply("Got your message!");
  });
  return bot;
}
__name(createBot, "createBot");

// src/index.ts
var src_default = {
  async fetch(request, env) {
    const bot = createBot(env.BOT_TOKEN);
    console.log("Incoming request:", {
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers)
    });
    if (request.method === "POST") {
      try {
        const update = await request.json();
        console.log(
          "Received update payload:",
          JSON.stringify(update, null, 2)
        );
        const bot2 = createBot(env.BOT_TOKEN);
        await bot2.handleUpdate(update);
        return new Response("OK");
      } catch (error) {
        return new Response("Error", { status: 500 });
      }
    }
    return new Response("Not Found", { status: 404 });
  },
  async scheduled(event, env) {
    const bot = new Bot(env.BOT_TOKEN);
    const cronType = event.cron === "0 21 * * *" ? "daily" : event.cron === "0 21 * * 5" ? "weekly" : "custom";
    await setupPollSchedulers(bot, env, cronType);
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
