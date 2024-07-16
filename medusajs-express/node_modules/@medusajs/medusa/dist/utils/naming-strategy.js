"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenedNamingStrategy = void 0;
var typeorm_1 = require("typeorm");
var ShortenedNamingStrategy = /** @class */ (function (_super) {
    __extends(ShortenedNamingStrategy, _super);
    function ShortenedNamingStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortenedNamingStrategy.prototype.eagerJoinRelationAlias = function (alias, propertyPath) {
        var path = propertyPath
            .split(".")
            .map(function (p) { return p.substring(0, 2); })
            .join("_");
        var out = alias + "_" + path;
        var match = out.match(/_/g) || [];
        return out + match.length;
    };
    return ShortenedNamingStrategy;
}(typeorm_1.DefaultNamingStrategy));
exports.ShortenedNamingStrategy = ShortenedNamingStrategy;
//# sourceMappingURL=naming-strategy.js.map