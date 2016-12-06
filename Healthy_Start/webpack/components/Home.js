import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {
    render() {
        var headerStyle = {
            fontFamily: 'Lobster',
            fontSize: 25,
            backgroundColor: '#000',
            color: '#fff',
            padding: 25,
            textAlign: 'left',
        }
        var bodyStyle = {
            padding: 20,
            margin: 0,
            backgroundColor: '#66ccff',
            height: 700,
        }
        return(
            // <div>
            //     <h1>Home</h1>
            //     {this.props.children}
            // </div>
            <div style={bodyStyle}>
                {/* <h1>Home</h1> */}
                <ul style={headerStyle}>
                    <li onClick={() => browserHistory.push('home')}>Healthy Start</li>
                    <li onClick={() => browserHistory.push('/home/nutrition')}>Nutrition</li>
                    <li onClick={() => browserHistory.push('/home/illness')}>Illness</li>
                    <li onClick={() => browserHistory.push('/home/search')}>Search</li>
                    <li onClick={() => browserHistory.push('/home/profile')}>Profile</li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home
