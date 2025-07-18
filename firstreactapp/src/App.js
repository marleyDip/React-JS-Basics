import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = "Welcome to Z-Index Software company";
  let num = [10, 20, 30, 40];

  let obj = {
    name: "Deep Akand",
    cName: "MERN",
    desc: "REACT JS",
  };

  let status = true;
  return (
    <div className="main">
      <h1>{name}</h1>

      {num.map((num) => {
        return <h4>{num}</h4>;
      })}

      <h2>{obj.name}</h2>
      <h3>{obj.cName}</h3>
      <h4>{obj.desc}</h4>

      {status ? (
        <h1 style={{ color: "red", backgroundColor: "yellow" }}>
          Welcome to Z-Index Software company
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
