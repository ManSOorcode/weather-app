import searchIcon from "../assets/search.png";
import clearIcon from "../assets/clear.png";
import drizzleicon from "../assets/drizzle.png";
import cloudIcon from "../assets/cloud.png";
import humidityIcon from "../assets/humidity.png";
// import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import { useEffect, useState } from "react";

const Weather = () => {
  // const apiKey = "90aeb16313038b20a6f1c061273f4280";

  const [cardData, setCardData] = useState({
    icon: "",
    temp: "",
    humidity: "",
    wind: "",
  });
  /**{
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 16.2,
        "feels_like": 16.17,
        "temp_min": 14.51,
        "temp_max": 17.22,
        "pressure": 1016,
        "humidity": 88
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.63,
        "deg": 240
    },
    "clouds": {
        "all": 78
    },
    "dt": 1695765997,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1695707536,
        "sunset": 1695750700
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
} */
  useEffect(() => {
    const weatherData = async () => {
      //http://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=90aeb16313038b20a6f1c061273f4280
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=canada&units=Metric&appid=90aeb16313038b20a6f1c061273f4280`
      );
      const data = await response.json();
      console.log(data);

      const reqData = {
        icon: data.weather[0].main.toLowerCase(),
        country: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      };
      console.log(reqData);
      setCardData(reqData);
    };
    weatherData();
  }, []);

  /*{
    rain:drizzle
    clear:clear
    cloud:cloud
  } */

  return (
    <div className="w-[600px] m-auto mt-4   rounded-xl h-auto bg-gradient-to-r from-indigo-900 via-sky-700 to-cyan-500 shadow-2xl shadow-black">
      <div className="flex justify-center gap-4 pt-10">
        <input
          className="flex w-2/3 h-16 pb-1 pl-10 text-2xl font-normal border-none rounded-full outline-none bg-slate-100 text-slate-700"
          type="text"
          placeholder="search"
        />
        <div className="flex items-center justify-center w-16 h-16 rounded-full cursor-pointer bg-slate-100 ">
          <img src={searchIcon} alt="search Icon" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {/* <img src={cloudIcon} alt="" /> */}
        <img
          src={
            cardData.icon === "rain"
              ? drizzleicon
              : cardData.icon === "clear"
              ? clearIcon
              : cloudIcon
          }
          alt=""
        />
        {/* <img src={clearIcon} alt="" /> */}
      </div>
      <div className="flex justify-center mt-8 font-semibold text-8xl text-slate-50">
        {`${cardData.temp}°c`}
      </div>
      <div className="flex justify-center mt-4 text-6xl font-medium text-slate-50">
        {cardData.country}
      </div>
      <div className="flex justify-around pb-10 mt-10">
        <div className="flex text-center justify-evenly ">
          <img src={humidityIcon} className="pt-2 pb-8 " alt="" />
          <div className="ml-2 text-slate-50">
            <div className="text-4xl">{`${cardData.humidity}%`}</div>
            <div className="text-2xl">Humidity</div>
          </div>
        </div>
        <div className="flex text-center justify-evenly ">
          <img src={windIcon} className="pt-2 pb-8 " alt="" />
          <div className="ml-2 text-slate-50">
            <div className="text-4xl"> {`${cardData.wind} km/h`}</div>
            <div className="text-2xl">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
