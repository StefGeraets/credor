import React from "react";

import Header from "./components/Header";
import MainStats from "./components/MainStats";

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
    subclass: "open-hand",
    statsRolled: {
      STR: 9,
      DEX: 18,
      CON: 13,
      INT: 11,
      WIS: 13,
      CHA: 14,
    },
  };

  return (
    <div className="App">
      <div className="container mx-auto  min-h-full">
        <Header player={player} />
        <MainStats player={player} />
      </div>
    </div>
  );
}

export default App;
