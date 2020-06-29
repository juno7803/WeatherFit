import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { weatherTYPE } from '../../api/openweather';

export type WeatherAction= ActionType<typeof actions>;

export type WeatherState = {
  weatherInfo: {
    loading: boolean;
    error: Error | null;
    data: weatherTYPE | null;
  };
};