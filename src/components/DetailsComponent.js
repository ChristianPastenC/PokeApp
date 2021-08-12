// ============================================================================
// Componente que muestra los detalles de un item especifico
// muestra un card de material UI con la imagen, nombre y
// otros datos 
// ============================================================================
import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../pokemon.css';

function PokeItem({ pokemon }) {
  return (
    <Card className = 'cardSelected'>
      <CardActionArea>
        <CardMedia
          component="img"
          image= {pokemon.sprites.front_default}
          title="Pokémon Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Types:
          {pokemon.types.length > 0 &&
            pokemon.types.map((t, idx) => (
              <li key={idx} className='type'>
                {t.type.name}
              </li>
          ))}
          </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Weight: {pokemon.weight}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Height: {pokemon.height}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokeItem;