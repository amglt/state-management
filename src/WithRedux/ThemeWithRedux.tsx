import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { changeTheme } from "./themeReducer.ts";
import { CurrentThemeWithRedux } from "./CurrentThemeWithRedux.tsx";

export function ThemeWithRedux() {
  const dispatch = useAppDispatch();
  // We could move the logic to the reducer to remove this line
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <>
      <h2>Theme with Redux</h2>
      <button
        onClick={() =>
          dispatch(changeTheme(theme === "light" ? "dark" : "light"))
        }
      >
        Click to change the theme
      </button>
      <CurrentThemeWithRedux />
    </>
  );
}
