import React, { use } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
      {players.map((player) => (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={player["player-image"]}
              alt="Shoes"
            />
          </figure>
          <div className="mt-3">
            <div className="flex">
              <img src={userImg} alt="" />
              <h2 className="ml-2 card-title">{player["player-name"]}</h2>
            </div>

            <div className="flex justify-between border-gray-300 mt-4 border-b-1 pb-2">
              <div className="flex items-center">
                <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
                <span className="ml-2">{player["player-country"]}</span>
              </div>
              <button className="btn">{player["playing-role"]}</button>
            </div>

            <div className="flex justify-between">
              <span className="font-extrabold">Rating </span>
              <span>{player["rating"]}</span>
            </div>
            <div className="flex justify-between ">
              <span className="font-extrabold">{player["batting-style"]} </span>
              <span>{player["bowling-style"]}</span>
            </div>

            <div className="card-actions mt-4 flex justify-between items-center ">
              <p>Price {player["price"]}</p>
              <button className="btn">Choose player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
