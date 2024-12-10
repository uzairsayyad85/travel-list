/* eslint-disable no-unused-vars */

import "./styles/style.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function handleAddItem(newItem) {
    setData((data) => [...data, newItem]);
  }
  function handleToggleItem(id) {
    setData((data) =>
      data.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setData((data) => data.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );
    if (confirmed) setData([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        data={data}
        handleToggleItem={handleToggleItem}
        handleDeleteItem={handleDeleteItem}
        handleClearList={handleClearList}
      />
    </div>
  );
}
