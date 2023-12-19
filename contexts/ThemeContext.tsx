import { createContext } from "react";

export type ThemeContextProps = "light" | "dark";

export const ThemeContext = createContext<ThemeContextProps>("light");
