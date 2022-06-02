import React, { FC } from "react";
import { Player, Stats } from "../../global";
import StatBlock from "./StatBlock";

const MainStats: FC<{ player: Player }> = ({ player }) => {
  return (
    <div className="flex gap-16 mb-8">
      {Object.keys(player.statsRolled).map((item: string) => {
        return (
          <StatBlock
            key={item}
            stat={item}
            rolled={player.statsRolled[item as keyof Stats]}
          />
        );
      })}
    </div>
  );
};

export default MainStats;
