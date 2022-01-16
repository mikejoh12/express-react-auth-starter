import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import uiReducer from './features/ui/uiSlice';
import { api } from './services/api';

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  ui: uiReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logOut') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})