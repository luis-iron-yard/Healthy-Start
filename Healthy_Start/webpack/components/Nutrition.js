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
            <div className='viewSection'>
                <h4 className='pageTitle'>Nutrition</h4>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            {/* <NutritionList /> */}
                            <p>Nutrition List</p>
                            <ul className='ns--nutritionlist'>
                                <li className='ns-listItem'>Home</li>
                                <li className='ns-listItem'>Home1</li>
                                <li className='ns-listItem'>Home2</li>
                                <li className='ns-listItem'>Home3</li>
                                <li className='ns-listItem'>Home4</li>
                                <li className='ns-listItem'>Home5</li>
                                <li className='ns-listItem'>Home6</li>
                            </ul>
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
