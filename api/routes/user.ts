import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";

class User {

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
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void {

        this.express.post("/users/login", (req, res, next) => {
            this.logger.info("url:" + req.url);
            res.json({"code": 20000, "data": {"accessToken": "admin-token"}});
        });

        this.express.post("/users/logout", (req, res, next) => {
            this.logger.info("url:" + req.url);
            res.json({"code":20000});
        });

        this.express.post('/users/info', (req, res, next) => {
            this.logger.info("url:" + req.url);
            res.json({
                "code": 20000,
                "data": {
                    "user": {
                        "id": 0,
                        "username": "admin",
                        "password": "any",
                        "name": "Super Admin",
                        "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                        "introduction": "I am a super administrator",
                        "email": "admin@test.com",
                        "phone": "1234567890",
                        "roles": ["admin"]
                    }
                }
            });
        });

        // request to get all the users
        this.express.get("/users", (req, res, next) => {
            this.logger.info("url:" + req.url);
            res.json(this.users);
        });

        // request to get all the users by userName
        this.express.get("/users/:userName", (req, res, next) => {
            this.logger.info("url:::::" + req.url);
            const user = this.users.filter(function (user) {
                if (req.params.userName === user.userName) {
                    return user;
                }
            });
            res.json(user);
        });

        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.express.post("/user", (req, res, next) => {
            this.logger.info("url:::::::" + req.url);
            this.users.push(req.body.user);
            res.json(this.users);
        });
    }
}

export default new User().express;