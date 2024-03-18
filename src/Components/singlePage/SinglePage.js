import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pokeinfo from '../pokeInfo/Pokeinfo';
import { useHistory } from 'react-router-dom';


const SinglePage = () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const [pokemonList, setPokemonList] = useState(null);
    const { id } = useParams();
    const history = useHistory()

    const goBack = () => {
        history.goBack();
    };

    const fetchPokemon = async () => {
        const response = await fetch(apiUrl + `${id}`);
        if (response.ok) {
            const data = await response.json();
            setPokemonList(data);
        } else {
            history.push("/*");
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, [id]);



    return (
        <div>
            <Pokeinfo data={pokemonList} />
            <button style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} onClick={goBack}>
                Go Back
            </button>
        </div>
    );
};

export default SinglePage;

