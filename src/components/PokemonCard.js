import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    src: this.props.picture
  }

  handleMouse = event => {
    if(this.state.src === this.props.front) {
      this.setState({ src: this.props.back })
    } else {
      this.setState({ src: this.props.front })
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
            <img alt="oh no!" src={this.state.src} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
          <div className="extra content">
            <span>
              <i className="icon weight red" />
              {this.props.weight} lbs
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard;
