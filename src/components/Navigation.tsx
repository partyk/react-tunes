import React from 'react';
import {NavLink} from 'react-router-dom';

// styles globalni
// import './Navigation.scss';
// styles scoped lokalni css https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './Navigation.module.scss';

interface Props {
};

const Navigation: React.FC<Props> = () => {
    return (
        <nav className={styles.navigation}>
            <NavLink
                to="/"
                className={({ isActive, isPending, isTransitioning }) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? styles.active : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }
            >Home</NavLink>
            <NavLink
                to="/tunes"
                className={({isActive}) =>
                    [
                        isActive ? styles.active : ""
                    ].join(" ")
                }
            >Tunes</NavLink>
            <NavLink
                to="/about"
                className={({isActive}) => [
                    isActive ? styles.active : ""
                ].join("")}
            >About</NavLink>
        </nav>
    );
}

export default Navigation;
