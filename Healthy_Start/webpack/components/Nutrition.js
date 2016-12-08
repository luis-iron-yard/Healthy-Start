import React from 'react'
import NutritionDetails from './NutritionDetails'

class Nutrition extends React.Component {
    constructor(props) {
        super(props)
        this.nutritionList = this.nutritionList.bind(this)
        this.activeNutrient = this.activeNutrient.bind(this)
        this.state = {
            nutritions: [],
            activeNutrient: undefined,
        }
    }
    componentDidMount(){
        console.log('We mounted')
        this.nutritionList()
    }
    nutritionList(){
        console.log('start fetch for nutrition list')
        //Fire off ajax request to obtain list of nutritions
        fetch('/api/nutritions')
        //Convert server response and update the current state of the nutritions empty array
        .then(response => response.json())
        .then(response => {
            this.setState({nutritions: response})
            this.activeNutrient(response[0])
        })
    }
    activeNutrient(nutrientItem) {
        this.setState({activeNutrient: nutrientItem})
    }

    render() {
        console.log('The active nutrient is: ' + this.state.activeNutrient)
        // console.log(this.state.nutritions)
        //Declare a variable to loop through list of nutritients and display each as a list item
        var nutritionItems = this.state.nutritions.map((nutrientItem, i) =>{
            return <li className='ns-listItem' onClick={()=> this.activeNutrient(nutrientItem)} key={i}>{nutrientItem.nutrient}</li>
        })
        console.log('Now we need to pass this parent prop to the Nutrition Details and Recipes children on clicking')
        return(
            <div className='viewSection'>
                <h4 className='pageTitle'>Nutrition</h4>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <p>Nutrition List: (Select a Nutrient)</p>
                            <ul className='ns--nutritionlist'>
                                {nutritionItems}
                            </ul>
                        </div>
                        <div className='col-sm-8'>
                            <NutritionDetails currentNutrient={this.state.activeNutrient} /><hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nutrition
