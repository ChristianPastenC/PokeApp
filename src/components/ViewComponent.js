import React from "react";

function Pokedex({ pokemons, actPokemon }) {
    const drawItems = () => {
      return pokemons.map((p, id) => (
        <li
          key={id}
          onClick={() => actPokemon(p.id)}
          className={
            p.selected
              ? "list-group-item d-flex pokemon-item-list selected" // the selected class is to highlight the Pokemon selected
              : "list-group-item d-flex pokemon-item-list"
          }
        >
          <img className="col-3" src={p.sprites.front_default} />
          <p className="col-4 pokemon-text-list">N.º {p.id}</p>
          <p className="col-5 pokemon-text-list">{p.name}</p>
        </li>
      ));
    };
  
    return <ul className="list-group">{pokemons.length > 0 && drawItems()}</ul>;
  }
  
  export default Pokedex;