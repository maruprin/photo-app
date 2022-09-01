import { createSlice } from "@reduxjs/toolkit";

const storageKey = 'favorites'

const getFromStorage = () => {
    return localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : []
}


const saveToStorage = photos => { 

    localStorage.setItem(storageKey, JSON.stringify(photos))
    //console.log(photos)
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        photos: getFromStorage(),
    },
    reducers: {
        addPhoto: (state, action) => {
            state.photos.push(action.payload)
            saveToStorage(state.photos)
        },
        deletePhoto: (state, action) => {
            state.photos = state.photos.filter(
                  (item) => item.id !== action.payload.id)
            saveToStorage(state.photos)
        },
        editPhoto: (state, action)=>{
            
            saveToStorage(state.photos)
        }
    }
})

export const {addPhoto, deletePhoto, editPhoto} = favoriteSlice.actions
export const selectFavorites = state => state.favorites.photos
export default favoriteSlice.reducer;

