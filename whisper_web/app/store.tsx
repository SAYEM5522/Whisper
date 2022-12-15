import { configureStore } from '@reduxjs/toolkit';
import AudioReducer from "../features/AudioSlice";
export default configureStore({
  reducer: {
    Audio:AudioReducer,
  },
  
});