import React from 'react'



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchResults = this.searchResults.bind(this)
        this.saveFavorites = this.saveFavorites.bind(this)
        this.state = {
            recipes: [],
            favorites: [],
        }
    }
    componentDidMount() {
        fetch('/api/search?food=' + sessionStorage.getItem('searchValue'))
        .then(response => response.json())
        .then(response => this.setState({recipes: response}))
    }


    searchResults(recipe) {
        sessionStorage.setItem('searchValue', this._inputSearch.value)

        var food = this._inputSearch.value;
        //this takes the value of the input field (attached to _inputSearch) and attaches it to the variable food
        fetch('/api/search?food=' + food)
        //^ this line fetches the api and runs our value(food) against it
        .then(response => response.json())
        //^ this line turns the api call into JSON data
        // .then(response => console.log(response))
        .then(response => {
            var recipes = response

            var email = sessionStorage.getItem('email')
            var user = sessionStorage.getItem('authentication_token')
            fetch('/api/favorites?user_email=' + email + '&user_token=' + user)
            .then(response => response.json())
            .then(response => {
                var favorites = response.map(favorite => favorite.id)

                this.setState({recipes: recipes, favorites: favorites})

                if(recipes.length) {
                    document.getElementById('recipes').scrollIntoView({block: 'start', behavior: 'smooth'})
                }
            })
        })
    }

    saveFavorites(recipe){
        // console.log('Saving recipe to favorites')
        // console.log(recipe)

        //Collect inputs of selected recipe to save to favorits array...
        var favorites = this.state.favorites
        favorites.push(recipe.id)
        this.setState({favorites: favorites})

        var newFavoriteRecipe = {
            id: recipe.id,
            recipe: recipe.recipe_name,
            food_image: recipe.food_imgage,
            instruction: recipe.instruction,
            email: sessionStorage.getItem('email'),
            user_token: sessionStorage.getItem('authentication_token')
        }
        this.postRecipeToDB(newFavoriteRecipe)
        this.savedTest()
    }
    savedTest() {
        this.setState({savedBtnText: 'Saved'})
    }

    postRecipeToDB(newFavoriteRecipe) {
        fetch('/api/favorites', {
            body:JSON.stringify({
                id: newFavoriteRecipe.id,
                user_email: newFavoriteRecipe.email,
                user_token: newFavoriteRecipe.user_token,
                   }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {console.log(response)})
    }

    render() {
        var imgStyle = {
            width: '100%',
            borderRadius: '2%',
            boxShadow: '3px 3px 4px grey',
            textAlign: 'center'
        }
        var cardStyle = {
            border: '2px solid black',
        }
        var inputStyling = {
            padding: '2%',
            margin: '3%',
            borderRadius: 15,
            border: '2px solid #66ccff',
            width: '50%',
        }
        var buttonAStyling = {
            textDecoration: 'none',
            display: 'block',
            margin: '15px 0 15px 0',
            padding: 2.5,
            width: '100%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var buttonSStyling = {
            width: '100%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
            marginBottom: 10
        }

        var buttonStyling = {
            padding: '2%',
            margin: '3%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var recipeTitleStyle = {
            overflow: 'hidden',
        }
        var searchBar = {
            textAlign: 'center',
        }
        // console.log(this.state.favorites)
        var recipes = this.state.recipes.map((recipe, i) =>{
            return (
            // <li className='ns-listItemRecipe' key={i}>
            <div className='viewSection col-sm-3 ns-listItemRecipe' key={i}>
                <div className="card text-center">
                    <div className="card-block">
                        {/* <h4 className="card-title">Nutrition</h4> */}
                        <h6 style={recipeTitleStyle} className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                    </div>
                    <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                    <div className="card-block">
                        <a style={buttonAStyling} href={recipe.instruction} target='_blank' className="card-link nr--test">Instructions</a>&nbsp;&nbsp;&nbsp;
                        {/* <button style={buttonSStyling} href="#" className="card-link" onClick={()=>this.saveFavorites(recipe)}>Save to Favorites</button> */}
                        <button style={buttonStyling} href="#" className="card-link" onClick={()=>this.saveFavorites(recipe)} disabled={this.state.favorites.includes(recipe.id)}>{this.state.favorites.includes(recipe.id)?'Saved':'Save To Favorites'}</button>
                    </div>
                </div>
            </div>
            // </li>
        )
        })
        
        return(
            <div>
                <form style={searchBar} onSubmit={this.searchResults}>
                    <input style={inputStyling} type="text" ref={(a) => this._inputSearch = a} placeholder="search recipes..."></input>
                    <button style={buttonStyling} type="submit">search recipe</button>
                </form>

                <h1>Search Results</h1>
                <div className="container-fluid viewSection">
                    <h4>Recipes:</h4>
                    <div className="row">
                        {recipes}
                    </div>
                </div>
            </div>
        )
    }
}
export default Search
