import React from "react";

const Pagination = ({ pokePerPage, totalPokemon, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPokemon / pokePerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a href="!#" className="page-link" onClick={() => paginate()}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination