import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reparationReducer from "../pages/reparation/reparationSlice";
import worksReducer from "../features/workorder/workorderSlice";
import commandesReducer from "../features/commandeorder/commandeorderSlice"
export const store = configureStore({
  reducer: {
    reparation:reparationReducer,
    workorders:worksReducer,
    commandeorders:commandesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
