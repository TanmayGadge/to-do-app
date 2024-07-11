import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./components/item";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputItem(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;  
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputItem} onChange={handleChange} />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div className="list-container">
        <ul className="items">
          {items.map((todoItem, index) => {
            return (
              <Item
                key={index}
                id={index}
                item={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
