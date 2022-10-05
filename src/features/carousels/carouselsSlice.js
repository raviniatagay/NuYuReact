import { CAROUSELS } from '../../app/shared/CAROUSELS';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    carouselsArray: CAROUSELS
};

const carouselsSlice = createSlice({
    name: 'carousels',
    initialState
});

export const carouselsReducer = carouselsSlice.reducer;

export const selectAllCarousels = (state) => {
    return state.carousels.carouselsArray;
};

export const selectCarouselById = (id) => (state) => {
    return state.carousels.carouselsArray.find((carousel) => carousel.id === parseInt(id));
};