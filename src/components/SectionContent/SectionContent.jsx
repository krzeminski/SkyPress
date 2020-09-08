import React from 'react';
import './SectionContent.css';
import Simple1 from '../Buttons/Simple1/Simple1';

function SectionContent(props){
    return(
        <div className="SectionContent">
            <h2> {props.header}</h2>
            <p>{props.text}</p>
            <Simple1 text={props.linkText} url={props.linkUrl}></Simple1>
        </div>
    );
}

export default SectionContent;