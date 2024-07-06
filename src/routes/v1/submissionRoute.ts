import express from "express";

import { addSubmission } from "../../controllers/submissionController";
import { createSubmissionSchema } from "../../dtos/createSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter = express.Router();

submissionRouter.post("/", validate(createSubmissionSchema), addSubmission);

export default submissionRouter;
