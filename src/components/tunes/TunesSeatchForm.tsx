import React, {ChangeEvent, FormEvent} from "react";

// style
import './TunesSearchForm.scss';

interface Props {
    searchQuery: string,
    onSearchFormSubmit: (data: string) => void
    onInputChange: (data: string) => void
}

// component
const TunesSearchForm: React.FC<Props> = (props) => {
    const {searchQuery} = props;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchFormSubmit(searchQuery);
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value);
    };

    // template
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchQuery}
                onChange={handleInput}
                className="search"
            />
        </form>
    );
};

export default TunesSearchForm;
