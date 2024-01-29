import { DataSource } from 'typeorm';

import Checkin from '@modules/checkin/infra/typeorm/entities/Checkin';

import { AddCheckinTable1706493677316 } from './migrations/1706493677316-AddCheckinTable';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gpsapi',
  entities: [Checkin],
  migrations: [AddCheckinTable1706493677316],
});
