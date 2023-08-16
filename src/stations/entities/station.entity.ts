import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DateTime } from 'luxon';

@Entity({ name: 'station' })
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stationId: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  kioskId: number;

  @Column('json')
  properties: JSON;

  @Column('json')
  weather: JSON;

  @Column('timestamptz')
  lastUpdated: DateTime;

  @Column('timestamptz')
  createdAt: DateTime;

  @Column('timestamptz')
  updatedAt: DateTime;
}
