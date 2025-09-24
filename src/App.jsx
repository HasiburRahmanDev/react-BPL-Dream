import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import NavBar from "./components/NavBar/NavBar";
import { Suspense } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <NavBar></NavBar>
      <Suspense
        fallback={<span className="loading loading-ball loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
