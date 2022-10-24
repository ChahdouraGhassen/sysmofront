import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from "immer";
import { RootState } from "../../app/store";
import { fetchCommandeOrders } from './commandeAPI';
export enum Statuses {
    Initial = "Not Fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}

export interface CommandeState {
    id?: number;
    nompiece?: string;
    quantite?: string;
    quantitestock?: string;
    created_at?: any;
    updated_at?: any;
}


export interface CommandesState {
    commandeorders: CommandeState[];
    status: string;
}

const initialState: CommandesState = {
    commandeorders: [
        {
            id: 0,
            nompiece: "",
            quantite: "",
            quantitestock: "",
            created_at: "",
            updated_at: "",
        }
    ],
    status: Statuses.Initial
}
export const fetchCommandeOrdersAsync = createAsyncThunk(
    'commandeorders/fetchCommandeOrdersAsync',
    async()=>{
        const response =await fetchCommandeOrders();
        return response;
    }
)
export const commandeorderSlice = createSlice({
    name:"workorders",
    initialState,
    reducers: {} ,
    extraReducers:(builder)=>{
         builder
         .addCase(fetchCommandeOrdersAsync.pending,(state)=>{
            return produce(state,(draftState)=>{
                draftState.status = Statuses.Loading;
            }
            )
         }
         )
         .addCase(fetchCommandeOrdersAsync.fulfilled,(state,action)=>{
            return produce(state,(draftState)=>{
                draftState.commandeorders=action.payload;
                draftState.status = Statuses.UpToDate;
            }
            )
         }
         )
         .addCase(fetchCommandeOrdersAsync.rejected,(state)=>{
            return produce(state,(draftState)=>{
                draftState.status = Statuses.Error;

            }
            )
         }
         )
    }

})

export const {} = commandeorderSlice.actions;
export const selectCommandeorders =(state: RootState)=> state.commandeorders.commandeorders;
export const selectStatus = (state: RootState) => state.commandeorders.status;
export default commandeorderSlice.reducer;
