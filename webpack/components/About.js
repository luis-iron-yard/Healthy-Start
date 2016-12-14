import React from 'react'


class About extends React.Component {
    constructor(){
        super()
    }


    render(){
        var favoriteDetails = {
            flex: 8,
            padding: 20,
        }
        var imageStyling = {
            borderRadius: '50%',
            width: '50%',
        }
        var imgStyle = {
            width: '100%',
            borderRadius: '2%',
            boxShadow: '3px 3px 4px grey',
            textAlign: 'center'
        }
        var cardStyle = {
            margin: '3%',
            padding: '5%',
            fontSize: '1em',
            border: '1px solid #66ccff',
            borderRadius: '40px 10px',
            boxShadow: '0 0 5px #5F5F5F',
        }
        var buttonAStyling = {
            textDecoration: 'none',
            display: 'block',
            margin: '15px 0 15px 0',
            padding: 2.5,
            width: '100%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var buttonStyling = {
            marginTop: 12,
            marginBottom: 5,
            width: '100%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        var recipeTitleStyle = {
            overflow: 'hidden',
        }
        return(
            <div className='viewSection'>
                <h4 className='pageTitle'>About Us</h4>
                <div className="container-fluid">
                    <div className="row">
                        <p>Healthy Start was created out of the need for an app that provides expecting mothers with a medium to educate themselves about crucial nutrients to their child during pregnancy, and foods that contain these nutrients.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
