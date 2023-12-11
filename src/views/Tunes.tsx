import React from "react";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // template
    // TOP DOWN DATA FLOW je komunikace mezi rodičem a potomkem
    // props přes data atributy posílám do potomka data
    // přes callback function posílám data zpět rodičovi
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm />
            <TunesList />
        </article>
    );
};

export default Tunes;
