import React from 'react'
import { Link } from 'react-router'
import Signup from './Signup'
import Home from './Home'

class Welcome extends React.Component {
    render() {
        var welcomeStyling = {
            margin: 'auto',
            padding: '175px',
            fontSize: '1.5em',
            textAlign: 'center',
        }
        var titleStyling = {
            fontSize: '2.5em',
            fontFamily: 'Lobster, Helvetica, sans-serif',
        }
        var buttonWelcomeStyling = {
            padding: 20,
            margin: 30,
            borderRadius: 15,
        }
        return(
            <div style={welcomeStyling}>
                <h1 style={titleStyling}>Welcome Hello World!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <button style={buttonWelcomeStyling} onClick='' className='ws--Button'>Login</button>
                    <Link to="/api/users/sign_up"><button style={buttonWelcomeStyling} onClick='' className='ws--Button'>Sign Up</button></Link>
                </div>

            </div>
        )
    }
}

export default Welcome
