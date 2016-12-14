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
        })
    }

    retrieveFavorites(){
        var email = sessionStorage.getItem('email')
        var user = sessionStorage.getItem('authentication_token')
        fetch('/api/favorites?user_email=' + email + '&user_token=' + user)
        .then(response => response.json())
        .then(response => {
            this.setState({favorites: response})
        })
    }

    render() {
        // console.log(this.state.favorites)

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
        var favoriteRecipes = this.state.favorites.map((recipe,i)=>{
            return(
                // <li key={i}>
                <div className='col-sm-3 ns-listItemRecipe' key={i}>
                    <div className="card text-center">
                        <div className="card-block">
                            <h6 style={recipeTitleStyle} className="card-subtitle text-muted">{recipe.recipe_name}</h6>
                        </div>
                        <img style={imgStyle} src={recipe.food_image} alt="Card image"/>
                        <div className="card-block">
                            <a style={buttonAStyling} href={recipe.instruction} target="_blank" className="card-link">Instructions</a>
                            <button style={buttonStyling} href="#" className="card-link" onClick={()=>this.deleteRecipes(recipe)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className='viewSection'>
                <h4 className='pageTitle'>Favorites</h4>
                <div style={profileContainer}>
                    <div style={profileDetails}>
                        <h1>Favorites Section</h1><br />
                        <img style={imageStyling} src='/img/duck.jpeg' alt='random image for profile'/><br />
                        <h6 className='text-center'>Photograph courtesy of www.wallpaperlite.com</h6><br />
                        <h5>Inspirational Quote:</h5>
                        <blockquote>{quoteText}</blockquote>
                        <footer> - <i>{quoteAuthor}</i></footer><br />
                        <a href={quoteLink} target='_blank'>Link to Quote</a>
                    </div>
                    <div style={favoriteDetails}>

                        <div className="container-fluid">
                            <h4>Saved:</h4>
                            {/* {favoriteRecipes} */}

                            <div className="row">
                                {favoriteRecipes}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Profile
