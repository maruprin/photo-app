import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../features/search/searchSlice';
import favoriteReducer from '../features/favorite/favoriteSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    photos: searchReducer,
    favorites: favoriteReducer
  },
});
