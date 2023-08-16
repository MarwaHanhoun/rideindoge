import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StationsService } from '../stations/stations.service';

@Injectable()
export class CronService {
  constructor(private readonly station: StationsService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async schedulerIngestData() {
    {
      console.log(`data ingested at ${new Date()}`);
      await this.station.ingestStationData();
    }
  }
}
