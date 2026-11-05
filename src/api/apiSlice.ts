import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCollection } from "../services/apiService";

interface ApiState { collections: Record<string, unknown[]>; }

const initialState: ApiState = {

    collections: {}

};

export const fetchCollection = createAsyncThunk(

    "api/fetchCollection",

    async (collection: string) => {

        const data = await getCollection(collection);

        return {

            collection,
            data

        };

    }

);

const apiSlice = createSlice({

    name: "api",

    initialState,

    reducers: {},

    extraReducers: () => {



    }

});

export default apiSlice.reducer;