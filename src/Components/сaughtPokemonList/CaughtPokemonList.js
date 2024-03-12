import React from 'react';

function CaughtPokemonList({ caughtPokemons }) {
    return (
        <div>
            
            <ul>
                {caughtPokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name} - {pokemon.type}</li>
                ))}
            </ul>
        </div>
    );
}

export default CaughtPokemonList;