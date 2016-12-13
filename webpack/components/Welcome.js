import React from 'react'
import { Link } from 'react-router'
import Signup from './Signup'
import Home from './Home'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.collectUserInput = this.collectUserInput.bind(this)
        this.authenticateUser = this.authenticateUser.bind(this)
        this.state = {
            login: '',
            password: '',
        }
    }

    collectUserInput() {
        //Collecting values for user input fields...
        //Compile values into form variable to send out for authentication...
        var formData = {
            email: this.state.login,
            password: this.state.password,
        }
        this.authenticateUser(formData)
    }

    authenticateUser(formData) {
        console.log('The Ajax is about to send off user data...')
        //Send user information to server for authentication...
        fetch("/api/users/sign_in", {
            body:JSON.stringify(
                {user_login: formData}
            ),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            sessionStorage.setItem('authentication_token', response.authentication_token)
            sessionStorage.setItem('email', response.email)
            sessionStorage.setItem('photo', response.photo)
            console.log('About to redirect to nutritions')
            console.log(response.authentication_token)
            console.log(response)
            if(response.authentication_token) {
                window.location.href = '/home/nutrition'
                console.log('Got all the way here...')
            } else {
                console.log('Error with login, please try again...')
            }
            //If user info. is valid redirect to home page...
        })
    }

    render() {
        var welcomeStyling = {
            margin: 'auto',
            padding: '150px',
            fontSize: '1.5em',
            textAlign: 'center',
        }
        var titleStyling = {
            fontSize: '2.5em',
            fontFamily: 'Lobster, Helvetica, sans-serif',
            color: '#fff',
        }
        var buttonWelcomeStyling = {
            padding: 20,
            margin: 30,
            borderRadius: 15,
            color: '#fff',
            border: '4px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
        }
        var titleEmphasis = {
            color: '#000',
        }
        return(
            <div style={welcomeStyling}>
                <h1 style={titleStyling}><span style={titleEmphasis}>Welcome to</span> Healthy Start!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div><br />
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="signInEmail" aria-describedby="emailAssistance" placeholder="Please Enter email" onChange={(e)=>this.setState({login: e.target.value})} required />
                        <small id="emailAssistance" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})} required />
                    </div>
                    <button style={buttonWelcomeStyling} onClick={this.collectUserInput} className='ws--Button'>Login</button>
                    <Link to="/api/users/sign_up"><button style={buttonWelcomeStyling} onClick='' className='ws--Button'>Sign Up</button></Link>
                </div>

            </div>
        )
    }
}

export default Welcome
