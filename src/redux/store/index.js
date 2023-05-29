import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { cartReducer } from "../reducer/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY })]
};

const rootReducer = combineReducers({
  lortolano: mainReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
