import { CLASSES } from '../../app/shared/CLASSES';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    classesArray: CLASSES
};

const classesSlice = createSlice({
    name: 'classes',
    initialState
});

export const classesReducer = classesSlice.reducer;

export const selectAllClasses = (state) => {
    return state.classes.classesArray;
};

export const selectClassById = (id) => (state) => {
    return state.classes.classesArray.find((wclass) => wclass.id === parseInt(id));
};