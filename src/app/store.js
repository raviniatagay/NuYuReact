import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice';
import { locationsReducer } from '../features/locations/locationsSlice';
import { plansReducer } from '../features/plans/plansSlice';
import { classesReducer } from '../features/classes/classesSlice';
import { carouselsReducer } from '../features/carousels/carouselsSlice';


export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    plans: plansReducer,  
    classes: classesReducer,  
    user: userReducer,
    carousels: carouselsReducer
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([logger])  
});
