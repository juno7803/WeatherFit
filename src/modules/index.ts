import {combineReducers} from 'redux';
import weather from './weather'

const rootReducer = combineReducers({
    weather
});
// store에 weather 말고 다른 reducer를 만들면 합치기 위해 만든 코드

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;