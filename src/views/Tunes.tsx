import React, {useState} from "react";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // template
    // TOP DOWN DATA FLOW je komunikace mezi rodičem a potomkem
    // props přes data atributy posílám do potomka data
    // přes callback function posílám data zpět rodičovi

    const [title, setTitle] = useState('Tunes')

    const handleSearchFormSubmit = (data: string) => {
        setTitle(data);
    };
    return (
        <article className="tunes">
            <h1>{title}</h1>
            {/* callback function posilam do potomka */}
            <TunesSearchForm
                onSearchFormSubmit={handleSearchFormSubmit}
            />
            <TunesList />
        </article>
    );
};

export default Tunes;
