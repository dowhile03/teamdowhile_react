import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUS from './components/AboutUS/AboutUS';
import BlogDetails from './components/Blogs/BlogDetails';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';

const Routes = () => {
    return (
       <BrowserRouter>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/contact" exact component={ContactUs}/>
       <Route path="/blogs" exact component={BlogDetails}/>
       <Route path="/aboutus" exact component={AboutUS}/>

       </Switch>
       </BrowserRouter>
    )
}

export default Routes
