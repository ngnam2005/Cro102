import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        imageUri: null,
    },
    reducers: {
        setImage: (state, action) => {
            state.imageUri = action.payload;
        },
    },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
