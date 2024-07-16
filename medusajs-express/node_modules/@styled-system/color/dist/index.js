"use strict";

exports.__esModule = true;
exports["default"] = exports.color = void 0;

var _core = require("@styled-system/core");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = (0, _core.system)(config);
exports.color = color;
var _default = color;
exports["default"] = _default;