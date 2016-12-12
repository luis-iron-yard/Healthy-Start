import React from 'react'


class NutritionRecipes extends React.Component {
    constructor(props) {
        super(props)
        this.saveFavorites = this.saveFavorites.bind(this)
        this.postRecipeToDB = this.postRecipeToDB.bind(this)
        this.state = {
            favorites: [],
            recipes: [],
            selectedNutrient: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
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
        .then(response => this.setState({recipes: response}))
    }
    saveFavorites(recipe){
        console.log('Saving recipe to favorites')
        console.log(recipe)
        //Collect inputs of selected recipe to save to favorits array...
        var newFavoriteRecipe = {
            id: recipe.id,
            recipe: recipe.recipe_name,
            food_image: recipe.food_imgage,
            instruction: recipe.instruction,
            email: sessionStorage.getItem('email'),
            user_token: sessionStorage.getItem('authentication_token')
        }
        this.postRecipeToDB(newFavoriteRecipe)
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
            width: '60%',
            borderRadius: '2%',
            boxShadow: '3px 3px 4px grey',
            textAlign: 'center'
        }
        var cardStyle = {
            border: '2px solid black',
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
        var recipes = this.state.recipes.map((recipe, i) =>{
            return (
            // <li className='ns-listItemRecipe' key={i}>
            <div className='col-sm-3 ns-listItemRecipe' key={i}>
                <div className="card">
                    <div className="card-block">
                        {/* <h4 className="card-title">Nutrition</h4> */}
                        <h6 style={recipeTitleStyle}className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                    </div>
                    <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                    <div className="card-block">
                        <button style={buttonStyling} href={recipe.instruction} target='_blank' className="card-link">Instructions</button>&nbsp;&nbsp;&nbsp;
                        <button style={buttonStyling} href="#" className="card-link" onClick={()=>this.saveFavorites(recipe)}>Save to Favorites</button>
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
                <h1 id='recipes'>Nutrition Recipes</h1>
                {/* <ol>
                    {recipes}
                </ol> */}
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
