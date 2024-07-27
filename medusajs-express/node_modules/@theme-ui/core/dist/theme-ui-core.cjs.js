'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-core.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-core.cjs.dev.js");
}
