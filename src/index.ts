import express from "express";

import bullBoardAdapter from "./config/bullBoardUiConfig";
import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sampleWorkers";

const app = express();

app.use("/api", apiRouter);
app.use("/dashboard", bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *${serverConfig.PORT}`);
  console.log(
    `BullBoard is running on: http://localhost:${serverConfig.PORT}/dashboard`
  );
  SampleWorker("SampleQueue");
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Heloo",
      company: "Google",
      position: "SDE 2 L61",
      locatiion: "Remote | BLR | Noida",
    },
    2
  );
});
