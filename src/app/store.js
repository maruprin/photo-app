import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import favoriteReducer from '../features/favorite/favoriteSlice'
export const store = configureStore({
  reducer: {
    photos: searchReducer,
    favorites: favoriteReducer
  },
});
