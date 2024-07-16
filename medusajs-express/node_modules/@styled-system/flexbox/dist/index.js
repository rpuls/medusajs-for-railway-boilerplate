"use strict";

exports.__esModule = true;
exports["default"] = exports.flexbox = void 0;

var _core = require("@styled-system/core");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = (0, _core.system)(config);
exports.flexbox = flexbox;
var _default = flexbox;
exports["default"] = _default;