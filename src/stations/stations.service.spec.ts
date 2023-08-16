import { Test, TestingModule } from '@nestjs/testing';
import { StationsService } from './stations.service';
import { AppController } from '../app.controller';
import { HttpModule } from '@nestjs/axios';
import { StationsModule } from './stations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../../ormconfig';
import { Station } from './entities/station.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { StationSupport } from '../integration/thirdparty/station-support/station-support';
import { CronService } from '../cron/cron.service';

describe('StationsService', () => {
  let stationService: StationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [
        HttpModule,
        StationsModule,
        TypeOrmModule.forRoot(ormconfig),
        TypeOrmModule.forFeature([Station]),
        ScheduleModule.forRoot(),
      ],
      providers: [StationSupport, StationsService, CronService],
    }).compile();

    stationService = module.get<StationsService>(StationsService);
  });

  it('should be defined', () => {
    expect(stationService).toBeDefined();
  });
});
