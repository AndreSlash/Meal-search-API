import React from 'react';
import './App.css';
const Recipe=(props)=>{
    return(
        <div className="box">
            <h1>
                Meal: {props.title}
            </h1>
            <p>Calories: {props.calories}</p>
            <img src={props.image}></img>
        </div>
    )
}
export default Recipe;