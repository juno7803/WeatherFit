import axios from "axios";
const API_KEY = "734bf25472a20c2e1d438fa3ad1db566";
var lat;
var lon;

//위치 정보 받아오는 함수 -> async await 왜 적용안되는지 모르겠음.. 일단 보류
function getLocation() {
  console.log("getlocation 호출");
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log(lat,lon);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("GPS를 지원하지 않습니다");
  }
}

export async function getWeathers() {
  getLocation();
  const res = await axios.get(
    //`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
    `https://api.openweathermap.org/data/2.5/onecall?lat=37.4056318&lon=127.11512630000001&exclude=daily&appid=${API_KEY}&units=metric`
  );
  console.log(res);
  return {
    ...res,
    // weather: res.data.weather[0].main, // 날씨
    // temp: res.data.main.temp, // 온도
    weather: res.data.current.weather[0].main,
    temp: res.data.current.temp,
    daliy: res.data.hourly
  };
}

export interface weatherTYPE {
  weather: string;
  temp: number;
  daliy: number[];
}
