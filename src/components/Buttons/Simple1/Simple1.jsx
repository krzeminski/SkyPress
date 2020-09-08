import React from 'react';
import './Simple1.css';

function Simple1(props){
    return(
        <div className="animation-container">
            <a className="simple1-link" href={props.url}>{props.text}</a>
            <br></br>
            <a className="simple1-link" href={props.url}>{props.text}</a>
        </div>
    );
}

export default Simple1;

