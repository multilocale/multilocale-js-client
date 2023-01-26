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

// src/accessToken.mjs
var accessToken_exports = {};
__export(accessToken_exports, {
  getAccessToken: () => getAccessToken,
  getAccessTokenPayload: () => getAccessTokenPayload,
  isAccessTokenExpired: () => isAccessTokenExpired,
  setAccessToken: () => setAccessToken,
  setAccessTokenCallback: () => setAccessTokenCallback,
  setAccessTokenCallbackForMultilocaleClient: () => setAccessTokenCallbackForMultilocaleClient,
  setAccessTokenForMultilocaleClient: () => setAccessTokenForMultilocaleClient
});
module.exports = __toCommonJS(accessToken_exports);
var import_b64_lite = require("b64-lite");
var accessToken = null;
var callback = null;
function getAccessTokenPayload() {
  let payload;
  if (accessToken) {
    try {
      payload = JSON.parse((0, import_b64_lite.atob)(accessToken.split(".")[1]));
    } catch (error) {
      console.error(error);
    }
  }
  return payload;
}
function isAccessTokenExpired() {
  let isExpired = true;
  try {
    let payload = getAccessTokenPayload();
    const now = Math.floor(Date.now() / 1e3);
    if (payload.exp > now) {
      isExpired = false;
    }
  } catch (error) {
    console.error(error);
  }
  return isExpired;
}
function getAccessToken() {
  return accessToken;
}
function setAccessToken(accessToken_) {
  const newAccessToken = accessToken_;
  if (accessToken !== newAccessToken) {
    accessToken = newAccessToken;
    if (callback) {
      callback(newAccessToken);
    }
  }
}
function setAccessTokenCallback(callback_) {
  callback = callback_;
}
var setAccessTokenForMultilocaleClient = setAccessToken;
var setAccessTokenCallbackForMultilocaleClient = setAccessTokenCallback;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAccessToken,
  getAccessTokenPayload,
  isAccessTokenExpired,
  setAccessToken,
  setAccessTokenCallback,
  setAccessTokenCallbackForMultilocaleClient,
  setAccessTokenForMultilocaleClient
});
