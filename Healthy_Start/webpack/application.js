import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Nutritions from './components/Nutritions'
import Favorites from './components/Favorites'
import NutrientDetail from './components/NutrientDetail'
// import Search from './components/Search'
// import Recipe_Id from './components/Recipe_Id'
// import Favorites from './components/Favorites'
//<Route path="/search" component={Search} />
//<Route path="/recipe_id/:id" component={Recipe_Id} />
//<Route path="/favorites" component={Favorites} />

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/users/sign_in' component={Landing} />
            <Route path='/users/sign_up' component={Signup} />
            <Route path='/nutritions' component={Nutritions} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/nutrientdetail' component={NutrientDetail} />
        </Router>
        ,document.getElementById('app')
    )
})
