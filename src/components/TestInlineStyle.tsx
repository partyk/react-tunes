import React from "react";

const styles = {
    backgroundColor: 'palevioletred',
    color: 'papayawhip'
};

const TestInlineStyle: React.FC = () => {
    return (
        <button
            type="button"
            style={styles}
        >
            Inline style
        </button>
    )
}

export default TestInlineStyle;
