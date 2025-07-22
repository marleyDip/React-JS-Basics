import "./App.css";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    let toName = event.target.toName.value;
    //alert(toName);

    if (!todolist.includes(toName)) {
      let finalData = [...todolist, toName];
      setTodolist(finalData);
    } else {
      alert("ToDo Name Already Exists...");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDOListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <form onSubmit={saveToDoList}>
        <input type="text" name="toName" /> <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDOListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    //alert(indexNumber);

    let finalData = todolist.filter((v, i) => i !== indexNumber);

    //console.log(finalData);

    setTodolist(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completeTodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
