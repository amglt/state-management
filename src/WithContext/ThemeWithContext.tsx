import { useState } from "react";
import { ThemeContext, ThemeContextProps } from "./ThemeContext.tsx";
import { CurrentThemeWithContext } from "./CurrentThemeWithContext.tsx";

export function ThemeWithContext() {
  const [theme, setTheme] = useState<ThemeContextProps>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <h2>Theme with context</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Click to change the theme
      </button>
      <CurrentThemeWithContext />
    </ThemeContext.Provider>
  );
}
