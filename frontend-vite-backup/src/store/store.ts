// src/store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './authSlice';
import userReducer from './userSlice';
// Import other reducers:
// import plantTaxonomyReducer from './plantTaxonomySlice';

// Root state type
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // Add other reducers:
  // plantTaxonomy: plantTaxonomyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Store configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.config', 'payload.request', 'error', 'meta.arg'],
      },
    }),
});

// Type for useDispatch hook
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;