import React from "react";

import './TunesList.scss';
import {Song} from '../../types';
import TunesSong from "./TunesSong";

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
                >
                    <TunesSong
                        song={song}
                    />
                </li>
            ))}
        </ul>
    );
};

export default TunesList;
