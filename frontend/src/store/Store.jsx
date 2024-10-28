import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/Index";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
