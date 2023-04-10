import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../sagas/authSlice';
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware()

const createRootReducer = () => combineReducers({
  auth: authReducer,
})


export const store = configureStore({
  reducer: createRootReducer(),
  middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(sagaMiddleware)
  },
});

sagaMiddleware.run(rootSagas)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
