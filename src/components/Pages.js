import React from 'react';
import Body from './Body';
import About from './About';
import Product from './Products';
import Career from './Careers';
import Contact from './Contact';

import {Switch,Route} from 'react-router-dom';

function Pages() {
    return (
        <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/products" component={Product}/>
            <Route exact path="/Careers" component={Career}/>
            <Route exact path="/Contact" component={Contact}/>
        </Switch>
    )
}

export default Pages
