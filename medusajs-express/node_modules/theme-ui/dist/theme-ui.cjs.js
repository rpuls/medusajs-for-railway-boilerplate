'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui.cjs.prod.js");
} else {
  module.exports = require("./theme-ui.cjs.dev.js");
}
