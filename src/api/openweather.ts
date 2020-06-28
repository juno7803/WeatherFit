// 위치정보 받아와서 현재위치 기준으로 하는건 나중에 추가 구현
import axios from "axios";
const API_KEY = "734bf25472a20c2e1d438fa3ad1db566";

export async function getWeathers(){
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
    );
    return {
        ...res,
        weather: res.data.weather.main,
        temp: res.data.main.temp
    }
};

export interface weatherTYPE{
    weather: string;
    temp: number;
};