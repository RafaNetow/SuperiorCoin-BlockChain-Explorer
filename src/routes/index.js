import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Home from './Home';

export default () => (
    <BrowserRouter>
         <Switch>
        <Route exact path="/" name="home" component={Home} />
        <Route exact path="/home" name="home" component={Home}/>
    </Switch>
    </BrowserRouter>
);

