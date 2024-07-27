"use strict";

exports.__esModule = true;
exports["default"] = exports.background = void 0;

var _core = require("@styled-system/core");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = (0, _core.system)(config);
exports.background = background;
var _default = background;
exports["default"] = _default;