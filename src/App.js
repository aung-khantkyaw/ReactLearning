import { useState, useRef } from "react";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import Theme from "./Theme";
import "./App.css";

function Title(props) {
  return <h4>{props.title}</h4>;
}

function Header(props) {
  return <Title title={props.header} />;
}

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

function AddForm(props) {
  const nameRef = useRef();
  const idRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.add(nameRef.current.value, idRef.current.value);
      }}
    >
      <input type="text" ref={nameRef} />
      <input type="text" ref={idRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  const [items, setItems] = useState([
    { name: "Item", id: "1" },
    { name: "Item", id: "2" },
  ]);

  const add = (name, id) => {
    setItems([...items, { name, id }]);
  };

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
      <h3>Professional Web Developer 2023</h3>
      <Header header="React Learning" />

      <h5>Component</h5>
      <Item />

      <h5>Component with props</h5>
      <ItemWithProps name="Item" id="1" />

      <h5>useState</h5>
      {items.map((item) => (
        <ItemWithProps key={item.id} name={item.name} id={item.id} />
      ))}
      <button onClick={addItem}>Add Item</button>

      <h5>useRef</h5>
      <input type="text" ref={nameRef} />
      <input type="text" ref={idRef} />
      <button onClick={addNewItem}>Add New Item</button>

      <AddForm add={add} />

      <Navbar>
        <NavItem navLink="#" navName="Home" />
        <NavItem navLink="#" navName="About" />
        <NavItem navLink="#" navName="Contact" />
      </Navbar>

      <Theme />
    </div>
  );
}
