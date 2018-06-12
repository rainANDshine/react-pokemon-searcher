import React from 'react';
import PokemonCollection from './PokemonCollection';
// import PokemonForm from './PokemonForm';
import Loading from './Loading';
import { Search } from 'semantic-ui-react';
const URL = 'http://localhost:3000/pokemon';

class PokemonIndex extends React.Component {
  render() {
    return (
      <div>
        <br />
        <Search onSearchChange={null} showNoResults={false} />
        <br />
        <PokemonCollection />
        <br />
        {/*<PokemonForm />*/}
      </div>
    )
  }
}

export default PokemonIndex;
