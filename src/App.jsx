/* eslint-disable no-unused-vars */

import "./styles/style.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function handleAddItem(newItem) {
    setData((data) => [...data, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
    </div>
  );
}
