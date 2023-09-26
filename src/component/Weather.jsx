import searchIcon from "../assets/search.png";
// import clearIcon from "../assets/clear.png";
// import drizzleicon from "../assets/drizzle.png";
import cloudIcon from "../assets/cloud.png";
import humidityIcon from "../assets/humidity.png";
// import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";

const Weather = () => {
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
        <img src={cloudIcon} alt="" />
      </div>
      <div className="flex justify-center mt-8 font-semibold text-8xl text-slate-50">
        24°c
      </div>
      <div className="flex justify-center mt-4 text-6xl font-medium text-slate-50">
        London
      </div>
      <div className="flex justify-around pb-10 mt-10">
        <div className="flex text-center justify-evenly ">
          <img src={humidityIcon} className="pt-2 pb-8 " alt="" />
          <div className="ml-2 text-slate-50">
            <div className="text-4xl">64%</div>
            <div className="text-2xl">Humidity</div>
          </div>
        </div>
        <div className="flex text-center justify-evenly ">
          <img src={windIcon} className="pt-2 pb-8 " alt="" />
          <div className="ml-2 text-slate-50">
            <div className="text-4xl">18 km/h</div>
            <div className="text-2xl">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
