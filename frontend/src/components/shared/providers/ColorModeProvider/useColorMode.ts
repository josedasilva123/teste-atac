import { useContext } from "react";
import { ColorModeContext } from ".";

export const useColorMode = () => useContext(ColorModeContext);