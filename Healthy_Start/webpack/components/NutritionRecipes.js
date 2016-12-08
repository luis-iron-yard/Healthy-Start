import React from 'react'


class NutritionRecipes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var imgStyle = {
            width: '25%',
        }
        var cardStyle = {
            border: '2px solid black',
        }
        var recipes = this.props.recipes.map((recipe, i) =>{
            return <li className='ns-listItemRecipe' key={i}>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Nutrition</h4>
                        <h6 className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                    </div>
                    <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                    <div className="card-block">
                        <a href={recipe.instructions} className="card-link">Instructions</a>&nbsp;&nbsp;&nbsp;
                        <a href="#" className="card-link">Save to Favorites</a>
                    </div>
                </div>
            </li>
        })
        return(
            <div>
                <h1>Nutrition Recipes</h1>
                <ol>
                    {recipes}
                </ol>
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Nutrition</h4>
                    <h6 className="card-subtitle text-muted">Recipe</h6>
                  </div>
                  <img style={imgStyle} src="https://unsplash.it/800/?random" alt="Card image"/>
                  <div className="card-block">
                    <a href="#" className="card-link">Instructions</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" className="card-link">Save to Favorites</a>
                  </div>
                </div>
            </div>
        )
    }
}

export default NutritionRecipes
