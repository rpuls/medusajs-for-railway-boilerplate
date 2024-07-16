"use strict";

exports.__esModule = true;
exports["default"] = exports.shadow = void 0;

var _core = require("@styled-system/core");

var shadow = (0, _core.system)({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
exports.shadow = shadow;
var _default = shadow;
exports["default"] = _default;