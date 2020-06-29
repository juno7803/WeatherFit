// 위치정보 받아와서 현재위치 기준으로 하는건 나중에 추가 구현
import axios from "axios";
const API_KEY = "734bf25472a20c2e1d438fa3ad1db566";
let lat = 0;
let lon = 0; 

async function getLocation (){
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log("lat:",lat);
        console.log("lon",lon);
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }
  
  //`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
export async function getWeathers(){
    await getLocation();
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`    
    );
    console.log(res);
    return {
        ...res,
        weather: res.data.weather[0].main,
        temp: res.data.main.temp
    }
};

export interface weatherTYPE{
    weather: string;
    temp: number;
};