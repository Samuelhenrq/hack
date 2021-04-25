import express from "express";
import logger from "morgan";

import aulaRouter from "./routes/aula.route";
import hackathonRouter from "./routes/hackathon.route";

class App{

    constructor(){
        this.app = express();
        this.initMiddleware();
        this.routes();
    }

    initMiddleware(){
        this.app.use(express.json());
        this.app.use(logger("dev"));
    }

    routes(){
        this.app.use("/stefanini", hackathonRouter);
        this.app.use("/stefanini", aulaRouter);
    }

    dataBase(){

    }
}

export default new App().app;