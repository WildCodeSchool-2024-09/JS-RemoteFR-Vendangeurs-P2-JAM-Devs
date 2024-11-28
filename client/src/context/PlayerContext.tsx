import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import type { Track } from "../types/type";

type PlayerState = {
  tracks: Track[];
  currentTrackIndex: number;
};

type PlayerContextType = {
  playerState: PlayerState;
  setPlayerState: Dispatch<React.SetStateAction<PlayerState>>;
};

const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

export const PlayerContextProvider = ({
  children,
}: { children: ReactNode }) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    tracks: [],
    currentTrackIndex: 0,
  });

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
