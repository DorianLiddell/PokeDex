import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pokeinfo from '../pokeInfo/Pokeinfo';


const SinglePage = () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const [pokemonList, setPokemonList] = useState(null);
    const { id } = useParams();

    const fetchPokemon = async () => {
        const response = await fetch(apiUrl + `${id}`);
        const data = await response.json();
        console.log(data)
        setPokemonList(data);
    }

    useEffect(() => {
        fetchPokemon();
    }, [id]);


    return (
        <div>
            <Pokeinfo data={pokemonList} />
        </div>
    );
};

export default SinglePage;

