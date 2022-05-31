import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Player } from "./global";

function App() {
  const player: Player = {
    name: "Stef Geraets",
    charName: "Credor of Arvil",
    level: 10,
    class: "Monk",
    race: "Tiefling",
    background: "Hermit",
    xp: 64000,
    alignment: "lawful-good",
  };

  return (
    <div className="App">
      <div className="container mx-auto  min-h-full">
        <Header player={player} />
      </div>
    </div>
  );
}

export default App;
