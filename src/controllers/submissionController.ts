import { Request, Response } from "express";

import { CreateSubmissionDto } from "../dtos/createSubmissionDto";

export const addSubmission = (req: Request, res: Response) => {
  const submissionDto = req.body as CreateSubmissionDto;

  console.log(submissionDto);

  res.send(submissionDto);
};
