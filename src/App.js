import Card from "./components/Card";
import React from "react";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍓 Strawbery",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🍏 Green Apple",
      color: "green",
    },
    {
      id: 1341,
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <main className="app">
      <h1 className="app__title">Fruits</h1>
      <ul>
        {fruits.map((fruits) => {
          return (
            <li key={fruits.id}>
              <Card id={fruits.id} name={fruits.name} color={fruits.color} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

// <div className="app">
// <Card name="🍌 banana" />
//</div>
