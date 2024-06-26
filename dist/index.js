"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const sampleQueueProducer_1 = __importDefault(require("./producers/sampleQueueProducer"));
const routes_1 = __importDefault(require("./routes"));
const sampleWorkers_1 = __importDefault(require("./workers/sampleWorkers"));
const app = (0, express_1.default)();
app.use("/api", routes_1.default);
app.listen(serverConfig_1.default.PORT, () => {
    console.log(`Server started at *${serverConfig_1.default.PORT}`);
    (0, sampleWorkers_1.default)("SampleQueue");
    (0, sampleQueueProducer_1.default)("SampleJob", {
        name: "Sanket",
        company: "Microsoft",
        position: "SDE 2 L61",
        locatiion: "Remote | BLR | Noida",
    }, 2);
});
