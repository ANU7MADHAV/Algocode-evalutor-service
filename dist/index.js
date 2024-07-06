"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bullBoardUiConfig_1 = __importDefault(require("./config/bullBoardUiConfig"));
const serverConfig_1 = __importDefault(require("./config/serverConfig"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.use("/dashboard", bullBoardUiConfig_1.default.getRouter());
app.listen(serverConfig_1.default.PORT, () => {
    console.log(`Server started at *${serverConfig_1.default.PORT}`);
    console.log(`BullBoard is running on: http://localhost:${serverConfig_1.default.PORT}/dashboard`);
});
