import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import Weather from "../components/Weather";
import { getWeatherThunk } from "../modules/weather";
import { weatherOptions, weatherImgs, weatherMsgs } from "../models/weatherOptions";

function WeatherLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather.weatherInfo
  );
  const dispatch = useDispatch();

  const getWeather = () => {
    dispatch(getWeatherThunk());
  };

  // 후에 모듈로 빼서 export 로 받아오기
  const ClothRecommand = (temp: number) => {
    if (temp >= 28) {
      return "반팔, 반바지";
    } else if (23 <= temp && temp < 28) {
      return "얇은 셔츠, 면바지";
    } else if (20 <= temp && temp < 23) {
      return "긴팔 티, 슬랙스";
    } else if (17 <= temp && temp < 20) {
      return "맨투맨, 청바지";
    } else if (12 <= temp && temp < 17) {
      return "자켓, 청바지";
    } else if (5 <= temp && temp < 12) {
      return "트렌치코트, 기모바지";
    } else {
      return "패딩, 두꺼운 코트";
    }
  };

  // componentWillMount 대신 쓴 것
  useEffect(getWeather, []);

  return (
    <>
      {loading && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
        <Weather
          weather={data.weather}
          temp={data.temp}
          cloth={ClothRecommand(data.temp)}
          imgs={weatherImgs(data.weather)}
          msg={weatherMsgs(data.weather)}
        />
      )}
    </>
  );
}

export default WeatherLoader;
