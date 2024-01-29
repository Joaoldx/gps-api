import { injectable, inject } from 'tsyringe';
import { ICheckinRepository } from '../domain/repositories/ICheckinRepository';
import { ICheckin } from '../domain/models/ICheckin';
import { ICreateCheckin } from '../domain/models/ICreateCheckin';

@injectable()
export default class CreateCheckinService {
  constructor(
    @inject('CheckinRepository')
    private checkinRepository: ICheckinRepository,
  ) {}

  public async execute({
    name,
    cpf,
    date,
    type,
    description,
  }: ICreateCheckin): Promise<ICheckin | null> {
    const checkin = await this.checkinRepository.create({
      name,
      cpf,
      date,
      type,
      description,
    });

    return checkin;
  }
}
