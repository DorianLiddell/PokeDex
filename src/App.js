import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import PokeList from './Components/pokeList/PokeList'
import SinglePage from './Components/singlePage/SinglePage';
import Card from './Components/card/Card';

import AppHeader from './Components/appHeader/AppHeader';
import Spinner from './Components/spinner/Spinner'
import Page404 from './Components/page404/Page404';
import './Components/style.css'


function App() {
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

                            <Route exact path="/pokemon/" >
                                <Card />
                            </Route>
                            <Route exact path="/pokemon/:id" >
                                <SinglePage />
                            </Route>

                            <Route path="*">
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
