import { Request, Response } from "express";

const pingCheck = (_: Request, res: Response) => {
  res.status(200).json({
    message: "pin checked",
  });
};

export default pingCheck;
