import React from "react";
import './Text014.css';

const Text014 = (props) => {
    return (
        <div className="Text014-container">
            {props.Text.split("").map((char, index) => (
                <span id="Text014" key={index} style={{ '--i': index + 1 }}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default Text014;
