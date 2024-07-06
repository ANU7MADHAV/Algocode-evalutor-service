import { z } from "zod";

export type CreateSubmissionDto = z.infer<typeof createSubmissionSchema>;

export const createSubmissionSchema = z
  .object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string(),
  })
  .strict();
