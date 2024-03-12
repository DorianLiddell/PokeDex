import React, { useState } from 'react';
import CaughtCard from '../caughtCard/CaughtCard';
import CaughtPokemonList from './CaughtPokemonList';

function CaughtPokemon() {
    const [caughtPokemons, setCaughtPokemons] = useState([]);

    const addPokemonToCaughtList = (pokemon) => {
        setCaughtPokemons([...caughtPokemons, pokemon]);
    };

    return (
        <div>
            <CaughtCard onCatch={addPokemonToCaughtList} />
            <CaughtPokemonList caughtPokemons={caughtPokemons} />
        </div>
    );
}

export default CaughtPokemon;