import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCheckinService from '@modules/checkin/services/ListCheckinService';
import CreateCheckinService from '@modules/checkin/services/CreateCheckinService';

export default class CheckinController {
  public async index(request: Request, response: Response) {
    const findAll = container.resolve(ListCheckinService);

    const checkins = await findAll.execute();

    return response.json(checkins);
  }

  public async create(request: Request, response: Response) {
    const { name, cpf, date, type, description } = request.body;

    const createCheckin = container.resolve(CreateCheckinService);

    const checkin = await createCheckin.execute({
      name,
      cpf,
      date,
      type,
      description,
    });

    return response.json(checkin);
  }
}
