import React from 'react'
import NutritionList from './NutritionList'
import NutritionDetails from './NutritionDetails'
import NutritionRecipes from './NutritionRecipes'

class Nutrition extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h4>Nutrition</h4>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            {/* <NutritionList /> */}
                        </div>
                        <div className='col-sm-8'>
                            <NutritionDetails  /><hr />
                            <NutritionRecipes />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nutrition
