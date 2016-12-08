import React from 'react'
import { Link } from 'react-router'
import ComplaintDetail from './ComplaintDetail'


class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    // componentDidMount(){
    //     fetch('/api/complaints')
    //     .then(response => response.json())
    //     // .then(response => console.log(response[0].nutrient))
    //     .then(response => {
    //         this.setState({complaints: response})
    //         this.props.setCurrentNutrition(response[0])
    //     })
    // }

    render() {
        return(
            <div>
                <div className="col-sm-3">
                    <h4>Nutrients:</h4>
                    <ol id="sidebar">

                    </ol>
                </div>
                <div className="col-sm-9">
                    {/* <ComplaintDetail /> */}
                </div>
            </div>

        )
    }
}

export default Complaint
