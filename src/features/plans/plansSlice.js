import { PLANS } from '../../app/shared/PLANS';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    plansArray: PLANS
};

const plansSlice = createSlice({
    name: 'plans',
    initialState
});

export const plansReducer = plansSlice.reducer;

export const selectAllPlans = (state) => {
    return state.plans.plansArray;
};

export const selectPlanById = (id) => (state) => {
    return state.plans.plansArray.find((plan) => plan.id === parseInt(id));
};