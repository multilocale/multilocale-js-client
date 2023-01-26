var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/token.mjs
var token_exports = {};
__export(token_exports, {
  getToken: () => getToken,
  setToken: () => setToken,
  setTokenForMultilocaleClient: () => setTokenForMultilocaleClient
});
module.exports = __toCommonJS(token_exports);
var import_b64_lite = require("b64-lite");
var token = null;
function getToken() {
  return token;
}
function setToken(token_) {
  token = (0, import_b64_lite.btoa)(token_);
}
var setTokenForMultilocaleClient = setToken;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getToken,
  setToken,
  setTokenForMultilocaleClient
});
