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

// src/uuid.mjs
var uuid_exports = {};
__export(uuid_exports, {
  default: () => uuid
});
module.exports = __toCommonJS(uuid_exports);
function uuid() {
  return "xxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, (c) => {
    let r = Math.random() * 16 | 0;
    let v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
