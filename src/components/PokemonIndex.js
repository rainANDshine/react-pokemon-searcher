import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Loading from './Loading';
import { Search, Button, Form } from 'semantic-ui-react';

class PokemonIndex extends React.Component {
  state = {
    pokemons: [],
    search: null,
    sortTerm: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon').then(r => r.json()).then(pokemons => {this.setState({pokemons})})
  }

  search = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (form) => {
    const newPokemon = {name: form.name, height: form.hp, sprites: {front: form.frontUrl, back: form.backUrl}};
    this.setState({
      pokemons: [...this.state.pokemons, newPokemon]
    })
  }

  sort = (event) => {
    this.setState({
      sortTerm: event.target.name
    })
  }

  render() {
    let pokemons;
    const result = parseInt(this.state.search, 10);

    if (this.state.search === null) {
      pokemons = this.state.pokemons;
    } else if (!result) {
      pokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search));
    } else {
      pokemons = this.state.pokemons.filter(pokemon => parseInt(pokemon.height, 10) >= result);
    }

    switch(this.state.sortTerm) {
      case 'name':
        pokemons = pokemons.sort((a, b) => (a.name.localeCompare(b.name)));
        break;
      case 'height':
        pokemons = pokemons.sort((a, b) => (parseInt(a.height, 10) - parseInt(b.height, 10)));
        break;
      case 'weight':
        pokemons = pokemons.sort((a, b) => (parseInt(a.weight, 10) - parseInt(b.weight, 10)));
        break;
      default:
        pokemons = pokemons.sort((a, b) => (a.name.localeCompare(b.name)));
    }

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Form>
        <Form.Group style={{paddingLeft: '33%'}}>
          <Search onSearchChange={this.search} showNoResults={false} />
          <Button color='orange' name='name' onClick={this.sort}>Sort by Name</Button>
          <Button color='green' name='height' onClick={this.sort}>Sort by HP</Button>
          <Button color='purple' name='weight' onClick={this.sort}>Sort by Weight</Button>
        </Form.Group>
        </Form>
        <PokemonForm submit={this.handleSubmit}/>
        <br />
        <PokemonCollection pokemons={pokemons}/>
        <br />
      </div>
    )
  }
}

export default PokemonIndex;
