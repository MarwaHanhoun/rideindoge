import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StationSupport } from './integration/thirdparty/station-support/station-support';
import { HttpModule } from '@nestjs/axios';
import { StationsModule } from './stations/stations.module';
import { StationsService } from './stations/stations.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './stations/entities/station.entity';
import { CronService } from './cron/cron.service';
import ormconfig from '../ormconfig';

@Module({
  controllers: [AppController],
  imports: [
    HttpModule,
    StationsModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Station]),
    ScheduleModule.forRoot(),
  ],
  providers: [StationSupport, StationsService, CronService],
})
export class AppModule {}
