import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.json('Hello world');
});

app.listen(3333, () => {
  console.log('Servidor inicializou na porta 3333');
});
