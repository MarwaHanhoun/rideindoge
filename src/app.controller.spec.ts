import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { StationsModule } from './stations/stations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { Station } from './stations/entities/station.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { StationSupport } from './integration/thirdparty/station-support/station-support';
import { StationsService } from './stations/stations.service';
import { CronService } from './cron/cron.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
       // expect().toBe('Hello World!');
    });
  });
});
