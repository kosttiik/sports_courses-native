import { configureStore } from '@reduxjs/toolkit';
import { deviceReducer } from './dataSlice';

export const store = configureStore({ reducer: {device: deviceReducer} });
