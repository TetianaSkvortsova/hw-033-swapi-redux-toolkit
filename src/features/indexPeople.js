import {createAsyncResourceSlice} from "./createAsyncResourceSlice.js";

const {reducer, asyncThunk} = createAsyncResourceSlice(
    'people',
    'https://swapi.dev/api/people/'
);
export const getPeopleAsync = asyncThunk;
export default reducer;