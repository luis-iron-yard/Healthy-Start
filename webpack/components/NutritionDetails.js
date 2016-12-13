import React from 'react'
import NutritionRecipes from './NutritionRecipes'

class NutritionDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFood: undefined,
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectedFood: undefined})
    }

    captureFoodSearch(food) {
        this.setState({selectedFood: food})
}


// TODO: (1)Render Current Nutrient in Component; (2) Capture clicked on Food (Not clicking on current food); (3)Use current food item to conduct fetch for receips; (3) Render recipes to the Nutrient Recipes Component


    render() {
        var buttonStyle = {
            backgroundColor: '#66ccff',
            borderRadius: 15,
            color: '#fff',
            padding: 20,
            margin: 5,
            display: 'inline-block',
            cursor: 'pointer',
        }
        var sourceTitle = {
          whiteSpace: 'normal',
        }
        // console.log(this.props.currentNutrient)
        var foods = ''
        if(this.props.currentNutrient) {
             foods = this.props.currentNutrient.foods.map((food, i) => {
                return <div style={buttonStyle} key={i} onClick={() => this.captureFoodSearch(food)}>{food.name}</div>
            })
        }
        // console.log(foods)
        return(
            <div>
                <div className='ns--nutritionDesc'>
                    <h4 className='ns--sectionHeader'>Nutrition Details</h4>
                    <div className='ns--card'>
                        <h5>Nutrient Name: </h5>
                        {/* <p>Lorem ipsum dolor sit amet</p><br /> */}
                        <p>{this.props.currentNutrient? this.props.currentNutrient.nutrient: ''}</p>
                        <h5>Nutrient Benefits:</h5>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p> */}
                        <p>{this.props.currentNutrient? this.props.currentNutrient.benefits: ''}</p>
                        <h5>Food Solutions: (Select food for recipes) </h5>
                        <div>
                            {foods}
                        </div>
                        <h6 style={sourceTitle}>Source: Pregnancy The Beginner's Guide &copy;2014 Dorling Kindersley Limited</h6>

                    </div>
                </div>
                <NutritionRecipes food={this.state.selectedFood} nutritient={this.props.currentNutrient? this.props.currentNutrient.nutrient: ''} />
            </div>
        )
    }
}

export default NutritionDetails
