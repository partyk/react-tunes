import React from "react";

// style
import './TunesList.scss';

interface Props {
    songs: {
        id: number,
        artist: string,
        name: string
    }[],
};

// component
const TunesList: React.FC<Props> = (props) => {
    const {songs} = props;
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
