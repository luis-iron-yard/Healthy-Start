import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Nutritions from './components/Nutritions'
import Favorites from './components/Favorites'


document.addEventListener('DOMContentLoaded', function(event) {
    var destination = document.getElementById('app');
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/' component={Landing} />
            <Route path='/api/users/sign_in' component={Landing} />
            <Route path='/api/users/sign_up' component={Signup} />
            <Route path='/nutritions' component={Nutritions} />
            <Route path='/favorites' component={Favorites} />
            {/* <Route path='/nutrientdetail' component={NutrientDetail} /> */}
        </Router>
        ,destination
    )
})
