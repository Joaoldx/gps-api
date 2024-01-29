import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routers';
import { dataSource } from '../typeorm';
import AppError from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import '@shared/infra/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

dataSource.initialize().then(() => {
  app.listen(3333, () => {
    console.log('Server started on port 3333!');
  });
});
