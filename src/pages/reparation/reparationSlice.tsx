import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import {RootState} from "../../app/store";
import { fetchReparations } from "./reparationAPI";

export enum Statuses {
    Initial = "Not Fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}
export interface ReparationsState {
    id?: number;
    numero?: string;
    nameclient?: string;
    created_at?: any;
    updated_at?: any;
}
export interface ReparationState {
    reparation: ReparationsState[];
    status: string;
}

const initialState:ReparationState={
    reparation:[
        {
        id: 0,
        numero: "",
        nameclient: "",
        created_at: "",
        updated_at: "",
     }
    ],
    status:Statuses.Initial
}
export const fetchReparationsAsync = createAsyncThunk(
    'reparation/fetchReparations',
    async () => {
        const response = await fetchReparations();
        return response;
    }
)

export const reparationSlice = createSlice({
    name: "reparation",
    initialState,
    /**
     * Synchronous actions
     */
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReparationsAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(fetchReparationsAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.reparation = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(fetchReparationsAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })                    
    }
})
export const {} = reparationSlice.actions;
export const selectReparations = (state: RootState) => state.reparation.reparation;
export const selectStatus = (state: RootState) => state.reparation.status;
export default reparationSlice.reducer;


