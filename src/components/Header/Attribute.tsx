import React, { FC } from "react";

const Attribute: FC<{
  side: "left" | "right";
  title: string;
  attribute?: string;
}> = ({ side, title, attribute }) => {
  return (
    <div className={side === "left" ? "text-right" : ""}>
      <p className="w-full rounded shadow-md bg-stone-100 p-1">{attribute}</p>
      <small className="italic">{title}</small>
    </div>
  );
};

export default Attribute;
