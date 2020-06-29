import React,{useState} from 'react';
import './Weather.css';

type WeatherInfoProps={
    weather: string;
    temp: number;
    cloth: string;
    imgs: string|undefined;
};

function Weather({weather,temp,cloth,imgs}: WeatherInfoProps){
    return (
        <div>
            <h1 className ="TempInfo">{temp}℃ </h1>
            <div className="WeatherInfo">
                현재 날씨 {weather}
                <img className="WeatherImgs"src={imgs} />
            </div>
            <span className="Cloth">추천하는 옷 {cloth}</span>
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

// 위치정보 받아와서 현재위치 기준으로 하는건 나중에 추가 구현