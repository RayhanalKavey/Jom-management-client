import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJob: false,
  filteredJob: "",
  keyWord: "",
};
const filterSlice = createSlice({
  name: "filterJob",
  initialState,
  reducers: {},
});
export default filterSlice.reducer;
