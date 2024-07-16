"use strict";

exports.__esModule = true;
exports["default"] = exports.createShouldForwardProp = exports.props = void 0;

var _memoize = _interopRequireDefault(require("@emotion/memoize"));

var _isPropValid = _interopRequireDefault(require("@emotion/is-prop-valid"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var all = (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.typography, _styledSystem.color, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.border, _styledSystem.background, _styledSystem.position, _styledSystem.grid, _styledSystem.shadow, _styledSystem.buttonStyle, _styledSystem.textStyle, _styledSystem.colorStyle);
var props = all.propNames;
exports.props = props;

var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return (0, _memoize["default"])(function (prop) {
    return (0, _isPropValid["default"])(prop) && !regex.test(prop);
  });
};

exports.createShouldForwardProp = createShouldForwardProp;

var _default = createShouldForwardProp(props);

exports["default"] = _default;