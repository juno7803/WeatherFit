import {createReducer} from 'typesafe-actions';
import {WeatherState,WeatherAction} from './types';
import {GET_WEATHERS,GET_WEATHERS_SUCCESS,GET_WEATHERS_ERROR} from './actions';

const initialState: WeatherState = {
    weatherInfo:{
        loading: false,
        error: null,
        data: null
    }
};

const weather = createReducer<WeatherState,WeatherAction>(initialState,{
    [GET_WEATHERS]: state =>({
        ...state,
        weatherInfo: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_WEATHERS_SUCCESS]: (state,action)=>({
        ...state,
        weatherInfo: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_WEATHERS_ERROR]: (state,action)=>({
        ...state,
        weatherInfo:{
            loading: false,
            error: action.payload,
            data:null
        }
    })
});

export default weather;