import { injectable, inject } from 'tsyringe';
import { ICheckinRepository } from '../domain/repositories/ICheckinRepository';
import { ICheckin } from '../domain/models/ICheckin';

@injectable()
export default class CreateCheckinService {
  constructor(
    @inject('UsersRepository')
    private checkinRepository: ICheckinRepository,
  ) {}

  public async execute({
    id,
    name,
    cpf,
    date,
    type,
    description,
  }: ICheckin): Promise<ICheckin | null> {
    const checkin = await this.checkinRepository.create({
      id,
      name,
      cpf,
      date,
      type,
      description,
    });

    return checkin;
  }
}
