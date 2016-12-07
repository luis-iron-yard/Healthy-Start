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
        return(
            <div>
                <h1>Nutrition Recipes</h1>
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Nutrition</h4>
                    <h6 className="card-subtitle text-muted">Recipe</h6>
                  </div>
                  <img style={imgStyle} src="https://unsplash.it/800/?random" alt="Card image"/>
                  <div className="card-block">
                    <p className="card-text">Foods: Broccoli, Sweet Potatoes, ...</p>
                    <a href="#" className="card-link">Card link</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
            </div>
        )
    }
}

export default NutritionRecipes
