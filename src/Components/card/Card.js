import React from "react";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom"
import CaughtButton from "../caughtButton/CaughtButton";

const Card = ({ pokemon, loading, handlePokemonCaught}) => {
    

    return (
        <>
            {loading ? <Spinner /> :
                pokemon.map((item) => (
                    <div className="card" key={item.id}>
                        <Link to={`/pokemon/${item.id}`}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default} alt="" />
                            <h2>{item.name}</h2>
                        </Link>
                        <div className="catch-card">
                        <CaughtButton 
                                id={item.id}  
                                isCaught={item.isCaught} 
                            />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Card;