import React from "react";
import './ButtonDisplay.css'
import Button001 from './ButtonComp/Button001';
import Button002 from './ButtonComp/Button002';
import Button003 from './ButtonComp/Button003';
import Button004 from './ButtonComp/Button004';
import Button005 from './ButtonComp/Button005';
import Button006 from './ButtonComp/Button006';
import Button007 from './ButtonComp/Button007';

const ButtonDisplay = () =>{
    return(
    <>
    <h1 className="Tittle"> Button Effects</h1>
        <div className="container-main">
            <div className="box">
                <h2>BTN001</h2>
                <div className="container"><Button001 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN002</h2>
                <div className="container"><Button002 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN003</h2>
                <div className="container"><Button003 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN004</h2>
                <div className="container"><Button004 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN005</h2>
                <div className="container"><Button005 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN006</h2>
                <div className="container"><Button006 Text = 'Hello World'/></div>
            </div>
            <div className="box">
                <h2>BTN007</h2>
                <div className="container"><Button007 Text = 'Hello World'/></div>
            </div>
        </div>
    </>   
    )
}
export default ButtonDisplay