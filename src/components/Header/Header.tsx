import React, { FC } from "react";
import { Player } from "../../global";
import Attribute from "./Attribute";
import AttributeTitle from "./AttributeTitle";

const Header: FC<{ player: Player }> = ({ player }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      <Attribute
        side="left"
        attribute={`${player.class}, ${player.level}`}
        title="Class &amp; Level"
      />
      <AttributeTitle
        span={true}
        name={player.charName}
        title="Character name"
      />
      <Attribute side="right" attribute={player.race} title="Race" />

      <Attribute side="left" attribute={player.subclass} title="Subclass" />
      <Attribute
        side="right"
        attribute={player.background}
        title="Background"
      />

      <Attribute side="left" attribute={`${player.xp}`} title="XP" />
      <AttributeTitle span={false} name={player.name} title="Player name" />
      <Attribute side="right" attribute={player.alignment} title="Alignment" />
    </div>
  );
};

export default Header;
