import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

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
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
