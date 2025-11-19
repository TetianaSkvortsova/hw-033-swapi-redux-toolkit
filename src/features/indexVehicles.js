import {createAsyncResourceSlice} from "./createAsyncResourceSlice.js";

const {reducer, asyncThunk} = createAsyncResourceSlice(
    'vehicles',
    'https://swapi.dev/api/vehicles/'
);

export const getVehiclesAsync = asyncThunk;
export default reducer;