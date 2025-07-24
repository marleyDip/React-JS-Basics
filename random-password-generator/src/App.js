import { useState } from "react";
import "./App.css";
import { UC, LC, NC, SC } from "./data/PassChar";

function App() {
  //let p = "DeepAkand";
  //let n = p.charAt(Math.floor(Math.random() * p.length));
  //console.log(n);
  //console.log(Math.floor(Math.random() * p.length));
  //let n = p.charAt(3); // p
  //console.log(n);

  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [finalPass, setFinalPass] = useState("");

  let createPassword = () => {
    //alert("hello");

    let charSet = "";
    let finalPass = "";

    if (upperCase || lowerCase || number || symbols) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;

      //console.log(charSet, charSet.length);

      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      //console.log(finalPass);

      setFinalPass(finalPass);
    } else {
      alert("Please check at least one CheckBox!...");
    }
  };

  let copyPassword = () => {
    navigator.clipboard.writeText(finalPass);
  };
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxIn">
          <input type="text" value={finalPass} readOnly />{" "}
          <button onClick={copyPassword}>Copy</button>
        </div>

        <div className="passLength">
          <label htmlFor="">Password Length</label>

          <input
            type="number"
            max={20}
            min={10}
            value={passwordLength}
            onChange={(event) => setPasswordLength(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include Uppercase Letters</label>

          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => {
              setUpperCase(!upperCase);
            }}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include Lowercase Letters</label>

          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => {
              setLowerCase(!lowerCase);
            }}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include Symbols</label>

          <input
            type="checkbox"
            checked={number}
            onChange={() => {
              setNumber(!number);
            }}
          />
        </div>

        <div className="passLength">
          <label htmlFor="">Include Numbers</label>

          <input
            type="checkbox"
            checked={symbols}
            onChange={() => {
              setSymbols(!symbols);
            }}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
