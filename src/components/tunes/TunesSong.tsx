import React from "react";

// styles
import './TuneSong.scss';
import {Song} from '../../types';
import {truncate} from "lodash-es";

//props
interface Props {
    song: Song
}

const shorten = (value: string, length: number = 55): string => {
    return truncate(value, {
        length,
    });
}

// filtry
// angular PIPES, vue filters, react nemá nic :-)
const songify = (song: Song):string => {
    const newTilte = `${song.artist} - ${song.title}`;
    return shorten(newTilte, 100);
};

// components
const TunesSong: React.FC<Props> = (props) => {
    const {song} = props;
    return (
        <article className="song">
            <div className="inside">
                <h2>{songify(song)}</h2>
                <div className="player">
                    {song.artwork && (
                        <img src={song.artwork} alt="Album"/>
                    )}
                    <audio controls src={song.audioFile}></audio>
                </div>
            </div>
            <footer className="meta">
                {shorten(song.album)}
            </footer>
        </article>
    );
};

export default TunesSong;
