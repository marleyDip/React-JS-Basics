import "./App.css";
import btnModule from "./Button.module.css";
import { useState } from "react";

function App() {
  let [status, setStatus] = useState(false);
  let [pStatus, setPStatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);

  let statusData = () => {
    setPStatus(!pStatus);
  };

  return (
    <div className="App">
      {/* Responsive Menu Project */}

      {/* <button className="mIcon" onClick={() => setMenuStatus(!menuStatus)}>
        &#9776;
      </button>

      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div> */}
      {/* Responsive Menu Project */}

      {/* Show & Hide Password Project */}
      {/* <input className="input" type={pStatus ? "text" : "password"} />
      <button className="button" onClick={statusData}>
        {pStatus ? "Hide" : "Show"}
      </button> */}
      {/* Show & Hide Password Project */}

      <br />
      <br />
      {/* module style */}
      {/* <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button> */}
      {/* module style */}

      {/* Ternary Operator */}
      {/* <button className="button" onClick={statusData}>
              Show
            </button> */}
      {/* <button className="button" onClick={() => setStatus(!status)}>
        {status ? "Hide" : "Show"}
      </button>
      {status ? (
        <p className="para">Welcome to Z-Index Next Gen Stack Company</p>
      ) : (
        ""
      )} */}
      {/* Ternary Operator */}
    </div>
  );
}

export default App;
