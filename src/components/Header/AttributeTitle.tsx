import React, { FC } from "react";

const AttributeTitle: FC<{
  span: boolean;
  name: string;
  title: string;
}> = ({ span, name, title }) => {
  return (
    <div className={`col-span-2 ${span ? "row-span-2" : ""} text-center`}>
      <p
        className={`${
          span ? "text-3xl py-6" : "text-xl py-1"
        } font-bold rounded shadow-md bg-stone-200`}
      >
        {name}
      </p>
      <small className="italic">{title}</small>
    </div>
  );
};

export default AttributeTitle;
