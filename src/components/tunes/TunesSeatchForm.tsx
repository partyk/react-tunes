import React, {ChangeEvent, FormEvent, useState} from "react";

// style
import './TunesSearchForm.scss';


// component
const TunesSearchForm: React.FC = () => {
    const [query, setQuery] = useState('');

    /* const newSong = {
        id: Math.max(...songs.map(s => s.id)) + 1,
        artist: query,
        name: query
    }; */

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /* setSongs([
            ...songs,
            newSong
        ]); */
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // template
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={query}
                onChange={handleInput}
                className="search"
            />
        </form>
    );
};

export default TunesSearchForm;
