import {createRoot} from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import peopleReducer from './features/indexPeople.js';
import planetsReducer from './features/indexPlanets.js';
import vehiclesReducer from "./features/indexVehicles.js";


export const store = configureStore({
    reducer: {
        people: peopleReducer,
        planets: planetsReducer,
        vehicles: vehiclesReducer,
    },
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
