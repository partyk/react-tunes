import {NavLink} from "react-router-dom";
import React from "react";

const HeaderComponent = function () {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tunes">Tunes</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
}

export default HeaderComponent;
