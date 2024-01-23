import React, {useMemo, useEffect} from "react";

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

// components
const TunesSong: React.FC<Props> = (props) => {
    const {song} = props;

    // useMemo cache MEMOIZATION
    // ma dva parametry, funkce co se spusti a vstupní parametry pole
    const songify = useMemo(
        () => (song: Song): string => {
            const newTilte = `${song.artist} - ${song.title}`;
            return shorten(newTilte, 100);
        }, [song.title, song.artist]
    );

    // useEffect side effect mount (componentDidMount)
    // useEffect se spusti jen 1x pokud dáme druhý parametr prazdný pole
    useEffect(() => {
        console.log('!! side');
    }, []);

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
