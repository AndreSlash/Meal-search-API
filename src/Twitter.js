import React from 'react';
import './App.css';
function Twitter(props){
    return(
        <div className="container">
            <p>{props.name}</p>
            <p>{props.text}</p>
        </div>
    )
}
export default Twitter;