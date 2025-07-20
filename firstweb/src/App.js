import "./App.css";
import Header from "./Header";
import webLogo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      {/* <img src="https://marleydip.netlify.app/logo.png" alt="" />
      <Header /> */}

      <img width={200} src={webLogo} alt="" />

      <Header />

      <h1 className="text-[40px] text-red-900 font-bold">Welcome To Deep</h1>
    </div>
  );
}

export default App;
