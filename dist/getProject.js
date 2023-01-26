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

// src/getProject.mjs
var getProject_exports = {};
__export(getProject_exports, {
  default: () => getProject
});
module.exports = __toCommonJS(getProject_exports);

// src/http.mjs
var import_b64_lite4 = require("b64-lite");
var import_isomorphic_fetch3 = __toESM(require("isomorphic-fetch"), 1);

// src/ClientError.mjs
function ClientError(source) {
  if (source && typeof source === "object") {
    Object.keys(source).forEach((key) => {
      this[key] = source[key];
    });
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      this.message = "No Internet connection";
    } else if (source.message === "Failed to fetch") {
      this.message = "A network error occurred";
    } else if (source.message) {
      this.message = source.message;
    } else {
      if (source.status) {
        this.message += source.status;
        if (source.body) {
          this.message += " ";
        }
      }
      if (source.body) {
        if (typeof source.body === "object") {
          if (source.body.string) {
            this.message += source.body.string;
          } else {
            this.message += JSON.stringify(source.body);
          }
        } else {
          this.message += source.body;
        }
      }
    }
  } else if (source && typeof source === "string") {
    this.message = source;
  } else {
    this.message = "";
  }
  this.name = "ClientError";
}
ClientError.prototype = Error.prototype;
ClientError.prototype.toString = function() {
  return this.message;
};
var ClientError_default = ClientError;

// src/failure.mjs
function failure(response) {
  throw new ClientError_default(response);
}

// src/getMultilocaleUrl.mjs
function getMultilocaleUrl() {
  return "https://www.multilocale.com";
}
var getMultilocaleUrl_default = getMultilocaleUrl;

// src/httpWithoutHeaders.mjs
var import_isomorphic_fetch = __toESM(require("isomorphic-fetch"), 1);
function httpWithoutHeaders(url, customFailure) {
  return (0, import_isomorphic_fetch.default)(url).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw error;
      });
    } else {
      return response.json();
    }
  }).catch(customFailure || failure);
}

// src/refreshAccessToken.mjs
var import_b64_lite3 = require("b64-lite");
var import_isomorphic_fetch2 = __toESM(require("isomorphic-fetch"), 1);

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
      let result = await (0, import_isomorphic_fetch2.default)(url, {
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

// src/http.mjs
async function http(config, customFailure) {
  let accessToken2 = await refreshAccessToken();
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Accept = config.headers.Accept || "application/json";
  config.headers["Content-Type"] = config.headers["Content-Type"] || "application/json";
  config.headers.Authorization = config.headers.Authorization || "Token " + (0, import_b64_lite4.btoa)(accessToken2 || "");
  const url = getMultilocaleUrl_default() + "/api/" + config.url;
  return (0, import_isomorphic_fetch3.default)(url, {
    method: config.method,
    headers: config.headers,
    body: JSON.stringify(config.body)
  }).then((response) => {
    if (!response.ok) {
      if (response.url.startsWith("https://s3.amazonaws.com")) {
        return httpWithoutHeaders(response.url);
      } else {
        return response.json().then((error = {}) => {
          if (!error.status) {
            error.status = response.status;
          }
          if (!error.message) {
            error.message = response.statusText;
          }
          throw error;
        });
      }
    } else {
      return response.json();
    }
  }).catch((error) => {
    if (config.retries > 0) {
      const retried = config.retried || 0;
      console.info(
        `retrying http ${config.method} ${url} after error ${error.toString()} (${config.retries} retries left)`
      );
      let wait = 4 ** retried * 1e3;
      return new Promise((resolve) => setTimeout(resolve, wait)).then(
        () => http(
          {
            ...config,
            retries: config.retries - 1,
            retried: retried + 1
          },
          customFailure
        )
      );
    }
    if (customFailure) {
      return customFailure(error);
    } else {
      return failure(error);
    }
  });
}

// src/get.mjs
function get(config, customFailure) {
  config.method = "GET";
  return http(config, customFailure);
}

// src/getProject.mjs
function getProject(projectId) {
  let url = "projects/" + projectId;
  return get({ url }).catch((error) => {
    throw new Error(`Couldn't get project 
${error}`);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
