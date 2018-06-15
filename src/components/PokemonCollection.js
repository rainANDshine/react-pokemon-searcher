import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon =>
          <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.height} weight={pokemon.weight}
          front={pokemon.sprites.front} back={pokemon.sprites.back} picture={pokemon.sprites.front} />
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection;
