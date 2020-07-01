import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import "./Weather.css";
import DaliyWeather from "./DaliyWeather";

type WeatherInfoProps = {
  weather: string;
  temp: number;
  cloth: string;
  bottom: string;
  imgs: string | undefined;
  msg: string | undefined;
  daliy: any;
};

function Weather({ temp, cloth, bottom, imgs, msg, daliy }: WeatherInfoProps) {
  const sliceDaliy = daliy.slice(0, 6);
  return (
    <div className="Background">
      <Container className="Container" maxWidth="sm">
        <h1>서울 특별시</h1>
        <h2 className="TempInfo">{Math.ceil(temp)}℃ </h2>
        <div className="WeatherMsg">{msg}</div>
        <img className="WeatherImgs" src={imgs} />
        <div className="DaliyWeatherContainer">
          시간대별 날씨 현황
          <div className="DaliyWeather">
            {sliceDaliy.map((it: any, i: number) => {
              return (
                <DaliyWeather
                  time={it.dt}
                  temp={it.temp}
                  weather={it.weather[0].main}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="ClothContainer">
          <div className="Cloth">
            <img src={cloth} />
            <img src={bottom} />
          </div>
          이런 옷을 추천 드려요
        </div>
        <div className="Footer">
          <Switch color="primary"></Switch>
        </div>
      </Container>
    </div>
  );
}

export default Weather;

// 28도 이상 : 민소매,반팔,반바지
// 27~23도 : 반팔,얇은 셔츠,반바지, 면바지
// 22~20도 : 긴팔 티,면바지, 슬랙스
// 19~17도 : 얇은 가디건,니트,후드,맨투맨, 긴바지
// 16~12도 : 자켓, 가디건,청자켓, 니트,청바지
// 11~9도 : 트렌치 코트,야상, 기모바지
// 8~5도 : 울 코트, 히트텍 가죽 옷
// 4도 이하: 패팅, 두꺼운 코트, 목도리
