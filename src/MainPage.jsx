import React from 'react';
import List from "./components/List/List.jsx";
import {getPeopleAsync} from "./features/indexPeople.js";
import {getPlanetsAsync} from "./features/indexPlanets.js";
import {getVehiclesAsync} from "./features/indexVehicles.js";
import Header from "./components/Header/Header.jsx";

function MainPage() {
    return (
        <>
            <Header/>
            <div className="container">
                <List resourceName="people" fetchAction={getPeopleAsync}/>
                <List resourceName="planets" fetchAction={getPlanetsAsync}/>
                <List resourceName="vehicles" fetchAction={getVehiclesAsync}/>
            </div>
        </>
    );
}

export default MainPage;
