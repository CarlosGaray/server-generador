import * as express from 'express';
import { findAll, findOneCycle, findOneCode, findAllCodeSection } from '../controllers/schedule.controller';

export const scheduleRouter = express.Router();

scheduleRouter.use(express.json());

scheduleRouter.post('/array', findAllCodeSection);
scheduleRouter.get('/', findAll);
scheduleRouter.get('/:id', findOneCycle);
scheduleRouter.get('/code/:code', findOneCode);