import React from 'react'
import Search from './Search'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.retrieveQuote = this.retrieveQuote.bind(this)
        this.state = {
            quote: '',
            favorites: [],
        }
    }

    componentDidMount(){
        this.retrieveQuote()
        this.retrieveFavorites()
    }

    deleteRecipe() {
        // console.log("Delete button firing off delete function")
    }

    retrieveQuote(){
        //Fire off Ajax to retrieve quote as users mounts page...
        fetch('/api/quote/?method=getQuote&format=json&lang=en')
        .then(response => response.json())
        .then(response => {
            this.setState({quote: response})
            // console.log(this.state.quote)
        })
    }

    retrieveFavorites(){
        var email = sessionStorage.getItem('email')
        var user = sessionStorage.getItem('authentication_token')
        fetch('/api/favorites?user_email=' + email + '&user_token=' + user)
        .then(response => response.json())
        // .then(response => this.setState({favorites: response})
        .then(response => {console.log(response)})
    }

    render() {
        console.log(this.state.favorites)

        var quoteText = this.state.quote.quoteText
        var quoteAuthor = this.state.quote.quoteAuthor
        var quoteLink = this.state.quote.quoteLink
        var profileContainer = {
            display: 'flex',
        }
        var profileDetails = {
            flex: 4,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 20,
        }
        var favoriteDetails = {
            flex: 8,
            padding: 20,
        }
        var imageStyling = {
            borderRadius: '50%',
            width: '50%',
        }
        var cardStyle = {
            margin: '3%',
            padding: '5%',
            fontSize: '1em',
            border: '1px solid #66ccff',
            borderRadius: '40px 10px',
            boxShadow: '0 0 5px #5F5F5F',
        }
        return(
            <div className='viewSection'>
                <h4 className='pageTitle'>Profile</h4>
                <div style={profileContainer}>
                    <div style={profileDetails}>
                        <h1>Profile Section</h1><br />
                        <img style={imageStyling} src='https://unsplash.it/600/?random' alt='random image for profile'/><br />
                        <h5>Quote for the Day:</h5>
                        <blockquote>{quoteText}</blockquote>
                        <footer> - <i>{quoteAuthor}</i></footer><br />
                        <a href={quoteLink} target='_blank'>Link to Quote</a>
                    </div>
                    <div style={favoriteDetails}>

                        <h1>Favorites Section</h1>

                        <div className='card' style={cardStyle}>
                              <div className='row'>
                                <div className='col-sm-6 cardContainer'>
                                  <img className='cardContainer img-responsive' src='https://unsplash.it/600/?random' alt='Recipe image '/>
                                </div>
                                <div className='col-sm-6'>
                                  <h4 className='cardInfo card-title'>Name of Recipe</h4><br />
                                  <a href='#'>Click here for recipe!</a>
                                      <div className='row'><br />
                                          <div className='col-sm-12'>
                                              <button onClick={()=>this.deleteRecipe()} className="btn btn-default">Delete</button>
                                          </div>
                                      </div>
                                </div>
                              </div>
                          </div>

                        <div className='card' style={cardStyle}>
                              <div className='row'>
                                <div className='col-sm-6 cardContainer'>
                                  <img className='cardContainer img-responsive' src='https://unsplash.it/600/?random' alt='Recipe image '/>
                                </div>
                                <div className='col-sm-6'>
                                  <h4 className='cardInfo card-title'>Name of Recipe</h4><br />
                                  <a href='#'>Click here for recipe!</a>
                                      <div className='row'><br />
                                          <div className='col-sm-12'>
                                              <button onClick={()=>this.deleteRecipe()} className="btn btn-default">Delete</button>
                                          </div>
                                      </div>
                                </div>
                              </div>
                          </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Profile
