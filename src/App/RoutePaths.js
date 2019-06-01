import React from 'react'
import history from '../Utils/history';
import App from '../App.js';
import FullWidthTabs from '../Login/BuyerSellerRegistry.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const RoutePaths = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path = "/" component = {App}/>

    <Route path = '/BuyerSellerRegistry' component = {FullWidthTabs}/>


    </Switch>
  </BrowserRouter>
)

export default RoutePaths;
