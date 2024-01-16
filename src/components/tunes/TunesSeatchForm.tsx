import React, {useRef, ChangeEvent, FormEvent} from "react";
// pridam debounce z
import {debounce} from "lodash-es";

// style
import './TunesSearchForm.scss';

interface Props {
    onSearch: (query: string) => void
}

// component
const TunesSearchForm: React.FC<Props> = (props) => {
    // function components nemohu volat methody setState, componentDidMount a ani React.createRef, ale musíš pouýít hook
    // hook useRef
    const searchInput = useRef<HTMLInputElement>(null);

    // handleSubmit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchForMusic();
    }

    // handleInput
    const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic();
    }, 500);

    // seaarch for music
    const searchForMusic = () => {
        // Po staru
        /* if (searchInput.current !== null) {
            console.log(searchInput.current.value);
        } */
        // OPTIONAL CHAINING ?.
        // console.log(searchInput.current?.value);
        let searchString = searchInput.current?.value;
        if (searchString) {
            props.onSearch(searchString);
        }
    };

    // template
    // stav inputu se nechá zjednodušit a zjistit přes refs. Nepotřebujeme si držet stav inputu
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                autoFocus // přidám si automatický focus na input
                type="text"
                ref={searchInput}
                onChange={handleInput} // react používá onChange ostatní frameworky používají onInput
                className="search"
            />
        </form>
    );
};

export default TunesSearchForm;
