import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {RootState} from '../modules';
import Weather from '../components/Weather';
import {getWeatherThunk} from '../modules/weather';

function WeatherLoader(){
  const {data,loading,error} = useSelector((state: RootState)=>state.weather.weatherInfo);
  const dispatch = useDispatch();

  const onClickWeather = () =>{
    dispatch(getWeatherThunk());
  }
//  dispatch(getWeatherThunk());

  return(
    <>
      <div onClick={onClickWeather}>클릭하세요!</div>
      {loading && <p style={{textAlign: 'center'}}>로딩중...</p>}
      {error && <p style={{textAlign: 'center'}}>에러 발생!</p>}
      {data &&<Weather weather={data.weather} temp={data.temp}/>}
    </>
  );
}

export default WeatherLoader;