import React, {useState} from "react";

// style
import './TunesList.scss';

// component
const TunesList: React.FC = () => {
    const [songs] = useState([
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
    // template
    return (
        <ul className="tunes-list">
            {songs.map(song => (
                <li
                    key={song.id}
                >{song.artist + ' - ' + song.name}</li>
            ))}
        </ul>
    );
};

export default TunesList;
