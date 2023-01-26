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

// src/refreshToken.mjs
var refreshToken_exports = {};
__export(refreshToken_exports, {
  getRefreshToken: () => getRefreshToken,
  isRefreshTokenExpired: () => isRefreshTokenExpired,
  setRefreshToken: () => setRefreshToken,
  setRefreshTokenForMultilocaleClient: () => setRefreshTokenForMultilocaleClient
});
module.exports = __toCommonJS(refreshToken_exports);
var import_b64_lite = require("b64-lite");
var refreshToken = null;
function isRefreshTokenExpired() {
  let isExpired = true;
  try {
    if (refreshToken) {
      let payload = JSON.parse((0, import_b64_lite.atob)(refreshToken.split(".")[1]));
      const now = Math.floor(Date.now() / 1e3);
      if (payload.exp > now) {
        isExpired = false;
      }
    }
  } catch (error) {
    console.error(error);
  }
  return isExpired;
}
function getRefreshToken() {
  return refreshToken;
}
function setRefreshToken(refreshToken_) {
  refreshToken = refreshToken_;
}
var setRefreshTokenForMultilocaleClient = setRefreshToken;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getRefreshToken,
  isRefreshTokenExpired,
  setRefreshToken,
  setRefreshTokenForMultilocaleClient
});
