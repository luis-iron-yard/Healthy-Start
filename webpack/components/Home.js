import React from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this)
        this.kickUserToLogin = this.kickUserToLogin.bind(this)
        this.state = {

        }
    }

    signOut() {
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
        var footerStyling = {
            backgroundColor: '#000',
            color: '#fff',
        }
        var headerStyling = {
            backgroundColor: '#0074D9',
            color: '#fff',
        }
        return(
            <div className='hm_body_style '>
                <ul style={headerStyling} className='hm_header_style'>
                    <li >Healthy Start</li>
                    <li style={navStyling} onClick={() => browserHistory.push('/home/nutrition')}>Nutrition</li>
                    {/* <li style={navStyling} onClick={() => browserHistory.push('/home/illness')}>Illness</li> */}
                    <li style={navStyling} onClick={() => browserHistory.push('/home/search')}>Search</li>
                    <li style={navStyling} onClick={() => browserHistory.push('/home/profile')}>Favorites</li>
                    <li style={navStyling} onClick={this.signOut}>SignOut</li>
                </ul>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <footer style={footerStyling} className='footer'>
                        <div className='container hm--Footer'>
                            <div className='row'>
                                <div className='col-sm-4 col-xs-4'>
                                    <h5>Healthy Start &copy;2016</h5>
                                </div>
                                <div className='col-sm-4 col-xs-4'>
                                    <h5 className='text-center'><a href='https://www.theironyard.com/locations/indianapolis.html' alt='link to TIY Indianapolis' target='_blank'>The Iron Yard - Indianapolis</a></h5>
                                </div>
                                <div className='col-sm-4 col-xs-4'>
                                    {/* <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' alt='get to know us more link'><h5 className='text-right'>About Us</h5></a> */}
                                    <Link to="/home/about"><h5 style={navStyling} onClick='' className='text-right'>About Us</h5></Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Home
