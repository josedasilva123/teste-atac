import { Dispatch, SetStateAction } from "react";

export type ColorModes = "light" | "dark";

export interface Context {
  colorMode: ColorModes;
  setColorMode: Dispatch<SetStateAction<ColorModes>>;
}
