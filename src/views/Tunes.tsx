import React, {useState, ChangeEvent, FormEvent} from "react";

// component
const Tunes: React.FC = () => {
    // state
    const [query, setQuery] = useState('');
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

    const newSong = {
        id: Math.max(...songs.map(s => s.id)) + 1,
        artist: query,
        name: query
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSongs([
            ...songs,
            newSong
        ]);
    }

    // onChange prida se typ přímo z reactu.
    // React.ChangeEvent<HTMLInputElement>
    // nebo si vytahnu jen ChangeEvent<HTMLInputElement>
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // template
    return (
        <div className="tunes">
            <h1>Tunes</h1>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={query}
                    onChange={handleInput}
                />
            </form>
            <ul>
                {songs.map(song => (
                    <li
                        key={song.id}
                    >{ song.artist + ' - ' + song.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tunes;
