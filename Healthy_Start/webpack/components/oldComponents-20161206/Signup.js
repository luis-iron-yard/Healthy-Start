import React from 'react'
import { Link } from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super ()
        this.signup = this.signup.bind(this)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }
    signup() {
        console.log('The Ajax is compiling data to fire off...')
        var formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        console.log(formData)
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
            window.location.href = '/api/users/sign_in'
            console.log(response)
        })
    }

    render() {
        return(
            <main>
              <h4 id="createProfile">Create New Profile</h4>
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
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" id="saveSignUp" onClick={this.signup}>Save changes</button>
                </div>
              </div>
            </main>
        )
    }
}

export default Signup
