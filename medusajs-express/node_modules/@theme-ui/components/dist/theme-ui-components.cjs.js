'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-components.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-components.cjs.dev.js");
}
