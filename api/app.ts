import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/routes";
import * as cors from 'cors';

const path = require('path');

class App {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    public users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {

        this.express.use(cors())

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));

        let staticPath;
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'dev') {
            // run under api folder
            staticPath = path.join(__dirname, "../my-app/dist/");
            console.log('dev', staticPath);
        } else {
            // run under publish folder
            staticPath = path.resolve(__dirname, 'dist');
            console.log('prod', staticPath);

        }
        this.express.use(express.static(staticPath));

    }

    private routes(): void {

        // user route
        this.express.use("/api", Routes);

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}

export default new App().express;