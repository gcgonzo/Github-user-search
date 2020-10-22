import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/Components/Navbar';
import Home from './page/Home';
import Search from './page/Search';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>

        </Switch>
     
    </BrowserRouter>
);

export default Routes;