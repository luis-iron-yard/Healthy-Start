import React from 'react'


class NutritionDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNutrition: undefined,
        }

    }
    componentWillReceiveProps(){
        this.setState({currentNutrition: this.props.currentNutrient})
    }
    render() {
        // var currentNutrient = this.props.currentNutrient
        // console.log(currentNutrient)
        console.log(this.state.currentNutrition)
        return(
            <div>
                <h4 className='ns--sectionHeader'>Nutrition Details</h4>
                <div className='ns--card'>
                    <h5>Nutrient Name: </h5>
                    <p>Lorem ipsum dolor sit amet</p><br />
                    <h5>Nutrien Benefits:</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    <ul>
                        <li>Broccoli</li>
                        <li>Kale</li>
                        <li>Sweet Potatoe</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NutritionDetails
