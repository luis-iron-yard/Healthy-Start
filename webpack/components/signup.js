import React from 'react'
import { browserHistory } from 'react-router'

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
            photo: '',
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
            // photo: this.state.photo,
        }
        this.signupUser(formData)
        // this.signupUser()
    }

    signupUser(formData) {
        // var formData = new FormData()
        // formData.append('username', this.state.username)
        // formData.append('email', this.state.email)
        // formData.append('password', this.state.password)
        // formData.append('password_confirmation', this.state.password_confirmation)
        // formData.append('file', this.state.photo[0])

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
            if (typeof response.authentication_token !== 'undefined') {
                sessionStorage.setItem('authentication_token', response.authentication_token)
                sessionStorage.setItem('email', response.email)
                window.location.href = '/home/nutrition'
                console.log(response)
            }
            else {
                console.log(response)
            }
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
            color: '#fff',
        }
        var logoStyling = {
            fontSize: '1em',
            fontFamily: 'Lobster, Helvetica, sans-serif',
        }
        var buttonSignupStyling = {
            padding: 20,
            margin: 30,
            borderRadius: 15,
            backgroundColor: '#fff',
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px grey',
        }
        return(
            <div style={signupStyling}>
                <h1 style={titleStyling}>Healthy Start Signup</h1><br />
                <p>When you don't know where to begin, you can always come to <span style={logoStyling}>Healthy Start</span></p><br />
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
                    {/* <div className="form-group">
                    <label htmlFor="photo">Photo</label>
                    <input type="file" name="photo" className="form-control" id="photoInput" onChange={(e)=>this.setState({photo: e.target.value})} required />
                    </div> */}
                    <div>
                      <button style={buttonSignupStyling} type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => browserHistory.push('/')}>Close</button>
                      <button style={buttonSignupStyling} type="button" className="btn btn-primary" id="saveSignUp" onClick={this.captureUserData}>Save changes</button>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Signup
