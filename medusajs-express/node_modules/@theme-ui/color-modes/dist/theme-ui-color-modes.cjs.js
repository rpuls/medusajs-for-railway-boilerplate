'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-color-modes.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-color-modes.cjs.dev.js");
}
