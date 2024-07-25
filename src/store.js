import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/useSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
