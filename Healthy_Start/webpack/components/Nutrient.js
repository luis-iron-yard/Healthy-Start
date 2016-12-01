import React from 'react'
import { Link } from 'react-router'
import NutrientDetail from './NutrientDetail'


class Nutrient extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // nutrients: [
            //     id1: {
            //         recipe_name: "Stew",
            //         food: ["Broccoli", "Carrots"],
            //         image: "https://unsplash.it/600?random"
            //     },
            //     id2: {
            //         recipe_name: "Stew",
            //         food: ["Broccoli", "Carrots"],
            //         image: "https://unsplash.it/600?random"
            //     }
            // ],
        }
    }

    // componentDidMount(){
    //     fetch('/nutritions')
    //     .then(response => response.json())
    //     .then(response => this.setState({nutrients: response}))
    // }

    render(){
        // const nutrients = this.state.nutrients.map((nutrients, i) =>{
        //     return <Link to={"/nutritions"} key={i}>
        //                 <li>{nutrient}</li>
        //             </Link>
        // })
        return (
            <div className="col-sm-3">
                <h4>Nutrients:</h4>
                <ol id="sidebar">
                {/* {nutrients} */}
                </ol>
                 {/* <NutrientDetail /> */}
            </div>

        )

    }
}

export default Nutrient
