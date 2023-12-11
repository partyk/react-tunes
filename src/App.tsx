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
    const myProps = 'main';
    return (
        <div className="App App-header">
            <header>
                {/*<Navigation*/}
                {/*    brand="main"*/}
                {/*/>*/}
                {/*<Navigation*/}
                {/*    brand={30 * 2 + 10}*/}
                {/*/>*/}
                <Navigation
                    brand={myProps}
                    howMany={56}
                />
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/tunes" element={<Tunes />} />
                    <Route path="/about" Component={About} />
                </Routes>
            </main>

            <footer>
                <Navigation
                    brand="secondary"
                />
            </footer>
        </div>
    );
}

export default App;
