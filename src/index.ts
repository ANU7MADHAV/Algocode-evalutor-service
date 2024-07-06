import express from "express";

import bullBoardAdapter from "./config/bullBoardUiConfig";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/dashboard", bullBoardAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *${serverConfig.PORT}`);
  console.log(
    `BullBoard is running on: http://localhost:${serverConfig.PORT}/dashboard`
  );
});
