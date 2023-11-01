import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import {Routes, Route, NavLink, Link} from "react-router-dom";

function App() {
    return (
        <div className="App App-header">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tunes">Tunes</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" element={<h1>Homepage</h1>}/>
                    <Route path="/tunes" element={(
                        <>
                            <h1>Tunes</h1>
                            <p><Link to="/">Home</Link></p>
                        </>
                    )} />
                    <Route path="/about" element={<h1>About</h1>} />
                </Routes>
            </main>

            <footer>
                <img src={logo} className="App-logo" alt="logo"/>
            </footer>
        </div>
    );
}

export default App;
