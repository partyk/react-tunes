import React from 'react';
import './App.scss';
import {Routes, Route} from "react-router-dom";
// components
import Navigation from "./components/Navigation";
// views
import Home from "./views/Home";
import Tunes from "./views/Tunes";
import About from "./views/About";

function App() {
    return (
        <div className="App App-header">
            <header>
                <Navigation />
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/tunes" element={<Tunes />} />
                    <Route path="/about" Component={About} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
