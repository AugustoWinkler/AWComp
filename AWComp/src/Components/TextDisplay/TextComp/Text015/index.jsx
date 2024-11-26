import React from "react";
import './Text015.css';

const Text015 = (props) => {
    return (
        <div className="Text015-container">
            {props.Text.split("").map((char, index) => (
                <span id="Text015" key={index} style={{ '--i': index + 1 }}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default Text015;
