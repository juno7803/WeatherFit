import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {WeatherAction} from './types';
import {getWeathers} from '../../api/openweather';
import {getWeathersAsync} from './actions';

//redux-thunk : 리덕스 미들웨어 사용
//RootState 생각하기(상태에 대한 타입)
export function getWeatherThunk(): ThunkAction<void,RootState,null,WeatherAction>{
    return async dispatch=>{
        const {request,success,failure} = getWeathersAsync;
        dispatch(request());
        try{
            const weatherInfo = await getWeathers(); // api/openweather.ts의 함수 api로부터 정보 받아옴
            dispatch(success(weatherInfo));
        }catch(e){
            dispatch(failure(e));
        }
    };
}

// Thunck Action 의 Generics <TReturnType, TState, TEXtraThunkArg, TBasicAction>
// TReturnType: thunk 함수에서 반환하는 값의 타입을 설정합니다.
// TState: 스토어의 상태에 대한 타입을 설정합니다.
// TExtraThunkArg: redux-thunk 미들웨어의 Extra Argument의 타입을 설정합니다.
// TBasicAction: dispatch 할 수 있는 액션들의 타입을 설정합니다.