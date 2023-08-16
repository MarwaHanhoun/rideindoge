import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StationSupport {
  async fetchStationsData(): Promise<any> {
    const response = await axios.get(
      'https://bts-status.bicycletransit.workers.dev/phl',
    );
    return response.data;
  }

  async fetchWeatherData(city: string): Promise<any> {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: '8d0d47b11e58dbba7e216e91c67c1cd9',
        },
      },
    );
    return response.data;
  }
}
