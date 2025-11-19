import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const createAsyncResourceSlice = (resourceName, apiUrl) => {

    const initialState = {
        data: {
            results: [],
            next: null,
        },
        isLoading: false,
        error: null,
        page: apiUrl, // Динамічний URL
    };

    const asyncThunk = createAsyncThunk(
        `${resourceName}/fetchData`,
        async (api = initialState.page) => {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${resourceName} from ${api}`);
            }
            const result = await response.json();
            return result;
        }
    );

    const slice = createSlice({
        name: resourceName,
        initialState,
        extraReducers: builder => {
            builder.addCase(asyncThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            });

            builder.addCase(asyncThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data.results.push(...action.payload.results);
                state.data.next = action.payload.next;
            });

            builder.addCase(asyncThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Unknown error';
                state.data.results = [];
                state.data.next = null;
            });
        }
    });

    return {
        reducer: slice.reducer,
        asyncThunk: asyncThunk,
    };
};