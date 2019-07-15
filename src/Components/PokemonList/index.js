import React from 'react';
import axios from 'axios';
import Item from './item';

class PokemonList extends React.Component {
  state = {
    next_lote: '',
    back_lote: '',
    pokemon: []
  }

  componentDidMount(){
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        const pokemon = res.data.results;
        this.setState({
          ...this.state,
          next_lote: res.data.next,
          back_lote: res.data.previous,
          pokemon: pokemon
        })
      })
  }

  nextLote = () => {
    axios.get(this.state.next_lote)
      .then(res => {
        const pokemon = res.data.results;
        this.setState({
          ...this.state,
          next_lote: res.data.next,
          back_lote: res.data.previous,
          pokemon: this.state.pokemon.concat(...pokemon)
        })
      })
      console.log(this.state.pokemon)
  }

  backLote = () => {
    axios.get(this.state.back_lote)
      .then(res => {
        const pokemon = res.data.results;
        this.setState({
          ...this.state,
          next_lote: res.data.next,
          back_lote: res.data.previous,
          pokemon: pokemon
        })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.pokemon.map(pokemon => <Item key={pokemon.name}>{pokemon}</Item>)}
        </ul>
        {this.state.back_lote != null &&
          <button onClick={this.backLote}>
            Back
          </button>
        }

        {this.state.next_lote != null &&
          <button onClick={this.nextLote}>
            Next
          </button>
        }
      </div>
    )
  }
}

export default PokemonList;
