import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance }) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
      {players.map((player) => (
        <PlayerCard
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
