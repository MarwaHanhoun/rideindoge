import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'test',
  database: 'ride_indego',
  entities: ['dist/**/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
