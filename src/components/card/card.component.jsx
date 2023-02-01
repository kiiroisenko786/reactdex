import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt={props.pokemon.name}
        src={props.pokemon.sprite}
        width = "180"
        height = "180"/>
        <h2> {props.pokemon.name} </h2>
        <img alt=""
        src={props.pokemon.type1}
        width = ""
        height = ""/>
        <img alt=""
        src={props.pokemon.type2}/>
        {/* <img alt=""
        src={props.pokemon.type1}
        width = ""
        height = ""/>
        <img alt=""
        src={props.pokemon.type2}/> */}
    </div>
)