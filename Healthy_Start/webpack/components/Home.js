import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {
    render() {
        return(
            <div className='hm_body_style'>
                <ul className='hm_header_style'>
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
