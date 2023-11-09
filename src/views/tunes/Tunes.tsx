import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../../components/header/Header";

function TunesComponent() {
    return (
        <>
                <HeaderComponent />
                <h1>Tunes</h1>
                <p><Link to="/">Home</Link></p>
        </>
    );
}

export default TunesComponent;
