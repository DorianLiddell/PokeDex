import React from 'react';

function CaughtCard({ onCatch }) {
    const pokemonData = {
        item: {}
    };

    const handleCatchPokemon = () => {
        onCatch(pokemonData);
    };

    return (
        <div>
            <button onClick={handleCatchPokemon}>Catch</button>
        </div>
    );
}

export default CaughtCard;