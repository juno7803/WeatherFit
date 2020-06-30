import axios from "axios";
const API_KEY = "734bf25472a20c2e1d438fa3ad1db566";
// var lat = 0;
// var lon = 0;
// // 위치 정보 받아오는 함수 -> async await 왜 적용안되는지 모르겠음.. 일단 보류
// async function getLocation (){
//     if (navigator.geolocation) { // GPS를 지원하면
//         navigator.geolocation.getCurrentPosition(function(position) {
//         lat=position.coords.latitude;
//         lon=position.coords.longitude;
//         getWeathers(lat,lon);
//       }, function(error) {
//         console.error(error);
//       }, {
//         enableHighAccuracy: false,
//         maximumAge: 0,
//         timeout: Infinity
//       });
//     } else {
//       alert('GPS를 지원하지 않습니다');
//     }
// }
  
export async function getWeathers(){
 //   await getLocation();
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`
        //`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`    
    );
    console.log(res);
    return {
        ...res,
        weather: res.data.weather[0].main, // 날씨
        icon: res.data.weather[0].icon,  // 날씨 icon
        temp: res.data.main.temp, // 온도
        feels:res.data.main.feels_like // 체감 온도
    }
};

export interface weatherTYPE{
    weather: string;
    temp: number;
};