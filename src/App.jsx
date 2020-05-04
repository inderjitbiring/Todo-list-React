import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./styles.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(1);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText !== "") {
      setItems(items => {
        return [...items, inputText];
      });
    }
    setInputText("");
    setCounter(counter + 1);
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    setCounter(counter - 1);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="TodoApp">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Add task..."
        />
        <button onClick={addItem}> Add item #{counter} </button>

        <ul className="output">
          {items.map((todoItem, index) => (
            <TodoItem
              text={todoItem}
              onChecked={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
