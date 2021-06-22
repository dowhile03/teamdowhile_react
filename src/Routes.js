import React from 'react'
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';

const Routes = () => {
    return (
       <BrowserRouter>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/contact" exact component={ContactUs}/>
       </Switch>
       </BrowserRouter>
    )
}

export default Routes
