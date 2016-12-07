import React from 'react'


class NutritionDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h4 className='ns--sectionHeader'>Nutrition Details</h4>
                <div className='ns--card'>
                    <h5>Nutrient Name: </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p><br />
                    <h5>Nutrien Benefits:</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                </div>
            </div>
        )
    }
}

export default NutritionDetails
