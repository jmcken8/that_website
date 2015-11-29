import { Router, Route, IndexRoute, Link } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import BasePage from './components/BasePage'
import MainView from './components/MainView'


render (
    <Router>
        <Route path="/" component={BasePage}>
            <IndexRoute component={MainView}/>
            <Route path="about" component={MainView}/>
        </Route>
    </Router>
, document.getElementById('app'));
