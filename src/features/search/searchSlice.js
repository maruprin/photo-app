import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (query) => {
    const baseUrl = 'https://api.unsplash.com/'
    const apiKey = 'rWu0S9Zt18V3bWP9sXYyq1dVx3pc9Ut3CK7QUlbUlcQ'
    let url;
   
    if(query&&query.length){
      url = `${baseUrl}search/photos?query=${query}&client_id=${apiKey}&per_page=28`
      const response = await fetch(url);
      const json = await response.json();
      return json.results;
    } else {
      url = `${baseUrl}photos/random?client_id=${apiKey}&count=28`
      const response = await fetch(url);
      const json = await response.json();
      return json;
    }
   
  })

  const searchSlice = createSlice({
    name: 'photos',
    initialState:{
        results:[],
        isLoading: false,
        hasError: false
    },
    reducers: {
      
    },
    extraReducers(builder) {
      builder
        .addCase(fetchPhotos.pending, (state) => {
          state.isLaoding = true
          state.hasError = false
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
          state.isLoading = false
          state.hasError = false
          state.results = action.payload
          
        })
        .addCase(fetchPhotos.rejected, (state) => {
          state.isLoading = false
          state.hasError = true
        })
    }
  })
  


 
  export default searchSlice.reducer;
  export const selectPhotos = (state) => state.photos.results;