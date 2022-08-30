import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async (query) => {
    const baseUrl = 'https://api.unsplash.com/'
    const apiKey = 'rWu0S9Zt18V3bWP9sXYyq1dVx3pc9Ut3CK7QUlbUlcQ'
    query= 'dog'
    const response = await fetch(`${baseUrl}search/photos?query=${query}&client_id=${apiKey}&per_page=10`);
    const json = await response.json();
    console.log(json.results)
    return json.results;
  })

  export const selectPhotos = (state) => state.photos;
  
  const searchSlice = createSlice({
    name: 'photos',
    initialState:{
        resultsStatic:[],
        filteredResults:[],
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
          state.resultsStatic = action.payload
          
        })
        .addCase(fetchPhotos.rejected, (state) => {
          state.isLoading = false
          state.hasError = true
        })
    }
  })
  


 
  export default searchSlice.reducer;