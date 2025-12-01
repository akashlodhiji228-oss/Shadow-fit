import { createContext, useState } from "react";

export const GameContext = createContext({
  score: 0,
  setScore: (value: number) => {},
});

export const GameProvider = ({ children }: any) => {
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};
