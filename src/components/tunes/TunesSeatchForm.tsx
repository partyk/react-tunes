import React, {useRef, ChangeEvent, FormEvent} from "react";

// style
import './TunesSearchForm.scss';

interface Props {}

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
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic();
    };

    // seaarch for music
    const searchForMusic = () => {
        // Po staru
        /* if (searchInput.current !== null) {
            console.log(searchInput.current.value);
        } */
        // OPTIONAL CHAINING ?.
        console.log(searchInput.current?.value);
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
