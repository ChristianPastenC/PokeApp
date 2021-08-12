import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../pokemon.css';

function Pokedex({ pokemons, actPokemon }) {

  const drawPokemon = () => {
    return pokemons.map((p, id) => (
    <Card key = {id} onClick = {() => actPokemon(p.id)} className = 'card'>
      <CardActionArea>
        <CardMedia
          component="img"
          image= {p.sprites.front_default}
          title="Pokémon Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {p.name.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ));
  };

  return <div className = 'pokedex'>
            {pokemons.length > 0 && drawPokemon()}
          </div>;
}

export default Pokedex;