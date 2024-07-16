'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-css.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-css.cjs.dev.js");
}
