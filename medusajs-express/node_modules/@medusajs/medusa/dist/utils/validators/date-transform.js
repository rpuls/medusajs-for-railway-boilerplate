"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDate = void 0;
var transformDate = function (_a) {
    var value = _a.value;
    return !isNaN(Date.parse(value)) ? new Date(value) : new Date(Number(value) * 1000);
};
exports.transformDate = transformDate;
//# sourceMappingURL=date-transform.js.map