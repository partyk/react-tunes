import React from "react";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm />
            <TunesList />
        </article>
    );
};

export default Tunes;
