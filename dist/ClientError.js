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

// src/ClientError.mjs
var ClientError_exports = {};
__export(ClientError_exports, {
  default: () => ClientError_default
});
module.exports = __toCommonJS(ClientError_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
