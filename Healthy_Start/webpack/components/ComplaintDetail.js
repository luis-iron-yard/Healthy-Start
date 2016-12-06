import React from 'react'
import { Link } from 'react-router'

class ComplaintDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Complaint</h2>
                <h4>Description: </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h4>Nutrients that help:</h4>
                <ul>
                    <li>Vitamin A</li>
                    <li>Iron</li>
                    <li>Folic acid</li>
                </ul>

            </div>
        )
    }
}

export default ComplaintDetail
