'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-parse-props.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-parse-props.cjs.dev.js");
}
