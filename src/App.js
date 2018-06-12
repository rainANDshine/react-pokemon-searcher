import React from 'react';
import PokemonIndex from './components/PokemonIndex';
import './App.css';
import pokeball from './pokeball.png';
import background from './pokebackground.png';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={pokeball} className="App-logo" alt="pokeball" />
      <h1>Pokemon Searcher</h1>
    </header>
    <PokemonIndex />
  </div>
)

export default App;
