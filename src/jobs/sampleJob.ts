import { Job } from "bullmq";
import { IJob } from "../types/bullMqJobDefinitions";

export default class SampleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle = () => {
    console.log("handle");
  };
  failed = (job?: Job) => {
    if (job) {
      console.log("job");
    }
  };
}
