import React from 'react';
import { Card } from 'semantic-ui-react';

const PokemonCard = props => {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={props.pokemon.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokemon.height}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard;
