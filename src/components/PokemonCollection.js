import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

const PokemonCollection = props => {
  const pokemons = props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons}
    </Card.Group>
  )
}

export default PokemonCollection;
