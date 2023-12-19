import { useAppSelector } from "./hooks.ts";

export function CurrentThemeWithRedux() {
  const theme = useAppSelector((state) => state.theme.value);

  return <p>Your current theme is {theme}</p>;
}
