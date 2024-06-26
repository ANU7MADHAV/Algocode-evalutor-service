import express from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorkers";

const app = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *${serverConfig.PORT}`);
  SampleWorker("SampleQueue");
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Sanket",
      company: "Microsoft",
      position: "SDE 2 L61",
      locatiion: "Remote | BLR | Noida",
    },
    2
  );
});
