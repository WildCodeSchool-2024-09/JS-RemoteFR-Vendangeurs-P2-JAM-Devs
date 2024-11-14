import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Le composant Menu viendra ici */}
      <header>
        <Navbar />
      </header>
      <main className="flex-1 overflow-y-auto ">
        <div>
          <Outlet />
        </div>
      </main>
      <footer>{/* Le composant Player viendra ici */}</footer>
    </div>
  );
}

export default App;
