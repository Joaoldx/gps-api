import { ICheckin } from '../models/ICheckin';
import { ICreateCheckin } from '../models/ICreateCheckin';

export interface ICheckinRepository {
  findAll(): Promise<ICheckin[]>;
  findById(id: string): Promise<ICheckin | null>;
  create(data: ICreateCheckin): Promise<ICheckin | null>;
  save(data: ICheckin): Promise<ICheckin | null>;
}
