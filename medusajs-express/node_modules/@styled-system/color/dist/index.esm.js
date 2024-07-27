import { system } from '@styled-system/core';
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
export var color = system(config);
export default color;
