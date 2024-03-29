import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemon => this.setState({ pokemon : pokemon }))
  }
  
  render() {
    const { pokemon, searchField } = this.state;
    const filteredmons = pokemon.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <input
          type="search" placeholder='Search Kanto Dex'
          onChange={e =>
            this.setState({ searchField: e.target.value })}/>
        <CardList pokemon = {filteredmons} />
      </div> 
    )
  }
}

export default App;
