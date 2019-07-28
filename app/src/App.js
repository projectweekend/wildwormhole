import React from 'react';
import './App.css';
import Deck from "./Deck";
import Pilot from "./Pilot";

function App() {
    let ratings = {
        SAS: 80,
        AERC: 55,
        Cards: 75
    };
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <Deck Name="Testing" House1="Brobnar" House2="Dis" House3="Shadows" Ratings={ratings}></Deck>
                </div>
                <div className="col-4">
                    <Deck Name="Testing" House1="Brobnar" House2="Dis" House3="Shadows" Ratings={ratings}></Deck>
                </div>
                <div className="col-4">
                    <Deck Name="Testing" House1="Brobnar" House2="Dis" House3="Shadows" Ratings={ratings}></Deck>
                </div>
            </div>
            <div className="row">
                <Pilot Name="cloggin"></Pilot>
            </div>
        </div>
    );
}

export default App;
