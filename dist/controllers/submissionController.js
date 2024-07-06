"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubmission = void 0;
const addSubmission = (req, res) => {
    const submissionDto = req.body;
    console.log(submissionDto);
    res.send(submissionDto);
};
exports.addSubmission = addSubmission;
