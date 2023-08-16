import { Test, TestingModule } from '@nestjs/testing';
import { CronService } from './cron.service';
import { AppController } from '../app.controller';
import { HttpModule } from '@nestjs/axios';
import { StationsModule } from '../stations/stations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../../ormconfig';
import { Station } from '../stations/entities/station.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { StationSupport } from '../integration/thirdparty/station-support/station-support';
import { StationsService } from '../stations/stations.service';

describe('CronService', () => {
  let cronService: CronService;

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

    cronService = module.get<CronService>(CronService);
  });

  it('should be defined', () => {
    expect(cronService).toBeDefined();
  });
});
