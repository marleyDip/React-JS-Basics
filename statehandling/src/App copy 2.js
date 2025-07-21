import "./App.css";
import { useState } from "react";

function App() {
  let [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="App">
      <button className="mIcon" onClick={() => setMenuStatus(!menuStatus)}>
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
      </div>
    </div>
  );
}

export default App;
