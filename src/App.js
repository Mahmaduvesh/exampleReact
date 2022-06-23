import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputList, setInputList] = useState(" ");

  // empty array to store input
  const [items, setItems] = useState([]);

  // target input value
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Item"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={ListOfItems}> + </button>

        <ol>
          {/* <li> {inputList} </li> */}

          {/* // empty array call */}
          {items.map((itemval) => {
            return <li> {itemval} </li>;
          })}
        </ol>
      </div>
    </div>
  );
}
