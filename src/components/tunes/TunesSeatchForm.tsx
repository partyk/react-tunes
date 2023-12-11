import React, {ChangeEvent, FormEvent, useState} from "react";

// style
import './TunesSearchForm.scss';

interface Props {
    onSearchFormSubmit: (data: string) => void
}

// component
const TunesSearchForm: React.FC<Props> = (props) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchFormSubmit(query);
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // template
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={query}
                onChange={handleInput}
                className="search"
            />
        </form>
    );
};

export default TunesSearchForm;
