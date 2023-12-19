import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type ThemeType = "light" | "dark";

interface ThemeState {
  value: ThemeType;
}

const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
