"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK_VERSION = void 0;
exports.sdkUserAgent = sdkUserAgent;
exports.SDK_VERSION = "1.0.1";
function sdkUserAgent(prefix) {
    const token = `ona-ts-sdk/${sanitizeUserAgentToken(exports.SDK_VERSION)} (language=typescript; layer=sdk)`;
    const cleanPrefix = prefix?.trim();
    return cleanPrefix ? `${cleanPrefix} ${token}` : token;
}
function sanitizeUserAgentToken(value) {
    const cleaned = value.trim().replace(/[^A-Za-z0-9._+~-]/g, "-");
    return cleaned || "dev";
}
