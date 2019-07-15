import React from 'react';
import axios from 'axios'
import './pokemon.css'

class Pokemon extends React.Component {
  state = {
    name: '',
    height: 0,
    types: [],
    width: 0,
    sprites: {
      back_default: null,
      front_default: null
    }
  }

  componentDidMount(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pokemon}`)
      .then(res => {
        this.setState({
          ...this.state,
          name: res.data.name,
          height: res.data.height,
          types: res.data.types.map(array => array.type.name),
          width: res.data.width,
          sprites: res.data.sprites
          }
        )
      })
  }

  render(){
    return(
      <div className='pokemon'>
        <img src={this.state.sprites.front_default} alt={this.state.name}></img>
        <h2>{this.state.name}</h2>
        <ul>
          <li>
            { `Height: ${this.state.height}` }
          </li>
          <li>
            { `Width: ${this.state.width}` }
          </li>
          <li>
            { `Types: ${this.state.types}` }
          </li>
        </ul>
      </div>
    )
  }

}

export default Pokemon;
