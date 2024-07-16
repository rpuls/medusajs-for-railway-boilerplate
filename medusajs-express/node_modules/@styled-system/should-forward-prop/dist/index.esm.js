import memoize from '@emotion/memoize';
import isPropValid from '@emotion/is-prop-valid';
import { compose, space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle } from 'styled-system';
var all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
export var props = all.propNames;
export var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return memoize(function (prop) {
    return isPropValid(prop) && !regex.test(prop);
  });
};
export default createShouldForwardProp(props);
