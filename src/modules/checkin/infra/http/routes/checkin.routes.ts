import { Router } from 'express';
import CheckinController from '../controllers/CheckinController';
import { Joi, Segments, celebrate } from 'celebrate';

const chekcinRouter = Router();
const checkiController = new CheckinController();

chekcinRouter.get('/', checkiController.index);

chekcinRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cpf: Joi.string().required(),
      date: Joi.string().required(),
      type: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  checkiController.create,
);

export default chekcinRouter;
