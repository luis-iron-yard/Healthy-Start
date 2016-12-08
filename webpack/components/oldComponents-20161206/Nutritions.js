import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Nutrient from './Nutrient'
import NutrientDetail from './NutrientDetail'
import Recipes from './Recipes'



class Nutritions extends React.Component {
    constructor(props) {
        super(props)
        this.setCurrentNutrition = this.setCurrentNutrition.bind(this)
        this.state = {
            currentNutrition: undefined,
        }
    }
    setCurrentNutrition(nutrition) {
        this.setState({currentNutrition: nutrition})
    }
    render() {
        window.authenticate_token = sessionStorage.getItem('authenticate_token')
        console.log(authenticate_token)
        return (
            <div>
             <div className="container-fluid">
                <Nav />
             </div>
              {/* <!--END OF NAV BAR--> */}

            {/* <!--START OF CONTENT--> */}
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-sm-3">
                         <Nutrient setCurrentNutrition={this.setCurrentNutrition} />
                     </div>
                     <div className="col-sm-9">
                         {this.state.currentNutrition?<NutrientDetail currentNutrition={this.state.currentNutrition} />: ''}
                         <Recipes />
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}

export default Nutritions
