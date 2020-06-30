export const clothRecommand = (temp: number) => {
  if (temp >= 28) {
    return {
      top:"https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EB%B0%98%ED%8C%94%ED%8B%B0.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EB%B0%98%EB%B0%94%EC%A7%80.PNG"
    };
    // 반팔 반바지
  } else if (23 <= temp && temp < 28) {
    return {
      top:"https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EB%B0%98%ED%8C%94%EC%85%94%EC%B8%A0.PNG",
      bottom:"https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    };
    // 반팔 셔츠
  } else if (20 <= temp && temp < 23) {
    return {
      top: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EB%B0%98%ED%8C%94%EC%85%94%EC%B8%A0.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    };
    // 셔츠 슬랙스
  } else if (17 <= temp && temp < 20) {
    return {
      top: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%ED%9B%84%EB%93%9C%ED%8B%B0.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    }
    // 후드티 청바지
  } else if (12 <= temp && temp < 17) {
    return {
      top:"https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EB%8B%88%ED%8A%B8.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    };
    // 니트 청바지
  } else if (5 <= temp && temp < 12) {
    return {
      top:"https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%BD%94%ED%8A%B8.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    };
    // 코트 청바지
  } else {
    return {
      top: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%ED%8C%A8%EB%94%A9.PNG",
      bottom: "https://weather-fit.s3.ap-northeast-2.amazonaws.com/cloth/%EC%8A%AC%EB%9E%99%EC%8A%A4.PNG"
    };
      // 패딩 청바지
  }
};
