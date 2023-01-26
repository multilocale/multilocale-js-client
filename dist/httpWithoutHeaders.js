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

// src/httpWithoutHeaders.mjs
var httpWithoutHeaders_exports = {};
__export(httpWithoutHeaders_exports, {
  default: () => httpWithoutHeaders
});
module.exports = __toCommonJS(httpWithoutHeaders_exports);
var import_isomorphic_fetch = __toESM(require("isomorphic-fetch"), 1);

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

// src/httpWithoutHeaders.mjs
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
