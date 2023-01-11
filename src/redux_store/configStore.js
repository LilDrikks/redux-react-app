import { configureStore } from '@reduxjs/toolkit';
import contador from './contador';

export const store = configureStore({reducer: contador}) 
