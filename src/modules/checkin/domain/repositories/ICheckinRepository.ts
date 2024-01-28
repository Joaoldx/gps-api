import { ICheckin } from '../models/ICheckin';

export interface ICheckinRepository {
  findAll(): Promise<ICheckin[]>;
  findById(id: string): Promise<ICheckin | null>;
  create(data: ICheckin): Promise<ICheckin | null>;
  save(data: ICheckin): Promise<ICheckin | null>;
}
