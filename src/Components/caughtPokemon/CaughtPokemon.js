
import React from 'react';
import { useState } from 'react';
import CaughtButton from '../caughtButton/CaughtButton';
import CaughtPokemonList from '../сaughtPokemonList/CaughtPokemonList';

const CaughtPokemon = () => {
    const [caughtPokemonIds, setCaughtPokemonIds] = useState([]);

    const handleAddPokemon = (id) => {
        setCaughtPokemonIds([...caughtPokemonIds, id]);
    };

    return (
        <div>
            <CaughtPokemonList caughtPokemonIds={handleAddPokemon} />
        </div>
    );
};

export default CaughtPokemon;


