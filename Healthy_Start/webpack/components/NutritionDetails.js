import React from 'react'
import NutritionRecipes from './NutritionRecipes'

class NutritionDetails extends React.Component {
    constructor(props) {
        super(props)
        this.fetchRecipes = this.fetchRecipes.bind(this)
        this.state = {
            currentNutrition: undefined,
            recipes: [],
            selectedFood: 'broccoli',
        }

    }
    componentWillReceiveProps(){
        this.setState({currentNutrition: this.props.currentNutrient})
    }

    captureFoodSearch(a) {
        //Capture the food item that has been selected...
        console.log('made it this far...')
        var food = this.state.selectedFood
        console.log(food)
        //Call method to fire off Ajax to receive recipes
        this.fetchRecipes(food)
        //Save search term
        sessionStorage.clear('searchValue')
        sessionStorage.setItem('searchValue', food)
    }

    fetchRecipes(food) {
        //Fire off ajax request to obtain list of nutritions
        fetch('/api/search?food=' + food)
        //Convert server response and update the current state of the nutritions empty array
        .then(response => response.json())
        .then(response => this.setState({recipes: response}))
    }
// TODO: (1)Render Current Nutrient in Component; (2) Capture clicked on Food; (3)Use current food item to conduct fetch for receips; (3) Render recipes to the Nutrient Recipes Component

    render() {
        console.log(this.state.currentNutrition)
        console.log(this.state.recipes)
        var recipes = this.state.recipes.map((recipe, i) => {
            return
        })

        return(
            <div>
                <h4 className='ns--sectionHeader'>Nutrition Details</h4>
                <div className='ns--card'>
                    <h5>Nutrient Name: </h5>
                    <p>Lorem ipsum dolor sit amet</p><br />
                    <h5>Nutrien Benefits:</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    <ul>
                        <li onClick={(a) => this.captureFoodSearch(a)}>Broccoli</li>
                        <li onClick={(a) => this.captureFoodSearch(a)}>Kale</li>
                        <li onClick={(a) => this.captureFoodSearch(a)}>Sweet Potatoe</li>
                    </ul>
                </div>
                <hr />
                <NutritionRecipes recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default NutritionDetails
