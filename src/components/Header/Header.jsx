import React from 'react';
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {getPeopleAsync} from "../../features/indexPeople.js";
import {getPlanetsAsync} from "../../features/indexPlanets.js";
import {getVehiclesAsync} from "../../features/indexVehicles.js";

function Header() {

    const dispatch = useDispatch();
    const handleFetchPeople = () => dispatch(getPeopleAsync());
    const handleFetchPlanets = () => dispatch(getPlanetsAsync());
    const handleFetchVehicles = () => dispatch(getVehiclesAsync());

    const peopleDataLoaded = useSelector(state => state.people.data.results.length > 0);
    const planetsDataLoaded = useSelector(state => state.planets.data.results.length > 0);
    const vehiclesDataLoaded = useSelector(state => state.vehicles.data.results.length > 0);

    return (
        <div className="header">
            <div className="people">
                <button
                    type="button"
                    onClick={handleFetchPeople}
                    disabled={peopleDataLoaded}
                >People</button>
            </div>
            <div className="planets">
                <button
                    type="button"
                    onClick={handleFetchPlanets}
                    disabled={planetsDataLoaded}
                >Planets</button>
            </div>
            <div className="vehicles">
                <button
                    type="button"
                    onClick={handleFetchVehicles}
                    disabled={vehiclesDataLoaded}
                >Vehicles</button>
            </div>
        </div>
    );
}

export default Header;