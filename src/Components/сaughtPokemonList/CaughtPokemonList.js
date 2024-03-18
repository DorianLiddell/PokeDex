import React from 'react';
import Spinner from '../spinner/Spinner';

const СaughtPokemonList = ({ caughtPokemonIds }) => {

    return (
        <>
            {
                (!caughtPokemonIds) ? <Spinner /> : (
                    <div>
                        <h2>Список пойманных покемонов:</h2>
                        <ul>
                            {caughtPokemonIds.map((id) => (
                                <li key={id}>Покемон с id: {id}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    )
}
export default СaughtPokemonList

