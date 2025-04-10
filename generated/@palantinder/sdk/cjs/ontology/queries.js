"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimilarPersonsTo = exports.getPersonFromName = exports.getPerson = exports.getLikedPersonsBy = void 0;
var getLikedPersonsBy_js_1 = require("./queries/getLikedPersonsBy.js");
Object.defineProperty(exports, "getLikedPersonsBy", { enumerable: true, get: function () { return getLikedPersonsBy_js_1.getLikedPersonsBy; } });
var getPerson_js_1 = require("./queries/getPerson.js");
Object.defineProperty(exports, "getPerson", { enumerable: true, get: function () { return getPerson_js_1.getPerson; } });
var getPersonFromName_js_1 = require("./queries/getPersonFromName.js");
Object.defineProperty(exports, "getPersonFromName", { enumerable: true, get: function () { return getPersonFromName_js_1.getPersonFromName; } });
var getSimilarPersonsTo_js_1 = require("./queries/getSimilarPersonsTo.js");
Object.defineProperty(exports, "getSimilarPersonsTo", { enumerable: true, get: function () { return getSimilarPersonsTo_js_1.getSimilarPersonsTo; } });
