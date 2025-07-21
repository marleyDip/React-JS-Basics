import { useState } from "react";
import "./App.css";
import Header from "./Header";
import webLogo from "./images/logo.png";

function App() {
  //let n = 10;

  let template = "";
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);

  if (pshow) {
    template = (
      <>
        <p className="mt-5 font-bold text-xl">
          Welcome to Z-Index Next Stack Limited
        </p>

        <button
          className="bg-[red] text-white text-lg p-[10px] mt-2"
          onClick={() => setPshow(!pshow)}
        >
          Hide
        </button>
      </>
    );
  } else {
    template = (
      <button
        className="bg-[red] text-white text-lg p-[10px] my-5"
        onClick={() => setPshow(!pshow)}
      >
        Show
      </button>
    );
  }

  let displayData = () => {
    setCount(count + 1);
    //setCount(100);
    //n = n + 1;
    //console.log(n);
    //alert("Welcome to Deep");
  };

  let addData = (a, b) => {
    console.log(a + b);
  };
  return (
    <div className="App">
      {template}

      <div className="mt-4 font-bold text-xl">{count}</div>
      <button
        className="bg-[green] p-[10px] mr-4 mt-2 text-white"
        onClick={() => addData(10, 20)}
      >
        Add Data
      </button>

      {/* (10, 20) = automatic add 30 on console without click Add Data
      
      <button
        className="bg-[green] p-[10px] mr-4 text-white"
        onClick={addData(10, 20)} addData
      >
        Add Data
      </button> */}

      <button
        className="bg-[red] p-[10px] my-1 text-white"
        onClick={displayData}
      >
        Save
      </button>

      {/* displayData() = automatic fired without click on Save button 
      
      <button
        className="bg-[red] p-[10px] my-10 text-white"
        onClick={displayData()} 
      >
        Save
      </button> */}

      {/* <img width={200} src={webLogo} alt="" />

      <Header />

      <h1 className="text-[40px] text-red-900 font-bold">Welcome To Deep</h1> */}
    </div>
  );
}

export default App;
