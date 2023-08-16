import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { Station } from './entities/station.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationSupport } from '../integration/thirdparty/station-support/station-support';
import { ScheduleModule } from '@nestjs/schedule';
import ormconfig from '../../ormconfig';
import { CronService } from '../cron/cron.service';

@Module({
  controllers: [],
  providers: [StationsService, StationSupport, CronService],
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Station]),
    ScheduleModule.forRoot(),
  ],
})
export class StationsModule {}
