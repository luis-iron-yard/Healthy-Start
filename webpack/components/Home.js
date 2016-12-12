import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.captureUserToken = this.captureUserToken.bind(this)
        this.kickUserToLogin = this.kickUserToLogin.bind(this)
        this.state = {

        }
    }

    captureUserToken() {
    sessionStorage.clear('authentication_token')
    console.log('Bye Bye')
    this.kickUserToLogin()
    }

    kickUserToLogin(){
        browserHistory.push('/')
    }

    render() {
        var navStyling = {
            cursor: 'pointer',

        }
        return(
            <div className='hm_body_style'>
                <ul className='hm_header_style'>
                    <li>Healthy Start</li>
                    <li style={navStyling} onClick={() => browserHistory.push('/home/nutrition')}>Nutrition</li>
                    {/* <li style={navStyling} onClick={() => browserHistory.push('/home/illness')}>Illness</li> */}
                    <li style={navStyling} onClick={() => browserHistory.push('/home/search')}>Search</li>
                    <li style={navStyling} onClick={() => browserHistory.push('/home/profile')}>Profile</li>
                    <li style={navStyling} onClick={this.captureUserToken}>SignOut</li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home
