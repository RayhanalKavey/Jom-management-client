import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("Current-Theme") === "dark" ? "dark" : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem(
        "Current-Theme",
        state.theme === "dark" ? "light" : "dark"
      );
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
