import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
