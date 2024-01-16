import React, {useState} from "react";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // state
    const [songs, setSongs] = useState([]);

    // callback
    const handleSearchFormSubmit = (data: string) => {
       setSongs([]);
    };

    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm />
            <TunesList
                songs={songs}
            />
        </article>
    );
};

export default Tunes;
