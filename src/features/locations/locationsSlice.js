import { LOCATIONS } from '../../app/shared/LOCATIONS';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    locationsArray: LOCATIONS
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState
});

export const locationsReducer = locationsSlice.reducer;

export const selectAllLocations = (state) => {
    return state.locations.locationsArray;
};

export const selectLocationById = (id) => (state) => {
    return state.locations.locationsArray.find((location) => location.id === parseInt(id));
};

export const selectFeaturedLocation = (state) => {
    console.log(state)
    return state.locations.locationsArray.find((location) => location.featured);
};