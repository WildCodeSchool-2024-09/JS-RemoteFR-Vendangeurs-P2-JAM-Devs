import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import type { Track } from "../types/type";

type PlayerContextType = {
  playerState: Track[];

  setPlayerState: Dispatch<React.SetStateAction<Track[]>>;
};

const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

export const PlayerContextProvider = ({
  children,
}: { children: ReactNode }) => {
  const [playerState, setPlayerState] = useState<Track[]>([]);

  return (
    <PlayerContext.Provider value={{ playerState, setPlayerState }}>
      {children}
    </PlayerContext.Provider>
  );
};
export const usePlayer = () => {
  return useContext(PlayerContext);
};

export default PlayerContext;
