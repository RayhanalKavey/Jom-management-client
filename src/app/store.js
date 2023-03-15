import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import themeSlice from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
});
export default store;
