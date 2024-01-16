import React, {useState} from "react";
import axios from "axios";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // state
    const [songs, setSongs] = useState([]);

    // callback
    const handleSearch = (query: string) => {
       // setSongs([]);
        console.log(query);
        // https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
        axios.get('https://itunes.apple.com/search',{
            params: {
                term: encodeURI(query),
                entity: 'musicTrack',
                limit: 10
            }
        })
            .then(resolve => {
                console.log(resolve);
            })
    };

    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch} />
            <TunesList
                songs={songs}
            />
        </article>
    );
};

export default Tunes;
