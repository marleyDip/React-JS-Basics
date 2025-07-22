import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(uname, password);
  };

  // let getUname = (event) => {
  // console.log("hello");
  //   setUname(event.target.value);
  // };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label>UserName</label>

                <input
                  type="text"
                  value={uname}
                  //onChange={getUname}
                  onChange={(event) => setUname(event.target.value)}
                  className="form-control"
                />
              </div>

              <div className="text-start my-3">
                <label>Password</label>

                <input
                  type="text"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                />
              </div>

              <div className="text-start my-3">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
