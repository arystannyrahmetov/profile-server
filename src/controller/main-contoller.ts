import {Controller, Get } from 'routing-controllers';
import 'reflect-metadata';
import dotenv from "dotenv";

dotenv.config();

@Controller()
export class MainController {
    @Get('/')
    getAll () {
        return 'CD test...';
    }
}