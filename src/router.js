import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shelf from './Components/Shelf/Shelf';
import Bin from './Components/Bin/Bin';
import Inventory from './Components/Add-inv/Inventory';

export default (
    /* 42G */
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Shelf/:shelfname" component={ Shelf } />
        <Route exact path="/Shelf/:shelfname/Bin/:number" component={ Bin } />
        <Route path="/Shelf/:shelfname/Bin/:number/inventory" component={ Inventory } />
    </Switch>
)