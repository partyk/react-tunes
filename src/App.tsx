import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom";
// components
import NavigationComponent from "./components/NavigationComponent";
// views
import HomeComponents from "./views/HomeComponents";
import TunesComponent from "./views/TunesComponent";
import AboutComponent from "./views/AboutComponent";

function App() {
    return (
        <div className="App App-header">
            <header>
                <NavigationComponent />
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" Component={HomeComponents} />
                    <Route path="/tunes" element={<TunesComponent />} />
                    <Route path="/about" Component={AboutComponent} />
                </Routes>
            </main>

            <footer>
                <img src={logo} className="App-logo" alt="logo"/>
            </footer>
        </div>
    );
}

export default App;
