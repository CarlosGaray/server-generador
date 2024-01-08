import express from 'express';
import cors from 'cors';
import { MONGO_URI_CLOUD, PORT } from './keys';
import { connectToDataBase } from './database';
import { scheduleRouter } from './routes/schedule.routes';

connectToDataBase(MONGO_URI_CLOUD)
    .then(() => {
        const app = express();

        app.use(cors());

        app.use(express.json());
        app.use("/schedules", scheduleRouter);

        app.listen(PORT, () => {
            console.log("Server is running on", PORT);
        });
    })
    .catch(error => console.log(error));