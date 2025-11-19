import {createAsyncResourceSlice} from "./createAsyncResourceSlice.js";

const {reducer, asyncThunk} = createAsyncResourceSlice(
    'planets',
    'https://swapi.dev/api/planets/'
);

export const getPlanetsAsync = asyncThunk;
export default reducer;