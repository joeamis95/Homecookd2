import React from 'react'
import history from '../Utils/history';
import App from './App.js';
import SignUpPage from './Login/SignUpPage.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const RoutePaths = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path = "/" component = {App}/>

    <Route path = '/SignUpPage' component = {SignUpPage}/>

    </Switch>
  </BrowserRouter>
)

export default RoutePaths;
