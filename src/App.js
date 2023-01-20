import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemon => this.setState({ pokemon : pokemon }))
  }
  
  render() {
    return(
      <div className="App">
        <CardList name="Taahaa">
        {
          this.state.pokemon.map(pokemon => <h1 key={pokemon.id}>{pokemon.name }</h1>)
        }
        </CardList>
      </div> 
    )
  }
}

export default App;
