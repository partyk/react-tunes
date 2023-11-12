import React from "react";

function Title(): React.ReactElement<HTMLTitleElement> {
    return (
        <h1>Tunes</h1>
    )
}

const TunesComponent: React.FC = () => {
    return (
        <div className="tunes">
            <Title />
            <p>play me the sounds</p>
        </div>
    );
};

export default TunesComponent;
