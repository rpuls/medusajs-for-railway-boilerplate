"use strict";

exports.__esModule = true;
exports.colorStyle = exports.textStyle = exports.buttonStyle = exports["default"] = exports.variant = void 0;

var _core = require("@styled-system/core");

var _css = _interopRequireDefault(require("@styled-system/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return (0, _css["default"])((0, _core.get)(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return (0, _core.get)(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = (0, _core.createParser)(config);
  return parser;
};

exports.variant = variant;
var _default = variant;
exports["default"] = _default;
var buttonStyle = variant({
  key: 'buttons'
});
exports.buttonStyle = buttonStyle;
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
exports.textStyle = textStyle;
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});
exports.colorStyle = colorStyle;