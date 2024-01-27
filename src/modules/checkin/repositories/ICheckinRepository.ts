import { ICheckin } from '../domain/ICheckin';

export interface ICheckinRepository {
  findAll(): Promise<ICheckin[]>;
  findById(id: string): Promise<ICheckin>;
  create(data: ICheckin): Promise<ICheckin>;
  save(data: ICheckin): Promise<ICheckin>;
}
