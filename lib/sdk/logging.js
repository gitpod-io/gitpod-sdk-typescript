"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noopLogger = void 0;
exports.consoleLogger = consoleLogger;
exports.debug = debug;
exports.warn = warn;
exports.error = error;
exports.noopLogger = {
    debug() { },
};
function consoleLogger(level = "info") {
    const threshold = logLevelValue(level);
    const write = (entryLevel, message, fields) => {
        if (logLevelValue(entryLevel) < threshold) {
            return;
        }
        const suffix = fields && Object.keys(fields).length > 0 ? ` ${formatFields(fields)}` : "";
        const line = `${entryLevel.toUpperCase()} ${message}${suffix}`;
        if (entryLevel === "error") {
            console.error(line);
            return;
        }
        if (entryLevel === "warn") {
            console.warn(line);
            return;
        }
        console.error(line);
    };
    return {
        debug: (message, fields) => write("debug", message, fields),
        info: (message, fields) => write("info", message, fields),
        warn: (message, fields) => write("warn", message, fields),
        error: (message, fields) => write("error", message, fields),
    };
}
function debug(logger, message, fields) {
    logger.debug(message, removeEmptyFields(fields));
}
function warn(logger, message, fields) {
    logger.warn?.(message, removeEmptyFields(fields));
}
function error(logger, message, fields) {
    logger.error?.(message, removeEmptyFields(fields));
}
function logLevelValue(level) {
    switch (level) {
        case "debug":
            return 10;
        case "info":
            return 20;
        case "warn":
            return 30;
        case "error":
            return 40;
    }
}
function removeEmptyFields(fields) {
    if (!fields) {
        return undefined;
    }
    const out = {};
    for (const [key, value] of Object.entries(fields)) {
        if (value === undefined || value === null || value === "") {
            continue;
        }
        out[key] = value;
    }
    return Object.keys(out).length > 0 ? out : undefined;
}
function formatFields(fields) {
    return Object.entries(fields)
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => `${key}=${formatField(value)}`)
        .join(" ");
}
function formatField(value) {
    if (typeof value === "string") {
        return JSON.stringify(value);
    }
    if (typeof value === "bigint") {
        return value.toString();
    }
    return JSON.stringify(value);
}
