import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/Intro/Intro";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Intro />
        </div>
    );
}

export default App;
