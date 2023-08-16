import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CronService } from './cron/cron.service';
import { StationsService } from './stations/stations.service';
import { DateTime } from 'luxon';
import { StationDto } from './stations/dto/stationDto';

@Controller('/api/v1')
export class AppController {
  constructor(
    private readonly taskService: CronService,
    private readonly stationService: StationsService,
  ) {}

  @Post('/indego-data-fetch-and-store-it-db')
  async runCron(): Promise<void> {
    console.log('trigger the job manually');
    await this.taskService.schedulerIngestData();
  }

  @Get('/stations')
  async getStationByDate(
    @Query('at') at: DateTime,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<StationDto> {
    return await this.stationService.getStationByCondition(
      {
        lastUpdated: at,
      },
      page,
      limit,
    );
  }

  @Get('/stations/:kioskId')
  async getStationByKioskAndDate(
    @Param('kioskId') kioskId: number,
    @Query('at') at: DateTime,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<StationDto> {
    return await this.stationService.getStationByCondition(
      {
        lastUpdated: at,
        kioskId: kioskId,
      },
      page,
      limit,
    );
  }
}
