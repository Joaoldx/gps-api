import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routers';
import { dataSource } from '../typeorm';
import '@shared/infra/typeorm';
import '@shared/infra/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

dataSource.initialize().then(() => {
  app.listen(3333, () => {
    console.log('Server started on port 3333!');
  });
});
