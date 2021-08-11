import React from 'react';

function PokeItem({ pokemon }) {
  const getTypeStyle = (type) => {
    let backgroundColor = '';
    switch (type) {
      case 'grass':
        backgroundColor = '#9bcc50';
        break;
      case 'poison':
        backgroundColor = '#b97fc9';
        break;
      case 'fire':
        backgroundColor = '#fd7d24';
        break;
      case 'flying':
        backgroundColor = '#3dc7ef';
        break;
      case 'water':
        backgroundColor = '#4592c4';
        break;
      case 'bug':
        backgroundColor = '#729f3f';
        break;
      case 'normal':
        backgroundColor = '#a4acaf';
        break;
      case 'electric':
        backgroundColor = '#eed535';
        break;
      case 'ground':
        backgroundColor = '#ab9842';
        break;
      case 'fairy':
        backgroundColor = '#fdb9e9';
        break;
      case 'fighting':
        backgroundColor = '#d56723';
        break;
      case 'psychic':
        backgroundColor = '#f366b9';
        break;
      case 'rock':
        backgroundColor = '#a38c21';
        break;
      case 'steel':
        backgroundColor = '#9eb7b8';
        break;
      case 'ghost':
        backgroundColor = '#7b62a3';
        break;
      case 'ice':
        backgroundColor = '#51c4e7';
      case 'dragon':
        backgroundColor = '#f16e57';

      default:
        backgroundColor = '#000';
        break;
    }
    return { backgroundColor, color: '#FFF', margin: '5px' };
  };

  return (
    <div className = 'pokeImgContainer'>
      <h1 className = 'txtTitle'>
        N.º {pokemon.id} {pokemon.name}
      </h1>
      <img
        src = {pokemon.sprites['front_default']}
        className = 'pokeImg'
      />
      <div className = 'pokeBoxDetails'>
        <ul className = 'list' >
          {pokemon.types.length > 0 &&
            pokemon.types.map((t, idx) => (
              <li
                key={idx}
                className = 'listItem'
                style={getTypeStyle(t.type.name)}
              >
                {t.type.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PokeItem;