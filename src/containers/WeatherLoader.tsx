import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import Weather from "../components/Weather";
import DaliyWeather from "../components/DaliyWeather";
import { getWeatherThunk } from "../modules/weather";
import { weatherOptions, weatherImgs, weatherMsgs } from "../models/weatherOptions";
import { clothRecommand } from '../models/clothRecommand';

function WeatherLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather.weatherInfo
  );
  const dispatch = useDispatch();

  const getWeather = () => {
    dispatch(getWeatherThunk());
  };

  // componentWillMount 대신 쓴 것
  useEffect(getWeather, []);

  return (
    <>
      {loading && <p style={{ textAlign: "center" }}></p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
        <Weather
          weather={data.weather}
          temp={data.temp}
          cloth={clothRecommand(data.temp).top}
          bottom={clothRecommand(data.temp).bottom}
          imgs={weatherImgs(data.weather)}
          msg={weatherMsgs(data.weather)}
          daliy={data.daliy}
        />
      )}
    </>
  );
}

export default WeatherLoader;
