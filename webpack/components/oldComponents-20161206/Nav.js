import React from 'react'
import { Link } from 'react-router'
import Favorites from './Favorites'
import Nutritions from './Nutritions'



class Nav extends React.Component {
    constructor(props){
        super(props)
        this.searchRecipes = this.searchRecipes.bind(this)
        this.state = {
            recipes: []
        }

    }
    searchRecipes(event) {
        var searchTerm = this._inputElement.value
        console.log('Ajax about to fire off')
        fetch('/api/search?food='+ searchTerm)
        .then(response => response.json())
        .then(response => {console.log(response)})
        // .then(recipes => this.setState({recipes: response}))
        console.log('Made it all the way')
        event.preventDefault();
    }


    render(){
        // var foods = this.state.recipes.foods.map((food, i) => {
        //     return <li key={i}>
        //         {food}
        //     </li>
        // })
        // var recipes = this.state.recipes.map((recipe, i) => {
        //     return(
        //             <div className="row">
        //                 <div className="pictureHolder">
        //                     <div className="col-xs-6">
        //                   <img src={recipe.food_image}  />
        //                 </div>
        //                 <div className="col-xs-6">
        //                   <h6>Recipe #{i}</h6>
        //                   <span>{foods}</span><br />
        //                 </div>
        //               </div>
        //             </div>
        //     )
        // })
        return (
            <div className="container-fluid">
               <div className="row navBar">

                 <div className="col-sm-2">
                  <Link to='/nutritions'><button type="button" className="btn btn-lg btn-primary btn-block">Nutrition</button></Link>
                 </div>

                 <div className="col-sm-2">
                   <button type="button" className="btn btn-lg btn-primary btn-block">Complaint</button>
                 </div>

                 <div className="col-sm-6">
                     <div className="form-group">
                         <form onSubmit={this.searchRecipes}>
                             <input type="text" className="form-control input-lg" placeholder="search recipes" ref={(a) => this._inputElement = a}/>
                             <button type='submit'>Search Recipes</button>
                         </form>
                     </div>
                 </div>

                 <div className="col-sm-2">
                   <Link to='/favorites' ><button type="button" className="btn btn-lg btn-primary btn-block"><img src="http://bonniesomerville.nz/wp-content/uploads/2015/08/profile-icon.png" /></button></Link>
                 </div>

               </div>
             </div>
        )

    }
}

export default Nav
