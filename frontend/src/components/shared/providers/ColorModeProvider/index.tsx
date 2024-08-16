import { createContext, useEffect, useState } from "react";
import { ProviderProps } from "../../../../interfaces/context.interface";
import { LocalStorage } from "../../../../enums/localStorage.enum";
import { ColorModes, Context } from "./_interface";

export const ColorModeContext = createContext({} as Context);

export function ColorModeProvider({ children }: ProviderProps) {
  const localColorMode = localStorage.getItem(LocalStorage.COLORMODE);
  const [colorMode, setColorMode] = useState<ColorModes>(
    localColorMode ? (localColorMode as ColorModes) : "light"
  );

  useEffect(() => {
    localStorage.setItem(LocalStorage.COLORMODE, colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
