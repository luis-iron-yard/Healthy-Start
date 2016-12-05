import React from 'react'
import { Link } from 'react-router'
import Signup from './Signup'
import Nutritions from './Nutritions'

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.confirmUser = this.confirmUser.bind(this)
        this.state = {
            login: '',
            password: '',
        }
    }
    confirmUser() {
        console.log('The Ajax is compiling data to fire off...')
        var formData = {
            login: this.state.login,
            password: this.state.password,
        }
        console.log(formData)
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
            // console.dir(response)
            console.log('About to redirect to nutritions')
            window.location.href = '/nutritions'
            console.log('Got all the way here...')
        })
    }
    render () {
        return (
            <main>
                <div className="container">
                    <div className="row welcomeContainer">
                        <div className="col-sm-7 welcomeText">
                            <h1 className="text-capitalize">healthy start</h1>
                            <p>Providing healthy recipes that meet the nutritional needs of pregnant women.</p>
                        </div>
                        <div className="col-sm-5 welcomeProfile">
                            <img id="genericBg_profile"src="http://unsplash.it/600?random" alt="generic profile image for the signup/in section" />
                            <p>Need an account? <Link to="/api/users/sign_up">SignUp</Link></p>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input type="email" className="form-control" id="signInEmail" aria-describedby="emailAssistance" placeholder="Please Enter email" onChange={(e)=>this.setState({login: e.target.value})} required />
                                <small id="emailAssistance" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})} required />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="selectInterest">Select Interest</label>
                                <select className="form-control" id="selectInterest">
                                    <option>Nutritional Topics</option>
                                    <option>Common Complaint Topics</option>
                                </select>
                            </div> */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <button className="btn btn-primary" onClick={this.confirmUser}>Login</button>
                                </div>
                                <div className="col-sm-6">
                                <Link to="/nutritions"><button className="btn btn-default">Guest</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
export default Landing
