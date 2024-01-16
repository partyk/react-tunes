import React, {useState} from "react";
import { Song } from "../types";
import axios from "axios";

// children
import TunesSearchForm from "../components/tunes/TunesSeatchForm";
import TunesList from "../components/tunes/TunesList";

// data types
interface SongFromiTunes {
    trackId: number,
    artistName: string,
    previewUrl: string,
    artworkUrl100?: string,
    trackName: string,
    collectionName: string,
    kind?: string
};


// component
const Tunes: React.FC = () => {
    // state
    const [songs, setSongs] = useState([]);

    // callback
    const handleSearch = (query: string) => {
        // https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
        axios.get('https://itunes.apple.com/search',{
            params: {
                term: encodeURI(query),
                entity: 'musicTrack',
                limit: 10
            }
        })
            .then(result => {
                let iTunesSongs = result.data.results
                    // odfiltruji jen songy
                    .filter((song: SongFromiTunes) => song.kind === 'song')
                    // udělam destruct dat nepotřebuji všechna data
                    .map((song: SongFromiTunes) => extractData(song));
                setSongs(iTunesSongs);
            })
    };

    // ts-ignore
    // provedu destruct data { trackName }
    // klice si mohu přejmenovat -> { trackName: title }
    const extractData = ({
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album
    }: SongFromiTunes) => {
        return {
            id,
            artist,
            audioFile,
            artwork,
            title,
            album
        } as Song; // toto pole bude typu Song
    }

    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch} />
            <TunesList
                songs={songs}
            />
        </article>
    );
};

export default Tunes;
