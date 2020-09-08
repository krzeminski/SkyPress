import React from 'react';
import './Button.css';

function Button(props){
    return(
        <button type="button" className="Button" >
            {props.text}
        </button>
    );
}

export default Button;