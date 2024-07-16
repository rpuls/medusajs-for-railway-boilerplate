"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getRepository: function getRepository(repo) {
    return repo;
  },
  getCustomRepository: function getCustomRepository(repo) {
    return repo;
  },
  transaction: function transaction(isolationOrCb, cb) {
    if (typeof isolationOrCb === "string") {
      return cb(this);
    } else {
      return isolationOrCb(this);
    }
  }
};
exports["default"] = _default;