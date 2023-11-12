import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom";
// components
import Navigation from "./components/Navigation";
import TestInlineStyle from "./components/TestInlineStyle";
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
            <TestInlineStyle />

            <main className="content">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/tunes" element={<Tunes />} />
                    <Route path="/about" Component={About} />
                </Routes>
            </main>

            <footer>
                <img src={logo} className="App-logo" alt="logo"/>
            </footer>
        </div>
    );
}

export default App;
