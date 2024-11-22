import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { PlayerContextProvider } from "./context/PlayerContext.tsx";

function App() {
  return (
    <PlayerContextProvider>
      <div className="h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-1 overflow-y-auto ">
          <div>
            <Outlet />
          </div>
        </main>
        <footer>
          <Player />
        </footer>
      </div>
    </PlayerContextProvider>
  );
}

export default App;
