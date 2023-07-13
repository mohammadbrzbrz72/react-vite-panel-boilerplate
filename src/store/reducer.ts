import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./features/user";
import { authReducer } from "./features/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

//? by bottom code you can persist all reducers
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// const persistConfig = {
//   key: "all",
//   storage,
//   version: 1,
// };
// export default persistReducer(persistConfig, rootReducer);

export default rootReducer;
