import { useState } from "react";
import "./App.css";

function App() {
  let [city, setCity] = useState("");
  let [weatherDetails, setWeatherDetails] = useState();
  let [isLoading, setIsLoading] = useState(false);

  let getData = (event) => {
    event.preventDefault();
    //console.log(city);

    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        // handle the data here

        //console.log(data);
        //console.log(data.cod);

        if (data.cod == "404") {
          setWeatherDetails(undefined);
        } else {
          setWeatherDetails(data);
        }

        setIsLoading(false);
      });
    setCity("");
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-[40px] font-bold py-[50px] text-white   ">
          Simple Weather App
        </h1>

        <form onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px] h-[40px] pl-3"
            placeholder="City Name"
          />

          <button className="bg-teal-900 text-white h-[40px] font-bold p-2 ml-1 ">
            Submit
          </button>
        </form>

        <div className="w-[400px] mx-auto bg-emerald-500 shadow-xl mt-[40px] p-[25px] relative">
          <img
            src="https://media.tenor.com/2hNqKj3ArX8AAAAi/loading.gif"
            alt="Loading"
            width={100}
            className={`absolute left-[40%] ${isLoading ? "" : "hidden"} `}
          />

          {weatherDetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {weatherDetails.name}{" "}
                <span className="bg-[yellow]">
                  {weatherDetails.sys.country}
                </span>
              </h3>

              <h2 className="font-bold text-[40px]">
                {weatherDetails.main.temp}
              </h2>

              <img
                src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
                alt=""
              />

              <p className="font-bold font-serif">
                {weatherDetails.weather[0].description}
              </p>
            </>
          ) : (
            <div className="font-bold font-mono">City Not Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
