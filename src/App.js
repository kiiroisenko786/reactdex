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
        <CardList pokemon = {this.state.pokemon} />
      </div> 
    )
  }
}

export default App;
