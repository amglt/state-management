import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export function CurrentThemeWithContext() {
  const theme = useContext(ThemeContext);

  return <p>Your current theme is {theme}</p>;
}
