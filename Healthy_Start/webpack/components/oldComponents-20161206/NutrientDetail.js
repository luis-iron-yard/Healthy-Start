import React from 'react'
import { Link } from 'react-router'

class NutrientDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.currentNutrition)
        var foods = this.props.currentNutrition.foods.map((food, i) => {
            return <li key={i}>{food.name}</li>
        })

        return (
            <div>
              <h2>{this.props.currentNutrition.nutrient}</h2>
              <h4>Benefits:</h4>
                <p>
                    {this.props.currentNutrition.benefits}
                </p>
              <h4>Common Foods:</h4>
                <ul>
                  {foods}
                </ul>
            </div>
        )
    }
}


export default NutrientDetail
