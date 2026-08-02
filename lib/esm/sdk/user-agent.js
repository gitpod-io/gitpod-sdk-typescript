export const SDK_VERSION = "1.0.1";
export function sdkUserAgent(prefix) {
    const token = `ona-ts-sdk/${sanitizeUserAgentToken(SDK_VERSION)} (language=typescript; layer=sdk)`;
    const cleanPrefix = prefix?.trim();
    return cleanPrefix ? `${cleanPrefix} ${token}` : token;
}
function sanitizeUserAgentToken(value) {
    const cleaned = value.trim().replace(/[^A-Za-z0-9._+~-]/g, "-");
    return cleaned || "dev";
}
