import { ICheckin } from '@modules/checkin/domain/models/ICheckin';
import { ICheckinRepository } from '@modules/checkin/domain/repositories/ICheckinRepository';
import { dataSource } from '@shared/infra/typeorm';
import Checkin from '../entities/Checkin';
import { Repository } from 'typeorm';

export class CheckinRepository implements ICheckinRepository {
  private ormRepository: Repository<Checkin>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Checkin);
  }

  public async findAll(): Promise<ICheckin[]> {
    return await this.ormRepository.find();
  }
  public async findById(id: string): Promise<ICheckin | null> {
    const checkin = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return checkin;
  }
  public async create({
    id,
    name,
    cpf,
    date,
    type,
    description,
  }: ICheckin): Promise<ICheckin | null> {
    const checkin = await this.ormRepository.create({
      id,
      name,
      cpf,
      date,
      type,
      description,
    });

    await this.save(checkin);

    return checkin;
  }
  public async save({
    id,
    name,
    cpf,
    date,
    type,
    description,
  }: ICheckin): Promise<ICheckin | null> {
    return await this.ormRepository.save({
      id,
      name,
      cpf,
      date,
      type,
      description,
    });
  }
}
