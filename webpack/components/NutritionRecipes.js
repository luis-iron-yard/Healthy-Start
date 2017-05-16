import React from 'react'


class NutritionRecipes extends React.Component {
    constructor(props) {
        super(props)
        this.saveFavorites = this.saveFavorites.bind(this)
        this.savedTest = this.savedTest.bind(this)
        this.postRecipeToDB = this.postRecipeToDB.bind(this)
        this.state = {
            favorites: [],
            recipes: [],
            selectedNutrient: '',
            savedBtnText: 'Save to Favorites'
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        if(nextProps.food){
            this.fetchRecipes(nextProps.food.name)
        } else {
            this.setState({recipes: []})
        }
    }

    fetchRecipes(food) {
        //Fire off ajax request to obtain list of nutritions
        fetch('/api/search?food=' + food)
        //Convert server response and update the current state of the nutritions empty array
        .then(response => response.json())
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
            calorie: recipe.calorie,
            id: recipe.id,
            recipe: recipe.recipe_name,
            food_image: recipe.food_image,
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
            body: JSON.stringify(
                {id: newFavoriteRecipe.id,
                user_email: newFavoriteRecipe.email,
                user_token: newFavoriteRecipe.user_token,
                }
            ),
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
            borderRadius: '10px',
            border: 'inset rgba(#999999, 0.85)',
            boxShadow: 'inset -3px -3px 4px grey',
            textAlign: 'center',
            padding: '0 2px 0 2px',
            filter: 'contrast(150%)',
        }
        var cardStyle = {
            border: '2px solid black',
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

        var buttonStyling = {
            margin: '15px 0 15px 0',
            width: '100%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var recipeTitleStyle = {
            overflow: 'hidden',
        }
        var recipes = this.state.recipes.map((recipe, i) =>{
            return (
            // <li className='ns-listItemRecipe' key={i}>
            <div className='col-sm-3 ns-listItemRecipe' key={i}>
                <div className="card text-center">
                    <div className="card-block">
                        {/* <h4 className="card-title">Nutrition</h4> */}
                        <h6 style={recipeTitleStyle} className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                    </div>
                    <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                    <div className = "card-block">
                      <h5 style = {recipeTitleStyle} className = "card-subtitle"> {recipe.calorie}</h5>
                    </div>
                    <div className="card-block">
                        <a style={buttonAStyling} href={recipe.instruction} target="_blank" className="card-link">Instructions</a>
                        <button style={buttonStyling} href="#" className="card-link" onClick={()=>this.saveFavorites(recipe)} disabled={this.state.favorites.includes(recipe.id)}>{this.state.favorites.includes(recipe.id)?'Saved':'Save To Favorites'}</button>
                    </div>
                </div>
            </div>
            // </li>
        )
        })
// TODO: (1) Add save button; (2) Create function to capture values of specific recipe; (3) Compile favorite object into form; (4) Send a Post method to update database (5) Figure out what to do with response from Post to Server...
        // console.log(this.props.nutrient.nutrient)
        return(
            <div>
                <h1 id='recipes'>Nutrition Recipes</h1><hr />
                <h6>Recipe data courtesy of <a href='https://developer.edamam.com/' target="_blank">edamam api</a></h6>
                <div className='container-fluid'>
                    <div className='row'>
                        {recipes}
                    </div>
                </div>
            </div>
        )
    }
}

export default NutritionRecipes
