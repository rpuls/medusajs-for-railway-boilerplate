'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-css-utils.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-css-utils.cjs.dev.js");
}
