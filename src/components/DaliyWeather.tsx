import React,{useEffect, useState} from "react";
import {weatherImgs} from "../models/weatherOptions";
import "./DaliyWeather.css";
import src from "*.bmp";

type DaliyWeatherProps = {
    time: number;
    temp: number;
    weather: string;
}

function DaliyWeather({time,temp,weather}:DaliyWeatherProps){
    const [ctime,setCtime] = useState(0);
    // unix 시간을 일반 시간으로 바꿔줌
    const getTime = ()=>{
        const temp = new Date(time*1000);
        setCtime(temp.getHours());
    }
    useEffect(getTime,[]);

    return(
        <div className="daliyInfo">
            <div className="daliyTemp">{Math.ceil(temp)}℃</div>
            <div><img className="daliyImgs" src={weatherImgs(weather)}/></div>
            <div>{ctime}시</div>
        </div>
    );
}

export default DaliyWeather;


// props로 받아와서 state에 배열을 넣고, 태그는 span으로 해주며, map을 사용하자.