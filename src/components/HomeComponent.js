import React, { useEffect, useState } from "react";
import PokemonList from "./ViewComponent";
import PokemonDetail from "./DetailsComponent";
import { getPokemonData } from '../api/PokemonService';
import Button from '@material-ui/core/Button';
import '../pokemon.css';

function HomeComponent() {
  useEffect(async () => {
    try {
      let pokemons = await getPokemonData(), auxPokemon = pokemons.slice(0,10);
      setPokeList(auxPokemon);
    } catch (err) {
      alert("Error");
    }
  }, []);

  const [pokeList, setPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]); 
  };

  return (
    <div className = 'mainContainer'>
      <div className = 'selected'>
        {pokemonSelected && <PokemonDetail pokemon={pokemonSelected} />}
      </div>
      <div className = 'list'>
        <PokemonList
          pokemons = {pokeList}
          actPokemon = {handleSelect}
        />
        <br></br>
        <Button variant="contained" color="secondary" onClick = {async () => {
          let pokemons = await getPokemonData(), auxPokemon = pokemons.slice(0,10);
          setPokeList(auxPokemon);
        }}>Anterior</Button>
        <Button variant="contained" color="secondary" onClick = {async () => {
          let pokemons = await getPokemonData(), auxPokemon = pokemons.slice(10,20);
          setPokeList(auxPokemon);
        }}>Siguiente</Button>
      </div>
    </div>
  );    
}
export default HomeComponent;