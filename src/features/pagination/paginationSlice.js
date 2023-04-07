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
      console.log("action in the pagination slice (size)", action.payload);
    },
    setPage: (state, action) => {
      state.page = action.payload;
      console.log("action in the pagination slice (page)", action.payload);
    },
  },
});

export const { setPage, setSize } = paginationSlice.actions;

export default paginationSlice.reducer;
