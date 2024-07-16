'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-theme-provider.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-theme-provider.cjs.dev.js");
}
