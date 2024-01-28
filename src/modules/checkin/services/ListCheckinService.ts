import { injectable, inject } from 'tsyringe';
import { ICheckinRepository } from '../domain/repositories/ICheckinRepository';
import { ICheckin } from '../domain/models/ICheckin';

@injectable()
export default class ListCheckinService {
  constructor(
    @inject('CheckinRepository')
    private checkinRepository: ICheckinRepository,
  ) {}

  public async execute(): Promise<ICheckin[]> {
    const checkins = await this.checkinRepository.findAll();

    return checkins;
  }
}
