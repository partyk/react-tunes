import React from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
};

const NavigationComponent: React.FC<Props> = () => {
    return (
        <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tunes">Tunes</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}

export default NavigationComponent;
