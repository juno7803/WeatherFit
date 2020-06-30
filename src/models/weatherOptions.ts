  // models로 옮기자
  export const weatherOptions = {
    Rain: {
      title: "Raining",
       msg: "우산 챙기세요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/09d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/02d.png"
      },
      background:""
    },
    Clear: {
      title: "Sunny",
       msg: "날이 좋아요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/02d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Thunderstorm: {
      title: "Thunderstrom",
       msg: "천둥이 쳐요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/11d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Clouds: {
      title: "Clouds",
       msg: "구름이 꼈어요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/03d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Snow: {
      title: "Snow",
       msg: "눈이와요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/13d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Drizzle: {
      title: "Drizzle",
       msg: "이슬비가 내려요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/10d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Haze: {
      title: "Haze",
       msg: "안개가 꼈어요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/50d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
    Mist: {
      title: "Mist",
       msg: "안개가 꼈어요!",
      icon:{
        day: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/day/50d.png",
        night: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/weather/night/01n.png"
      },
      background:""
    },
  };

    //후에 모듈로 빼서 export로 받아올 것
  /* 날씨 이미지 받아오기 */
  export const weatherImgs = (weather: string) => {
    switch (weather) {
      case "Rain":
        return weatherOptions.Rain.icon;
      case "Clear":
        return weatherOptions.Clear.icon;
      case "Thunderstorm":
        return weatherOptions.Thunderstorm.icon;
      case "Clouds":
        return weatherOptions.Clouds.icon;
      case "Snow":
        return weatherOptions.Snow.icon;
      case "Drizzle":
        return weatherOptions.Drizzle.icon;
      case "Haze":
        return weatherOptions.Haze.icon;
      case "Mist":
        return weatherOptions.Mist.icon;
    }
  };

  export const weatherMsgs = (weather: string) =>{
    switch (weather) {
      case "Rain":
        return weatherOptions.Rain. msg;
      case "Clear":
        return weatherOptions.Clear.msg;
      case "Thunderstorm":
        return weatherOptions.Thunderstorm.msg;
      case "Clouds":
        return weatherOptions.Clouds.msg;
      case "Snow":
        return weatherOptions.Snow.msg;
      case "Drizzle":
        return weatherOptions.Drizzle.msg;
      case "Haze":
        return weatherOptions.Haze.msg;
      case "Mist":
        return weatherOptions.Mist.msg;
    }
  }