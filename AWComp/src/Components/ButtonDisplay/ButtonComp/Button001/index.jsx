import React from "react";
import './Button001.css';

const Button001 = (props) =>{
    return(
        <button className="Button001">
            <span>{props.Text}</span>
        </button>
    )
}
export default Button001