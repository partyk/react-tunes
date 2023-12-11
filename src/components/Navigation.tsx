import React from 'react';
import {NavLink} from 'react-router-dom';

// styles globalni
// import './Navigation.scss';
// styles scoped lokalni css https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './Navigation.module.scss';

interface Props {
    // brand: string
    // brand?: string
    // brand?: number
    brand?: number | string;
    howMany?: number
};

const Navigation: React.FC<Props> = (props) => {
    // props jsou readonly
    const {brand, howMany} = props;
    return (
        <nav className={styles.navigation}>
            <span>
                {/*this is a <strong>{props.brand || 'secondary'}</strong> navigation*/}
                this is a <strong>{brand}, {howMany}</strong> navigation
            </span>
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
