import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice';
import { locationsReducer } from '../features/locations/locationsSlice';
import { plansReducer } from '../features/plans/plansSlice'
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    plans: plansReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([logger])  
});
