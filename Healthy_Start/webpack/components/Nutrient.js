import React from 'react'
import { Link } from 'react-router'
import NutrientDetail from './NutrientDetail'


class Nutrient extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nutrients: [],
        }
    }

    componentDidMount(){
        fetch('/nutritions')
        .then(response => response.json())
        // .then(response => console.log(response[0].nutrient))
        .then(response => this.setState({nutrients: response}))
    }

    render(){
        const nutrients = this.state.nutrients.map((nutrient, i) =>{
            console.log('Made it to the mapping')
            return <Link to="/" key={i}><li >{nutrient.nutrient}</li></Link>
        })
        return (
            <div>
                <div className="col-sm-3">
                    <h4>Nutrients:</h4>
                    <ol id="sidebar">
                    {nutrients}
                    </ol>
                </div>
                <div className="col-sm-9">
                    {/* <NutrientDetail /> */}
                </div>
            </div>
        )

    }
}

export default Nutrient
