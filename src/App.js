import { useState, useRef } from "react";
import "./App.css";

function Item() {
  return <li>Item</li>;
}

function ItemWithProps(props) {
  return (
    <li>
      {props.name} - {props.id}
    </li>
  );
}

export default function App() {
  const [items, setItems] = useState([
    { name: "Item", id: "1" },
    { name: "Item", id: "2" },
  ]);

  const addItem = () => {
    const id = items.length + 1;
    const name = "Item";
    setItems([...items, { name, id }]);
  };

  const nameRef = useRef();
  const idRef = useRef();

  const addNewItem = () => {
    let name = nameRef.current.value;
    let id = idRef.current.value;

    setItems([...items, { name, id }]);
  };

  return (
    <div>
      <h3>React Learning</h3>

      <h5>Component</h5>
      <Item />

      <h5>Component with props</h5>
      <ItemWithProps name="Item" id="1" />

      <h5>useState</h5>
      {items.map((item) => (
        <ItemWithProps name={item.name} id={item.id} />
      ))}
      <button onClick={addItem}>Add Item</button>

      <h5>useRef</h5>
      <input type="text" ref={nameRef} />
      <input type="text" ref={idRef} />
      <button onClick={addNewItem}>Add New Item</button>
    </div>
  );
}
