import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.tsx";

export function CurrentThemeWithContext() {
  const themeContext = useContext(ThemeContext);

  return <p>Your current theme is {themeContext}</p>;
}
