"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
function compareObjectsByProp(object1, object2, prop) {
    if (Array.isArray(object1[prop])) {
        object2[prop] = object2[prop].map(function (_a) {
            var _id = _a._id, rest = __rest(_a, ["_id"]);
            return rest;
        });
        return (lodash_1.default.differenceWith(object1[prop], object2[prop], lodash_1.default.isEqual).length === 0);
    }
    else if (typeof object1[prop] === "object") {
        delete object2[prop]._id;
        return lodash_1.default.isEqual(object1[prop], object2[prop]);
    }
    else {
        return object1[prop] === object2[prop];
    }
}
exports.default = compareObjectsByProp;
//# sourceMappingURL=compare-objects.js.map