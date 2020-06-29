import {createAsyncAction} from 'typesafe-actions';
import { weatherTYPE }  from '../../api/openweather';
import { AxiosError } from 'axios';

export const GET_WEATHERS = 'GET_WEATHERS';
export const GET_WEATHERS_SUCCESS = 'GET_WEATHERS_SUCCESS';
export const GET_WEATHERS_ERROR = 'GET_WEATHERS_ERROR';

export const getWeathersAsync = createAsyncAction(
    GET_WEATHERS,
    GET_WEATHERS_SUCCESS,
    GET_WEATHERS_ERROR
)<undefined,weatherTYPE,AxiosError>();