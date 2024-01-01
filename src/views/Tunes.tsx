import React, {useState} from "react";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// component
const Tunes: React.FC = () => {
    // single source of truht. Jediný zdroj pravdy. Data tečou jen od rodiče k dětem a rodič drží stav a potomci jen přijímají data.
    // state
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([
        {
            id: 1,
            artist: 'Great Artist',
            name: 'Great Song'
        },
        {
            id: 2,
            artist: 'Samčo, brat ďažďovek',
            name: 'Great Song'
        },
        {
            id: 3,
            artist: 'IMT Fron',
            name: 'Preagektovaná'
        }
    ]);

    // callback
    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) + 1,
            artist: data,
            name: data,
        };
       setSongs([...songs, newSong]);
    };

    const handleInputChange = (data: string) => {
        setSearchQuery(data);
    };

    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm
                searchQuery={searchQuery}
                onSearchFormSubmit={handleSearchFormSubmit}
                onInputChange={handleInputChange}
            />
            <TunesList
                songs={songs}
            />
        </article>
    );
};

export default Tunes;
