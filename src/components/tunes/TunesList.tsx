import React from "react";

import './TunesList.scss';
import {Song} from '../../types';
import { TransitionGroup, CSSTransition} from "react-transition-group";

// styles
import TunesSong from "./TunesSong";

interface Props {
    songs: Song[],
};

// component
const TunesList: React.FC<Props> = (props) => {
    const {songs} = props;
    // template
    return (
        // obalim vypis a nastavim ze je typu UL
        <TransitionGroup component="ul" className="tunes-list">
            {songs.map(song => (
                <li
                    key={song.id}
                >
                    // Obalim komponentu TuneSong a nastavim
                    // key identifikátor
                    // timeout délka animace
                    // classNames prefix pro tridy animace
                    <CSSTransition key={song.id} timeout={200} classNames="song">
                        <TunesSong
                            song={song}
                        />
                    </CSSTransition>
                </li>
            ))}
        </TransitionGroup>
    );
};

export default TunesList;
