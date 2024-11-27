import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Home from "../assets/icons/Home.svg";
import NextPage from "../assets/icons/NextPage.svg";
import PreviousPage from "../assets/icons/PreviousPage.svg";

export default function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const [history, setHistory] = useState<string[]>([location.pathname]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isButtonUsed, setIsButtonUsed] = useState<boolean>(false);

  const updateHistory = useCallback(
    (currentIndex: number, location: string) => {
      if (history[currentIndex] !== location) {
        setHistory((prevHistory) => {
          const newHistory = prevHistory.slice(0, currentIndex + 1);
          return [...newHistory, location];
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    },
    [history],
  );

  useEffect(() => {
    if (isButtonUsed) {
      setIsButtonUsed(false);
      return;
    }
    updateHistory(currentIndex, location.pathname);
  }, [location.pathname, currentIndex, isButtonUsed, updateHistory]);

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsButtonUsed(true);
      navigate(history[currentIndex - 1]);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsButtonUsed(true);
      navigate(history[currentIndex + 1]);
    }
  };

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < history.length - 1;

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        type="button"
        onClick={goBack}
        disabled={!canGoBack}
        aria-label="Bouton Précédent"
        className={`"h-[30px] w-[30px] laptop:w-[40px] laptop:h-[40px]" ${!canGoBack ? "opacity-20 cursor-not-allowed" : ""}`}
      >
        <img src={PreviousPage} alt="Icone Précédent" />
      </button>

      {/* Home */}
      <Link to={"/"}>
        <div className="h-[30px] w-[30px] laptop:w-[40px] laptop:h-[40px]">
          <img src={Home} alt="Icone Accueil" />
        </div>
      </Link>

      {/* Suivant */}
      <button
        type="button"
        onClick={goForward}
        aria-label="Bouton Suivant"
        disabled={!canGoForward}
        className={`"h-[30px] w-[30px] laptop:w-[40px] laptop:h-[40px]" ${!canGoForward ? "opacity-20 cursor-not-allowed" : ""}`}
      >
        <img src={NextPage} alt="Icone Suivant" />
      </button>
    </div>
  );
}
