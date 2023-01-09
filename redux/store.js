import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
