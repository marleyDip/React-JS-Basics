import "./App.css";
import btnModule from "./Button.module.css";
import { useState } from "react";
import { questions } from "./Data/faqQuestion";
import Faqs from "./Faqs.jsx";

function App() {
  /*  let [status, setStatus] = useState(false);
  let [pStatus, setPStatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);

  let statusData = () => {
    setPStatus(!pStatus);
  }; */

  //let [modalStatus, setModalStatus] = useState(false);

  let [showAns, setShowAns] = useState(questions[0].id);

  return (
    <div className="App">
      {/* Create Faq With Props drilling Project */}
      <div>
        <Faqs />
      </div>
      {/* Create Faq With Props drilling Project */}

      {/* Create Faq Using State Project */}
      {/* <div>
        <h1>Frequently Asked Question (FAQs)</h1>

        <div className="faqOuter">
          {questions.map((faqItems, i) => {
            return (
              <div className="faqItems" key={faqItems.id}>
                <h2 onClick={() => setShowAns(faqItems.id)}>
                  {faqItems.question}
                </h2>

                <p className={showAns === faqItems.id ? "activeAns" : ""}>
                  {faqItems.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* Create Faq Using State Project */}

      {/* Create Login Modal Project */}
      {/* <button
        className="en
      button"
        onClick={() => setModalStatus(!modalStatus)}
      >
        Enquiry Now
      </button>

      <div
        onClick={() => setModalStatus(!modalStatus)}
        className={`modalOverLay ${modalStatus ? "showModalOverlay" : ""}`}
      ></div>
      <div className={`modelDiv ${modalStatus ? "showModelDiv" : ""}`}>
        <h3>
          Enquiry Now{" "}
          <span onClick={() => setModalStatus(!modalStatus)}>&times;</span>
        </h3>
      </div> */}
      {/* Create Login Modal Project */}

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

      {/* <br />
      <br /> */}
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
