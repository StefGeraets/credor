import React, { FC } from "react";

const SavingThrows: FC<{ savingThrows: any[] }> = ({ savingThrows }) => {
  return (
    <div>
      <ul>
        {savingThrows.map((s: any) => (
          <li key={s.index}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SavingThrows;
