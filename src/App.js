import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import PokeList from './Components/pokeList/PokeList'
import SinglePage from './Components/singlePage/SinglePage';
import Card from './Components/card/Card';
import CaughtButton from './Components/caughtButton/CaughtButton';
import CaughtPokemonList from './Components/сaughtPokemonList/CaughtPokemonList';
import AppHeader from './Components/appHeader/AppHeader';
import Spinner from './Components/spinner/Spinner'
import Page404 from './Components/page404/Page404';
import './Components/style.css'


function App() {
    const [caughtPokemonIds, setCaughtPokemonIds] = useState([]);
    

    return (
        <Router>
            <div className="app">
                <AppHeader />

                <main>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route exact path="/">
                                <PokeList />
                            </Route>

                            <Route exact path="/catch">
                                <CaughtButton 
                                setCaughtPokemonIds={setCaughtPokemonIds}/>
                            </Route>
                            <Route exact path="/catch/:id">
                                <CaughtPokemonList
                                caughtPokemonIds={caughtPokemonIds}/>
                            </Route>

                            <Route exact path="/pokemon/" >
                                <Card />
                            </Route>
                            <Route exact path="/pokemon/:id" >
                                <SinglePage />
                            </Route>

                            <Route>
                                <Page404 />
                            </Route>

                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}


export default App;
