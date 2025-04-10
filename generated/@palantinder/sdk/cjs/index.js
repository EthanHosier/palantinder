"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ontologyRid = exports.$osdkMetadata = exports.$Queries = exports.getSimilarPersonsTo = exports.getPersonFromName = exports.getPerson = exports.getLikedPersonsBy = exports.$Objects = exports.Person = exports.MatchStatus = exports.$Interfaces = exports.$Actions = exports.handleSwipeAction = void 0;
var actions_js_1 = require("./ontology/actions.js");
Object.defineProperty(exports, "handleSwipeAction", { enumerable: true, get: function () { return actions_js_1.handleSwipeAction; } });
exports.$Actions = require("./ontology/actions.js");
exports.$Interfaces = require("./ontology/interfaces.js");
var objects_js_1 = require("./ontology/objects.js");
Object.defineProperty(exports, "MatchStatus", { enumerable: true, get: function () { return objects_js_1.MatchStatus; } });
Object.defineProperty(exports, "Person", { enumerable: true, get: function () { return objects_js_1.Person; } });
exports.$Objects = require("./ontology/objects.js");
var queries_js_1 = require("./ontology/queries.js");
Object.defineProperty(exports, "getLikedPersonsBy", { enumerable: true, get: function () { return queries_js_1.getLikedPersonsBy; } });
Object.defineProperty(exports, "getPerson", { enumerable: true, get: function () { return queries_js_1.getPerson; } });
Object.defineProperty(exports, "getPersonFromName", { enumerable: true, get: function () { return queries_js_1.getPersonFromName; } });
Object.defineProperty(exports, "getSimilarPersonsTo", { enumerable: true, get: function () { return queries_js_1.getSimilarPersonsTo; } });
exports.$Queries = require("./ontology/queries.js");
var OntologyMetadata_js_1 = require("./OntologyMetadata.js");
Object.defineProperty(exports, "$osdkMetadata", { enumerable: true, get: function () { return OntologyMetadata_js_1.$osdkMetadata; } });
var OntologyMetadata_js_2 = require("./OntologyMetadata.js");
Object.defineProperty(exports, "$ontologyRid", { enumerable: true, get: function () { return OntologyMetadata_js_2.$ontologyRid; } });
