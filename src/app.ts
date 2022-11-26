import './app/connection/mongoose';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import { CustomException } from './app/exceptions/CustomException';

const app = express();
app.use(express.json());
app.use(routes);

app.use(
  (
    error: CustomException | Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error instanceof CustomException) {
      return res.status(error.code).json({
        message: error.message,
        code: error.code,
      });
    }

    console.error(error.message || 'Unexpected error.');

    return res.status(500).json({
      code: 500,
      message: 'Unexpected error',
    });
  }
);

export { app };
