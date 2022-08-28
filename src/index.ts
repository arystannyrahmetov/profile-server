import { createExpressServer, useExpressServer } from "routing-controllers";
import { UserController } from './controller/user-controller';
import express from 'express';
import dotenv from 'dotenv';
import { PostController } from "./controller/post-contoller";
const cors = require('cors');

const app = express();
dotenv.config();

useExpressServer(app, {
    cors: {
        "origin": "https://arystannyrahmetov.github.io",
    },
    controllers: [UserController, PostController]
})
const port = process.env.PORT;

app.listen(port, () => console.log(`Running on port ${port}`));