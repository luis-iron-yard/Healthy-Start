import React from 'react'
import Search from './Search'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.retrieveQuote = this.retrieveQuote.bind(this)
        this.state = {
            quote: '',
            favorites: [],
            user: {},
        }
    }

    componentWillMount() {
        this.retrieveQuote()
        this.retrieveFavorites()
        var user = JSON.parse(sessionStorage.getItem('user'))
        this.setState({
            user: user
        })
    }

    deleteRecipe() {
        // console.log("Delete button firing off delete function")
    }

    retrieveQuote() {
        //Fire off Ajax to retrieve quote as users mounts page...
        fetch('/api/quote/?method=getQuote&format=json&lang=en')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    quote: response
                })
            })
    }

    retrieveFavorites() {
        var email = sessionStorage.getItem('email')
        var user = sessionStorage.getItem('authentication_token')
        fetch('/api/favorites?user_email=' + email + '&user_token=' + user)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    favorites: response
                })
            })
    }

    render() {
        // console.log(this.state.favorites)

        var quoteText = this.state.quote.quoteText
        var quoteAuthor = this.state.quote.quoteAuthor
        var quoteLink = this.state.quote.quoteLink
        var profileContainer = {

            display: 'inline-block'


        }
        var profileDetails = {
            flex: 4,
            display: 'flex',
            textAlign: 'left',
            alignItems: 'left',
            padding: '5%',
            display: 'inline-block'


        }
        var favoriteDetails = {
            flex: 9,
            padding: 30,
            backgroundColor: '#fff',

        }
        var imageStyling = {
            borderRadius: '50%',
            width: '50%',
        }
        var imgStyle = {
            width: '100%',
            borderRadius: '10%',
            boxShadow: '5px 3px 4px grey',
            textAlign: 'center'
        }
        var cardStyle = {
            margin: '3%',
            padding: '5%',
            fontSize: '1em',
            border: '1px solid #66ccff',
            borderRadius: '40px 10px',
            boxShadow: '0 0 5px #5F5F5F',
            color: '#66ccff',
            backgroundColor: '#fff',
            itemAlign: 'right',

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
        var profileTitleStyle = {
            textAlign: 'center',

        }
        var favoriteRecipes = this.state.favorites.map((recipe, i) => {
            return (




                <
                div className = 'col-xs-11 col-sm-2 col-md-5 col-lg-3 ns-listItemRecipe'
                key = {
                    i
                } >
                <
                div className = "card text-center" >
                <
                div className = "card-block" >
                <
                h6 style = {
                    recipeTitleStyle
                }
                className = "card-subtitle text-muted" > {
                    recipe.recipe_name
                } < /h6> <
                /div> <
                img style = {
                    imgStyle
                }
                src = {
                    recipe.food_image
                }
                alt = "Card image" / >
                <
                div className = "card-block" >
                <
                a style = {
                    buttonAStyling
                }
                href = {
                    recipe.instruction
                }
                target = "_blank"
                className = "card-link" > Instructions < /a> { /* <button style={buttonStyling} href="#" className="card-link" onClick={()=>this.deleteRecipes(recipe)}>Delete</button> */ } <
                /div> <
                /div> <
                /div>
            )
        })
        return ( <
            div className = 'container' >
            <
            div className = 'row' >

            <
            div className = 'col-xs-12 col-sm-6  col-md-6 col-lg-6 viewSection' >
            <
            div style = {
                profileTitleStyle
            } >
            <
            h4 className = 'pageTitle' > Favorites < /h4> <
            /div> <
            div style = {
                profileContainer
            } >
            <
            div style = {
                profileDetails
            } >

            <
            img style = {
                imageStyling
            }
            src = {
                this.state.user.photo ? this.state.user.photo : '/img/duck.jpeg'
            }
            alt = 'random image for profile' / > < br / > { /* <h6 className='text-center'>Photograph courtesy of www.wallpaperlite.com</h6><br /> */ } <
            h6 > Inspirational Quote: < /h6> <
            blockquote > {
                quoteText
            } < /blockquote> <
            footer > - < i > {
                quoteAuthor
            } < /i></footer >

            <
            /div> <
            /div>

            <
            /div> <
            div style = {
                favoriteDetails
            } >

            <
            div className = "container" >
            <
            br > < /br> <
            div className = "row" > {
                favoriteRecipes
            } <
            /div> <
            /div> <
            /div>

            <
            /div>

            <
            /div>
        )
    }
}

export default Profile
