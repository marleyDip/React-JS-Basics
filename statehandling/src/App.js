import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import btnModule from "./Button.module.css";

function App() {
  let [status, setStatus] = useState(false);

  let statusData = () => {
    setStatus(!status);
  };

  return (
    <div className="App">
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      {/* <button className="button" onClick={statusData}>
        Show
      </button> */}

      <button className="button" onClick={() => setStatus(!status)}>
        {status ? "Hide" : "Show"}
      </button>

      {status ? (
        <p className="para">Welcome to Z-Index Next Gen Stack Company</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
