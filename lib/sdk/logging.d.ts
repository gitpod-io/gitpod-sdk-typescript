export type LogFields = Record<string, unknown>;
export interface Logger {
    debug(message: string, fields?: LogFields): void;
    info?(message: string, fields?: LogFields): void;
    warn?(message: string, fields?: LogFields): void;
    error?(message: string, fields?: LogFields): void;
}
export declare const noopLogger: Logger;
export type ConsoleLogLevel = "debug" | "info" | "warn" | "error";
export declare function consoleLogger(level?: ConsoleLogLevel): Logger;
export declare function debug(logger: Logger, message: string, fields?: LogFields): void;
export declare function warn(logger: Logger, message: string, fields?: LogFields): void;
export declare function error(logger: Logger, message: string, fields?: LogFields): void;
