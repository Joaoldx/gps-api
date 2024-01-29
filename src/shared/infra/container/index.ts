import { container } from 'tsyringe';

import { CheckinRepository } from '@modules/checkin/infra/typeorm/repositories/CheckinRepository';
import { ICheckinRepository } from '@modules/checkin/domain/repositories/ICheckinRepository';

container.registerSingleton<ICheckinRepository>(
  'CheckinRepository',
  CheckinRepository,
);
