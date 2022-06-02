import React, { FC } from "react";

const Proficiencies: FC<{ prof: any }> = ({ prof }) => {
  return (
    <div>
      <ul>
        {prof.map((p: any) => (
          <li key={p.index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Proficiencies;
