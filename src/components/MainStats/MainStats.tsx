import React, { FC, useEffect, useState } from "react";
import { Player, Stats } from "../../global";
import {
  getByClass,
  getByClassLevel,
  getProficiencyBonus,
} from "../../utils/helpers";
import StatBlock from "./StatBlock";

const MainStats: FC<{ player: Player }> = ({ player }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const classData = await getByClass(player.class);
        const classLevel = await getByClassLevel(player.class, player.level);
        const profBonus = await getProficiencyBonus(player.class, player.level);

        setData({ classData, classLevel, profBonus });
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data = ${error}`}</div>
      )}
      {data && (
        <div className="flex gap-16 mb-8">
          {Object.keys(player.statsRolled).map((item: string) => {
            const proficient = data.classData.saving_throws.find(
              (save: any) => save.name === item
            );
            const isProficient = proficient?.name ? true : false;
            return (
              <StatBlock
                key={item}
                stat={item}
                proficient={isProficient}
                bonus={data.profBonus}
                rolled={player.statsRolled[item as keyof Stats]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainStats;
