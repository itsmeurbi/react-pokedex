import React from 'react';
import './App.css';
import Main from './Components/Main'
import About from './Components/About'
import Pokedex from './Components/Pokedex'
import Pokemon from './Components/Pokemon'
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/pokedex" component={Pokedex}/>
      <Route exact path="/pokemon/:pokemon" component={Pokemon}/>
    </BrowserRouter>
  );
}

export default App;
