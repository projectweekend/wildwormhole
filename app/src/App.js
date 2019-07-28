import React from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from "./Deck";

function App() {
    let ratings = {
        SAS: 80,
        AERC: 55,
        Cards: 75
    };
    return (
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
    );
}

export default App;
