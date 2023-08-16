import { DateTime } from 'luxon';

export class StationDto {
  at: DateTime;
  stations: { properties: JSON; weather: JSON }[];
}
