import React from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../../components/header/Header";
function AboutComponent() {
    return (
        <>
            <HeaderComponent />
            <h1>About</h1>
            <p><Link to="/">Home</Link></p>
        </>
    );
}

export default AboutComponent;
