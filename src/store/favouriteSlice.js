import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourites : []
}

const favouriteSlice = createSlice({
    name : 'favourite',
    initialState,
    reducers : {
       addFavourite : (state, action) => {
        state.favourites.push(action.payload)
       },
       removeFavourite : (state, action) => {
        state.favourites = state.favourites.filter((item) => item.id != action.payload.id)
       }
    }
})

export const {addFavourite, removeFavourite} = favouriteSlice.actions
export default favouriteSlice.reducer