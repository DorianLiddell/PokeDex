import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CaughtButton = ({ id, isCaught }) => {
    const [caughtPokemonIds, setCaughtPokemonIds] = useState(
        localStorage.getItem('caughtPokemonIds') ? JSON.parse(localStorage.getItem('caughtPokemonIds')) : []
    );

    useEffect(() => {
        localStorage.setItem('caughtPokemonIds', JSON.stringify(caughtPokemonIds));
    }, [caughtPokemonIds]);

    const handleAddPokemon = () => {
        if (!id || typeof id !== 'number') {
            console.error('Ошибка: (id).');
            return;
        }

        if (caughtPokemonIds.includes(id)) {
            console.log('Этот покемон уже пойман!');
            return;
        }

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                setCaughtPokemonIds(prevIds => [...prevIds, id]);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка данных:', error);
            });
    };

    return (
        <div>
            <button onClick={handleAddPokemon}>
                {isCaught ? 'Release' : 'Catch'}
            </button>
        </div>
    );
};

export default CaughtButton;


