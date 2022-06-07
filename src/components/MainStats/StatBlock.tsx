import React, { FC } from "react";

const StatBlock: FC<{
  stat: string;
  rolled: number;
  proficient: boolean;
  bonus: number;
}> = ({ stat, rolled, proficient, bonus }) => {
  const calculateModifier = (amount: number): number => {
    if (amount >= 10) {
      return Math.floor((amount - 10) / 2);
    }
    if (amount < 10) {
      return -Math.floor((11 - amount) / 2);
    }
    return 0;
  };

  return (
    <div className="relative flex-1">
      <div className="bg-stone-200 text-center mx-2 border shadow-sm rounded-tl-md rounded-tr-md">
        <small className="uppercase text-xs">save</small>
        <p className="text-xl font-bold">
          {calculateModifier(rolled) + (proficient ? bonus : 0)}
        </p>
      </div>
      <div className="bg-stone-100 flex flex-col items-center border shadow-md p-4 rounded-lg">
        <h3 className="p-2 text-4xl font-bold">{calculateModifier(rolled)}</h3>
        <small className="uppercase">{stat}</small>
      </div>
      <div className="absolute -bottom-6 left-1/4 w-1/2 py-1 bg-stone-100 border shadow-lg text-center rounded-md">
        <p className="font-bold">{rolled}</p>
      </div>
    </div>
  );
};

export default StatBlock;
