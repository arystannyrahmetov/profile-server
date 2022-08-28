import { Controller, Get, Param } from 'routing-controllers';
import {MongoClient} from "mongodb";
import 'reflect-metadata';
import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@maincluster.z1mycci.mongodb.net/?retryWrites=true&w=majority`;
// @ts-ignore
const client = new MongoClient(uri, { "useNewUrlParser": true, "useUnifiedTopology": true });

@Controller()
export class PostController {
    @Get('/posts/:id')
    getOne (@Param('id') id: number) {
        return 'This action returns post #' + id;
    }
    @Get('/posts')
    async getAll () {
        //let posts = await client.db(confidential.database).collection(confidential.collection).find().toArray();
        let posts = await client.db(process.env.DATABASE).collection(process.env.POSTSCOLLECTION ?? "posts").aggregate([{
            $project: {
                _id: {
                    $toString: "$_id"
                },
                title: 1,
                postText: 1,
                author: 1,
                date: 1
            }
        }]).toArray();
        return posts;
    }
}