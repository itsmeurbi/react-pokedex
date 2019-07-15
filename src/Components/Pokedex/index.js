import React from 'react';
import Header from '../Header';
import PokemonList from '../PokemonList';

class Pokedex extends React.Component {

  render(){
    return(
      <div>
        <Header></Header>
        <div className='container'>
          <h1>Hey, this will be the pokedex</h1>
          <PokemonList></PokemonList>
        </div>
      </div>
    )
  }

}

export default Pokedex;
