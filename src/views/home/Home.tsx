import {Outlet, useOutlet} from 'react-router-dom';
import React from "react";
import HeaderComponent from "../../components/header/Header";

function DefaultComponent() {
    return (
        <>
            <HeaderComponent />
            <h1>Homepage</h1>
        </>
    );
}

function HomeComponent() {
    const outlet = useOutlet();
    console.log(outlet);
    return (
        <>
            {outlet ? <Outlet /> : <DefaultComponent />}
        </>
    );
}

export default HomeComponent;
