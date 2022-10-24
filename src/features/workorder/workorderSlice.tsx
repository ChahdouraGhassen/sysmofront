import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from "immer";
import { RootState } from "../../app/store";
import { fetchWorkorders } from './workAPI';
export enum Statuses {
    Initial = "Not Fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}

export interface WorkState {
    id?: number;
    matricule?: string;
    chauffeur?: string;
    mecanicien?: string;
    pieces?: string;
    tache?: string;
    created_at?: any;
    updated_at?: any;
}


export interface WorksState {
    workorders: WorkState[];
    status: string;
}

const initialState: WorksState = {
    workorders: [
        {
            id: 0,
            matricule: "",
            chauffeur: "",
            mecanicien: "",
            pieces: "",
            tache: "",
            created_at: "",
            updated_at: "",
        }
    ],
    status: Statuses.Initial
}
export const fetchWorkordersAsync = createAsyncThunk(
    'workorders/fetchWorkorders',
    async()=>{
        const response =await fetchWorkorders();
        return response;
    }
)
export const workorderSlice = createSlice({
    name:"workorders",
    initialState,
    reducers: {} ,
    extraReducers:(builder)=>{
         builder
         .addCase(fetchWorkordersAsync.pending,(state)=>{
            return produce(state,(draftState)=>{
                draftState.status = Statuses.Loading;
            }
            )
         }
         )
         .addCase(fetchWorkordersAsync.fulfilled,(state,action)=>{
            return produce(state,(draftState)=>{
                draftState.workorders=action.payload;
                draftState.status = Statuses.UpToDate;
            }
            )
         }
         )
         .addCase(fetchWorkordersAsync.rejected,(state)=>{
            return produce(state,(draftState)=>{
                draftState.status = Statuses.Error;

            }
            )
         }
         )
    }

})

export const {} = workorderSlice.actions;
export const selectWorkorders =(state: RootState)=> state.workorders.workorders;
export const selectStatus = (state: RootState) => state.workorders.status;
export default workorderSlice.reducer;
