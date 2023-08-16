import { Injectable } from '@nestjs/common';
import prismaService from '../prisma.service';
import { DateTime } from 'luxon';
import { InjectRepository } from '@nestjs/typeorm';
import { Station } from './entities/station.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { StationSupport } from '../integration/thirdparty/station-support/station-support';
import { StationDto } from './dto/stationDto';

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station)
    private stationRepository: Repository<Station>,
    private readonly stationSupport: StationSupport,
  ) {}

  async ingestStationData(): Promise<void> {
    const stations = await this.stationSupport.fetchStationsData();
    const existingStations = await this.checkData(stations.last_updated);
    if (existingStations.length == 0) {
      for (const station of stations.features) {
        const weather = await this.stationSupport.fetchWeatherData(
          station.properties.addressCity,
        );

        await prismaService.station.create({
          data: {
            city: station.properties.addressCity,
            kioskId: station.properties.kioskId,
            lastUpdated: stations.last_updated,
            name: station.properties.name,
            properties: station.properties,
            stationId: station.properties.id,
            weather: weather,
          },
        });
      }
    }
  }

  async getStationByCondition(
    condition: FindOptionsWhere<Station>,
    page: number = 1,
    limit: number = 10,
  ): Promise<StationDto> {
    const stations = await this.stationRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      where: condition,
    });
    if (null == stations || stations.length == 0) {
      return;
    }
    return {
      at: stations[0].lastUpdated,
      stations: stations.map((station) => ({
        properties: station.properties,
        weather: station.weather,
      })),
    };
  }

  async checkData(lastUpdated: DateTime): Promise<Station[]> {
    return await this.stationRepository.findBy({ lastUpdated: lastUpdated });
  }
}
