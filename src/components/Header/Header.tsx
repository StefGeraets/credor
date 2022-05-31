import React, { FC } from "react";
import { Player } from "../../global";

const Header: FC<{ player: Player }> = ({ player }) => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
        <div className="text-right">
          <p className="w-full rounded shadow-md bg-stone-100 p-1">
            {player.class}, {player.level}
          </p>
          <small className="italic">Class &amp; Level</small>
        </div>
        <div className="col-span-2 row-span-2 text-center">
          <h2 className="text-3xl font-bold rounded shadow-md py-6 bg-stone-200">
            {player.charName}
          </h2>
          <small className="italic">Character name</small>
        </div>
        <div>
          <p className="w-full rounded shadow-md bg-stone-100 p-1">
            {player.race}
          </p>
          <small className="italic">Race</small>
        </div>
        <div className="text-right">
          <p className="w-full rounded shadow-md bg-stone-100 p-1">&nbsp;</p>
          <small className="italic">Subclass</small>
        </div>
        <div>
          <p className="w-full rounded shadow-md bg-stone-100 p-1">
            {player.background}
          </p>
          <small className="italic">Background</small>
        </div>
        <div className="text-right">
          <p className="w-full rounded shadow-md bg-stone-100 p-1">
            {player.xp}
          </p>
          <small className="italic">XP</small>
        </div>
        <div className="col-span-2 text-center">
          <p className="text-xl font-semibold rounded shadow-md py-1 bg-stone-200">
            {player.name}
          </p>
          <small className="italic">Players Name</small>
        </div>
        <div>
          <p className="w-full rounded shadow-md bg-stone-100 p-1">
            {player.alignment}
          </p>
          <small className="italic">Alignment</small>
        </div>
      </div>
    </>
  );
};

export default Header;
