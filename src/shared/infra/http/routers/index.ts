import chekcinRouter from '@modules/checkin/infra/http/routes/checkin.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/checkin', chekcinRouter);

export default routes;
