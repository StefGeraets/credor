import React, { FC, useEffect, useState } from "react";
import { Player } from "../../global";
import Proficiencies from "./Proficiencies";
import SavingThrows from "./SavingThrows";

const Content: FC<{ player: Player }> = ({ player }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/classes/${player.class.toLocaleLowerCase()}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let classData = await response.json();
        setData(classData);
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
        <div>
          <Proficiencies prof={data.proficiencies} />
          <SavingThrows savingThrows={data.saving_throws} />
        </div>
      )}
    </div>
  );
};

export default Content;
