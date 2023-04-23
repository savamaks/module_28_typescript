import React from "react";
import "./App.scss";
import Table from "./table/index";
import { usersArray } from "./data";


function App() {
    return (
        <div className="app">
            <Table users={usersArray} />
        </div>
    );
}

export default App;
