import { useRef } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { PlayerContextProvider } from "./context/PlayerContext.tsx";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  return (
    <PlayerContextProvider>
      <ScrollToTop scrollableElement={mainRef} />
      <div className="h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        <main ref={mainRef} className="flex-1 overflow-y-auto ">
          <div className="scroll-smooth">
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
