import { Router, Route, IndexRoute, Link } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import BasePage from './components/BasePage';
import MainView from './components/MainView';
import AuthStore from './stores/AuthStore';
import LoginRequired from './components/authentication/LoginRequired';
import Admin from './components/admin/Admin';
import '../index.html';


function checkLoggedIn(state, replaceState) {
    if(!AuthStore.isLoggedIn()) {
        replaceState(state, '/login');
    }
}

render (
    <Router>
        <Route path="/" component={BasePage}>
            <IndexRoute component={MainView}/>
            <Route path="about" component={MainView}/>
            <Route component={LoginRequired}>
                <Route path='admin' component={Admin}/>
            </Route>
        </Route>
    </Router>
, document.getElementById('app'));
