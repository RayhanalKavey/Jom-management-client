import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 4,
  page: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
      state.page = 0;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage, setSize } = paginationSlice.actions;

export default paginationSlice.reducer;
