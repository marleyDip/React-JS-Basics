import "./App.css";
import Header from "./Header";
import webLogo from "./images/logo.png";

function App() {
  let displayData = () => {
    alert("Welcome to Deep");
  };

  let addData = (a, b) => {
    console.log(a + b);
  };
  return (
    <div className="App">
      <button
        className="bg-[green] p-[10px] mr-4 text-white"
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
        className="bg-[red] p-[10px] my-10 text-white"
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

      <img width={200} src={webLogo} alt="" />

      <Header />

      <h1 className="text-[40px] text-red-900 font-bold">Welcome To Deep</h1>
    </div>
  );
}

export default App;
