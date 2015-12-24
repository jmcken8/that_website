import { Router, Route, IndexRoute, Link } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import BasePage from './components/BasePage';
import MainView from './components/MainView';
import AuthStore from './stores/AuthStore';
import LoginRequired from './components/authentication/LoginRequired';
import LoginView from './components/authentication/LoginView';
import UserView from './components/admin/UserView';
import Admin from './components/admin/Admin';
import '../index.html';


function checkLoggedIn(state, replaceState) {
    if(!AuthStore.isLoggedIn()) {
        replaceState(state, '/login');
    }
}

function checkNotLoggedIn(state, replaceState) {
    if(AuthStore.isLoggedIn()) {
        replaceState(state, '/user');
    }
}

render (
    <Router>
        <Route path="/" component={BasePage}>
            <IndexRoute component={MainView}/>
            <Route path="about" component={MainView}/>
            <Route path="login" component={LoginView} onEnter={checkNotLoggedIn}/>
            <Route component={LoginRequired} onEnter={checkLoggedIn}>
                <Route path='user' component={UserView}/>
                <Route path='admin' component={Admin}/>
            </Route>
        </Route>
    </Router>
, document.getElementById('app'));
