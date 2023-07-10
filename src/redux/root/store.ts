import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import authReducer from "../silces/authSlice";
import homeReducer from "../silces/homeSlide";
import productReducer from "../silces/productSlide";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./saga";
import wineReduce from "../silces/wineSlide";
import notificationReduce from "../silces/notificationSlide";
import cartReduce from "../silces/cartSlide";
import orderReduce from "../silces/orderSlide";

const sagaMiddleware = createSagaMiddleware();

const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    home: homeReducer,
    product: productReducer,
    wine: wineReduce,
    notification: notificationReduce,
    cart: cartReduce,
    order: orderReduce
  });

const tes = () => {
  const store = configureStore({
    reducer: createRootReducer(),
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(sagaMiddleware);
    },
  });
  return store;
};

const store = tes();

export default store;

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
