import React from "react";

// style
import './TunesList.scss';
import {Song} from '../../types';

interface Props {
    songs: Song[],
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
                >{song.artist}</li>
            ))}
        </ul>
    );
};

export default TunesList;
