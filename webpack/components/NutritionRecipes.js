import React from 'react'


class NutritionRecipes extends React.Component {
    constructor(props) {
        super(props)
        this.saveFavorite = this.saveFavorites.bind(this)
        this.compileRecipe = this.compileRecipe.bind(this)
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
    saveFavorites(event){
        console.log('Saving recipe to favorites')
        this.compileRecipe(recipe)
    }

    compileRecipe(recipe) {
        console.log('Compile recipe details to send to database')
        var recipeID = {
            user_token: '',
            user_email: 'login authentication',
            food_id: 'id',
        }
        this.postRecipeToDB(recipeID)
    }

    postRecipeToDB(recipeID) {
        fetch("/api/favorites", {
            body:JSON.stringify(
                {recipeID}
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
            width: '45%',
            borderRadius: '2%',
            boxShadow: '3px 3px 4px grey',
        }
        var cardStyle = {
            border: '2px solid black',
        }

        var buttonStyling = {
            padding: 10,
            margin: 10,
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var recipes = this.state.recipes.map((recipe, i) =>{
            return <li className='ns-listItemRecipe' key={i}>
                <div className="card">
                    <div className="card-block">
                        {/* <h4 className="card-title">Nutrition</h4> */}
                        <h6 className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                    </div>
                    <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                    <div className="card-block">
                        <button style={buttonStyling} href={recipe.instruction} target='_blank' className="card-link">Instructions</button>&nbsp;&nbsp;&nbsp;
                        <button style={buttonStyling} href="#" className="card-link">Save to Favorites</button>
                    </div>
                </div>
            </li>
        })
// TODO: (1) Add save button; (2) Create function to capture values of specific recipe; (3) Compile favorite object into form; (4) Send a Post method to update database (5) Figure out what to do with response from Post to Server...
        // console.log(this.props.nutrient.nutrient)
        return(
            <div>
                <h1 id='recipes'>Nutrition Recipes</h1>
                <ol>
                    {recipes}
                </ol>
            </div>
        )
    }
}

export default NutritionRecipes
