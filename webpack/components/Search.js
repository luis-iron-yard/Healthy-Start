import React from 'react'



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchResults = this.searchResults.bind(this)
        this.savedRecipes = this.savedRecipes.bind(this)
        this.state = {
            recipes: [],
            favorites: [],
        }
    }
    componentDidMount() {
        fetch('/api/search?food=' + sessionStorage.getItem('searchValue'))
        .then(response => response.json())
        .then(response => this.setState({recipes: response}))
        // .then(response => console.log(response))
    }


    searchResults(e) {
        sessionStorage.setItem('searchValue', this._inputSearch.value)

        var food = this._inputSearch.value;
        //this takes the value of the input field (attached to _inputSearch) and attaches it to the variable food
        // console.log(food);
        fetch('/api/search?food=' + food)
        //^ this line fetches the api and runs our value(food) against it
        .then(response => response.json())
        //^ this line turns the api call into JSON data
        .then(response => console.log(response))
    }


    savedRecipes(recipe){
        //When the save button is clicked, it fires off this function and takes in the prop recipe from our loop newRecipes
        var updatedRecipes = this.state.favorites
        //we are assigning ^^this variable to the empty array favorites
        updatedRecipes.push(recipe)
        //taking updatedRecipes(favorites array) and pushing these properties into each object that is "saved" and added to the favorites array
        this.setState({
            favorites: updatedRecipes
        })
        //this set's the new state of the array favorites from empty to updatedRecipes, with ech new OBJECT carrying the properties we defined above

        // console.log(updatedRecipes)

        this.addFavoriteRecipe(recipe)

    }

    addFavoriteRecipe(recipe) {
        //Below is the fetch call that will POST the saved favorite recipes
        fetch("/api/favorites", {
            body:JSON.stringify({
                id: recipe.id,
                user_token: sessionStorage.getItem('authentication_token'),
                user_email: sessionStorage.getItem('email'),
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            sessionStorage.getItem('authentication_token', response.authentication_token)
            // console.log(response.authentication_token)

        })

        // formData.append('id'), sessionStorage.getItem('recipe_id')
        // formData.append('user_token'), sessionStorage.getItem('authentication_token')
        // formData.append('user_email'), sessionStorage.getItem('user_email')
    }




    render() {
        // console.log(this.state.recipes)
        console.log(this.state.favorites)
        // window.authenticate_token = sessionStorage.getItem('authenticate_token')
        // console.log(authenticate_token)

        var newRecipes = this.state.recipes.map((recipe, i) =>{
            //this^^ takes our empty array 'recipes', loops through it and assigns each incoming object as 'recipe' and assigns it an index (i) number. Below in the render function we are taking each of these objects we are receiving from the API call and displaying the various properties in each list item (li) that we are looping through, which is what gets rendered in our list (ul) by calling on our newRecipes variable
            return (
                <li key={i}>

                  <div className="card">
                        <div className="row">
                          <div className="col-sm-6 cardContainer">
                            <img className="cardContainer img-responsive" src={recipe.food_image} alt="Recipe image "/>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="cardInfo card-title">{recipe.recipe_name}</h4><br />
                            <a href={recipe.instruction}>Click here for recipe!</a>
                                <div className="row"><br />
                                    <div className="col-sm-12">
                                        <button onClick={()=>this.savedRecipes(recipe)} className="btn btn-default">Save</button>
                                    </div>
                                </div>
                          </div>
                        </div>
                    </div>

                </li>
            )
        })
        return(
            <div>
                <form onSubmit={this.searchResults}>
                    <input type="text" ref={(a) => this._inputSearch = a} placeholder="search recipes..."></input>
                    <button type="submit">search recipe</button>
                </form>
                <h1>Search Results</h1>
                <div className="col-sm-6">
                    <h4>Recipes:</h4>
                    <ol>
                        {newRecipes}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search
