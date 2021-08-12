// ============================================================================
// Pokemon Service llama a ApiService y ApiUtils para llamar a pokeapi
// ============================================================================
import ApiService from './ApiService';

export const getPokemon = async () => {
    try {
        let response = await ApiService.get('https://pokeapi.co/api/v2/pokemon');
    return response.results;
    } catch (err) { throw err;  }
};

export const getData = async (url) => {
    try {
        let response = await ApiService.get(url);
    return response;
    } catch (err) { throw err;  }
};


export const getPokemonData = async () => {
    try {
      //Obtenemos una lista con todos los pokémon de la Api
      let pokemons = await getPokemon();
  
      //Obtenemos los datos de cada pokémon
      let pokemonPromises = pokemons.map((p) => getData(p.url));
  
      //La función devuelve toda la información
      return await Promise.all(pokemonPromises);
    } catch (err) { throw err;  }
};