// ============================================================================
// Componente que funciona como un routing/contenedor
// del resto de componentes (detalles y lista)
// ============================================================================
import React, { useEffect, useState } from "react";
import PokemonList from "./ViewComponent";
import PokemonDetail from "./DetailsComponent";
import { getPokemonData } from '../api/PokemonService';
import Button from '@material-ui/core/Button';
import '../pokemon.css';

function HomeComponent() {
  // Uso de un hook para llamar a la api cuando carga la app 
  useEffect(async () => {
    try {
      let pokemons = await getPokemonData(), auxPokemon = pokemons.slice(0,10);
      setPokeList(auxPokemon);
    } catch (err) {
      alert("Error");
    }
  }, []);

  // Hooks de estado para cambiar la lista y el pokemon actual
  const [pokeList, setPokeList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  // Selecciona un item especifico
  const handleSelect = (pokemonId) => {
    setPokemonSelected(pokeList.filter((p) => p.id === pokemonId)[0]); 
  };

  // Retorna un contenedor con los otros componentes
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