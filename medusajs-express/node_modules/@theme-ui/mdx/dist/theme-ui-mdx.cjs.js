'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-mdx.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-mdx.cjs.dev.js");
}
