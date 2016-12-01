import React from 'react'

class User extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            // <h6>Profile</h6>
            <div>
            <h6>Profile</h6>

                <div className="proPicHolder">
                  <img className="proPic" src="http://unsplash.it/150/150?random"  />
                </div>

                <div className="proPicHolder">
                    <h5>Quote:</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        )
    }
}

export default User
