import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import NavBar from "./components/NavBar/NavBar";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <h1 className="font-bold">Available Players</h1>
        <div>
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`p-3 border-1 border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true && "bg-green-200"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`p-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${
              toggle === false && "bg-green-200"
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ball loading-xl"></span>}
        >
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
