"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServerError = exports.handleJsonfileError = exports.handleError = void 0;
const handleError = (res, error, status = 400) => {
    console.error(error.message);
    res.status(status).send(error.message);
};
exports.handleError = handleError;
const handleJsonfileError = (error) => {
    if (error instanceof Error) {
        console.error(error);
        return Promise.reject(error);
    }
    console.error("Non-error object:", error);
    return Promise.reject(new Error("Something went wrong!"));
};
exports.handleJsonfileError = handleJsonfileError;
const handleServerError = (error, req, res, next) => {
    console.error(error.message);
    res.status(500).send(error.message);
};
exports.handleServerError = handleServerError;
