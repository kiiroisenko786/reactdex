import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [
        {
          name: "Bulbasaur",
          id: "pk1"
        },
        {
          name: "Ivysaur",
          id: "pk2"
        },
        {
          name: "Venusaur",
          id: "pk3"
        },
        {
          name: "Squirtle",
          id: "pk4"
        },
        {
          name: "Wartortle",
          id: "pk5"
        },
        {
          name: "Blastoise",
          id: "pk6"
        },
        {
          name: "Charmander",
          id: "pk7"
        },
        {
          name: "Charmeleon",
          id: "pk8"
        },
        {
          name: "Charizard",
          id: "pk9"
        }
      ]
    };
  }
  
  render() {
    return(
      <div className="App">
        {
          this.state.pokemon.map(pokemon => <h1 key={pokemon.id}>{pokemon.name }</h1>)
        }
      </div> 
    )
  }
}

export default App;
