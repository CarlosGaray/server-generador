import * as mongodb from 'mongodb';
import { Schedule } from './models/schedule';

export const collections: {
    schedules?: mongodb.Collection<Schedule>;
} = {};

export async function connectToDataBase(uri: string) {
    try {
        const client = new mongodb.MongoClient(uri);

        const db = client.db("generador");

        const schedulesConnection = db.collection<Schedule>('horarios');

        collections.schedules = schedulesConnection;


        console.log("Connected to MongoDB!");

    } catch(error) {
        console.log(error);
    }
}