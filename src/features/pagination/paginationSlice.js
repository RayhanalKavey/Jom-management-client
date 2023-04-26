import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobTypes: "All Jobs",
  size: 4,
  page: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = Math.ceil(action.payload);
      state.page = 0;
    },
    setPage: (state, action) => {
      state.page = Math.ceil(action.payload);
    },
    setFilteredJob: (state, action) => {
      state.jobTypes = action.payload;
    },
  },
});

export const { setPage, setSize, setFilteredJob } = paginationSlice.actions;

export default paginationSlice.reducer;
