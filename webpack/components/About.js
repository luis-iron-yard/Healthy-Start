import React from 'react'


class About extends React.Component {
    constructor(){
        super()
    }


    render(){
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

        var recipeTitleStyle = {
            overflow: 'hidden',
        }
        var aboutBox = {
            margin: '30px',
        }
        var profileContainer = {
            display: 'flex',
        }
        var profileCard = {
            border: '1px solid black',
            margin: '2px',
            flex: '4',
            padding: '10px',
            // height: '300px'
        }
        var buttonStyling = {
            padding: '2%',
            margin: '3%',
            borderRadius: 15,
            color: '#66ccff',
            border: '2px solid #66ccff',
            boxShadow: '2px 2px 2px #fff',
            backgroundColor: '#fff',
        }
        return(
            <div className='viewSection'>
                <h3 className='pageTitle'>About Us</h3>
                <h4 style={aboutBox}>Healthy Start was created out of the need for an app that provides expecting mothers with a medium to educate themselves about crucial nutrients to their child during pregnancy, and foods that contain these nutrients. After researching existing apps for this target audience we discovered a need for expecting mothers to educate themselves about the dietary needs of their child.</h4>
                <h3 className='pageTitle'>About our application</h3>
                <h4 style={aboutBox}>The front end of the application was built using JS and React. The back end of the application was built using Ruby on Rails.</h4>
                <div className="container-fluid">
                    <div style={profileContainer} className="row">

                        <div style={profileCard} className="col-sm-4">
                            <div className="card text-center">
                                <img style={imageStyling} src="https://media.licdn.com/media/AAEAAQAAAAAAAAeiAAAAJDI3MWRhOTcxLTgwZjQtNGVhNy1hMzUyLTA4MDJmOWNkNDc0ZQ.jpg" alt="Keith image"/>
                                <div className="card-block"><br />
                                    <ul>
                                        <li><a style={buttonStyling} href="https://github.com/kbrook10">Github</a></li>
                                        <li><a style={buttonStyling} href="https://www.linkedin.com/in/keith-brooks-b41aa164">LinkedIn</a></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="card-block">
                                    <p>Keith is a Front-End software engineer with a passion for front end design and React.</p>
                                </div>
                            </div>
                        </div>

                        <div style={profileCard} className="col-sm-4">
                            <div className="card text-center">
                                <img style={imageStyling} src="https://avatars3.githubusercontent.com/u/17866073?v=3&s=400" alt="Luis image"/>
                                <div className="card-block"><br />
                                    <ul>
                                        <li><a style={buttonStyling} href="https://github.com/llancon">Github</a></li>
                                        <li><a style={buttonStyling} href="https://www.linkedin.com/in/luis-lancon-82649866/">LinkedIn</a></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="card-block">
                                    <p>Luis is a Back-End software engineer who specializes in Ruby on Rails, and server side development.</p>
                                </div>
                            </div>
                        </div>

                        <div style={profileCard} className="col-sm-4">
                            <div className="card text-center">
                                <img style={imageStyling} src="https://media.licdn.com/media/AAEAAQAAAAAAAAgsAAAAJGRjNWY1YWY1LWQ2MmQtNDllMS1iNjY4LTcyMWY0NzM2ZTViNQ.jpg" alt="Sam image"/>
                                <div className="card-block"><br />
                                    <ul>
                                        <li><a style={buttonStyling} href="https://github.com/Sam-Riley">Github</a></li>
                                        <li><a style={buttonStyling} href="https://www.linkedin.com/in/sam-riley-b36b94b2
                                        ">LinkedIn</a></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="card-block">
                                    <p>Sam is a Front-End software engineer with an interest in Front-End frameworks, and React.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default About
