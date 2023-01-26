var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/refreshAccessToken.mjs
var refreshAccessToken_exports = {};
__export(refreshAccessToken_exports, {
  default: () => refreshAccessToken
});
module.exports = __toCommonJS(refreshAccessToken_exports);
var import_b64_lite3 = require("b64-lite");
var import_isomorphic_fetch = __toESM(require("isomorphic-fetch"), 1);

// src/accessToken.mjs
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

// src/getMultilocaleUrl.mjs
function getMultilocaleUrl() {
  return "https://www.multilocale.com";
}
var getMultilocaleUrl_default = getMultilocaleUrl;

// src/refreshToken.mjs
var import_b64_lite2 = require("b64-lite");
var refreshToken = null;
function isRefreshTokenExpired() {
  let isExpired = true;
  try {
    if (refreshToken) {
      let payload = JSON.parse((0, import_b64_lite2.atob)(refreshToken.split(".")[1]));
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

// src/refreshAccessToken.mjs
async function refreshAccessToken() {
  let accessToken2 = getAccessToken();
  if (accessToken2 && isAccessTokenExpired()) {
    if (isRefreshTokenExpired()) {
      if (typeof window !== "undefined") {
        window.open("/logout");
      }
      throw new Error("refresh token has expired");
    } else {
      let refreshToken2 = getRefreshToken();
      const url = getMultilocaleUrl_default() + "/api/refresh-access-token";
      let result = await (0, import_isomorphic_fetch.default)(url, {
        method: "POST",
        headers: {
          Authorization: "Token " + (0, import_b64_lite3.btoa)(refreshToken2)
        }
      }).then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw error;
          });
        } else {
          return response.json();
        }
      }).catch(console.log);
      accessToken2 = result.accessToken;
      refreshToken2 = result.refreshToken;
      setAccessToken(accessToken2);
      setRefreshToken(refreshToken2);
    }
  }
  return accessToken2;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
