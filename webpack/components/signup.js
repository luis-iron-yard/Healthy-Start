import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.captureUserData = this.captureUserData.bind(this)
        this.signupUser = this.signupUser.bind(this)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }

    captureUserData() {
        //Collect user details from input fields...
        //Compile user details into form to consolidate for Ajax...
        var formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        this.signupUser(formData)
    }

    signupUser(formData) {
        console.log('The Ajax is about to send off user data...')
        fetch("/api/users", {
            body:JSON.stringify(
                {user: formData}
            ),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            window.location.href = '/'
            console.log(response)
        })
    }

    render() {
        var signupStyling = {
            margin: 'auto',
            padding: '175px',
            fontSize: '1.5em',
            textAlign: 'center',
        }
        var titleStyling = {
            fontSize: '2.5em',
            fontFamily: 'Lobster, Helvetica, sans-serif',
        }
        var buttonSignupStyling = {
            padding: 20,
            margin: 30,
            borderRadius: 15,
        }
        return(
            <div style={signupStyling}>
                <h1 style={titleStyling}>Signup</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br />
                <div>
                  <h4 id="createProfile">Create User Profile</h4>
                  <hr />
                  <div>
                    <div className="form-group">
                      <label htmlFor="signUpUsername">Username</label>
                      <input type="text" className="form-control" id="signUpUsername" name="username" aria-describedby="sigunUpUsername" placeholder="Please Enter Username" onChange={(e)=>this.setState({username: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signUpEmail">Email address</label>
                      <input type="email" className="form-control" id="signUpEmail" aria-describedby="signUpEmail" placeholder="Please Enter email" name="email" onChange={(e)=>this.setState({email: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signUpPassword">Password</label>
                      <input type="password" className="form-control" id="signUpPassword" name="password" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signUpConfirmationPassword">Password Confirmation</label>
                      <input type="password" className="form-control" id="signUpConfirmationPassword" name="password" placeholder="Password" onChange={(e)=>this.setState({password_confirmation: e.target.value})} required />
                    </div>
                    <div>
                      <button style={buttonSignupStyling} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button style={buttonSignupStyling} type="button" className="btn btn-primary" id="saveSignUp" onClick={this.captureUserData}>Save changes</button>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Signup
