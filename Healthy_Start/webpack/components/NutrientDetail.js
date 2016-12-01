import React from 'react'
import { Link } from 'react-router'

class NutrientDetail extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid well nutriFacts">
              <h2>Vitamin A</h2>
              <h4>Benefits:</h4>
                <p>
                  Vitamin A has multiple functions: it is important for growth and development, for the maintanence of the immune system and good vision.
                </p>
              <h4>Common Foods:</h4>
                <ul>
                  <li>Broccoli</li>
                  <li>Carrots</li>
                  <li>Sweet Potatoes</li>
                </ul>
            </div>
        )
    }
}

export default NutrientDetail
