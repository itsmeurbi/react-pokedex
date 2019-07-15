import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return(
    <div className="pokeContainer">
      <Link to={`/pokemon/${props.children.name}`}>
        <h4>{props.children.name}</h4>
      </Link>
    </div>
  )
}

export default Item;
