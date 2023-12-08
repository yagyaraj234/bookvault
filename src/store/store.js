import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import productSlice from "./product/productSlice";

import cartSlice from "./cart/cartSlice";
const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({ cartSlice, productSlice });

const persistedReducer = persistReducer(persistConfiguration, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
