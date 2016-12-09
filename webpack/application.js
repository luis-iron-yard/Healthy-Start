import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Nutrition from './components/Nutrition'
import Illness from './components/Illness'
import Search from './components/Search'
import Profile from './components/Profile'



document.addEventListener('DOMContentLoaded', function(event) {
    var destination = document.getElementById('app');
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/' component={Welcome} />
            <Route path='/api/users/sign_up' component={Signup} />
            <Route path='/home' component={Home}>
                <Route path='nutrition' component={Nutrition} />
                <Route path='illness' component={Illness} />
                <Route path='search' component={Search} />
                <Route path='profile' component={Profile} />
            </Route>
        </Router>
        ,destination
    )
})
