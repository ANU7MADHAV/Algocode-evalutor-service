"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pingCheck = (_, res) => {
    res.status(200).json({
        message: "pin checked",
    });
};
exports.default = pingCheck;
