import { useState } from "react";
import "./App.css";

function App() {
  let [city, setCity] = useState("");

  let getData = (event) => {
    event.preventDefault();
    //console.log(city);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c`
    )
      .then((res) => res.json())
      .then((data) => {
        // handle the data here
        console.log(data);
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

        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]">
          <h3 className="font-bold text-[30px]">
            Dhaka <span className="bg-[yellow]">BD</span>
          </h3>

          <h2 className="font-bold text-[40px]">9.62oc</h2>

          <img src="http://openweathermap.org/img/w/50d.png" alt="" />

          <p>Fog</p>
        </div>
      </div>
    </div>
  );
}

export default App;
