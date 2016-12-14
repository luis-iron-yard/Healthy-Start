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
        var login = this.state.login
        var formData = {
            email: this.state.login,
            password: this.state.password,
        }
        console.log(formData)
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
            sessionStorage.setItem('user', JSON.stringify(response))
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
            backgroundImage: 'url(/img/tomato.jpeg)',
            backgroundSize: 'cover',
            // filter: 'grayscale(55%)'
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
            color: '#AC3921',
            border: '4px solid #AC3921',
            boxShadow: '2px 2px 2px #fff',
            background: '#FFF000',
        }
        var titleEmphasis = {
            color: '#FFF000',
        }
        var welcomeTitleStyling = {
            color: '#FFF000',
        }
        var logoStyling = {
            fontSize: '1em',
            fontFamily: 'Lobster, Helvetica, sans-serif',
            color: '#fff',
        }
        return(
                        <div style={welcomeStyling}>
                            <h1 style={titleStyling}><span style={welcomeTitleStyling}>Welcome to</span> Healthy Start!</h1><br />
                            {/* <img src='/img/landing_hp.jpg' alt='random image'/> */}
                            <div><br />
                            <div style={titleEmphasis} className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input type="email" className="form-control" id="signInEmail" aria-describedby="emailAssistance" placeholder="Please Enter email" onChange={(e)=>this.setState({login: e.target.value})} required />
                                <small id="emailAssistance" className="form-text">We'll never share your email with anyone else.</small>
                            </div>
                            <div style={titleEmphasis} className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})} required />
                            </div>
                            <h5 style={logoStyling}>Because ever child and mother deserves a <b style={welcomeTitleStyling}>Healthy Start...</b></h5>
                            <button style={buttonWelcomeStyling} onClick={this.collectUserInput} className='ws--Button'>Login</button>
                            <Link to="/api/users/sign_up"><button style={buttonWelcomeStyling} onClick='' className='ws--Button'>Sign Up</button></Link>
                        </div>

                    </div>

        )
    }
}

export default Welcome
