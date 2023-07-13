import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLogin: false,
  },
  reducers: {
    // : PayloadAction<number>
    setAuth: (state, { payload }) => {
      state.token = payload.token;
      state.isLogin = !!payload.token;
    },
    removeAuth(state) {
      state.token = "";
      state.isLogin = false;
    },
  },
});

const persistConfig = {
  key: "auth",
  storage,
  version: 1,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export default authSlice;
