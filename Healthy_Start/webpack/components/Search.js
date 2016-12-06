import React from 'react'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchResults = this.searchResults.bind(this)
        this.state = {
            recipes: [],
        }
    }

    searchResults(e) {
    var food = this._inputSearch.value;
    console.log(food);
    fetch('/api/search?food=' + food)
    .then(response => response.json())
    .then(response => this.setState({recipes: response}))
    console.log(this.state.recipes)
    e.preventDefault();
    }

    render() {
        
        return(
            <div>
                <form onSubmit={this.searchResults}>
                    <input type="text" ref={(a) => this._inputSearch = a} placeholder="search recipes..."></input>
                    <button type="submit">search recipe</button>
                </form>

                <h1>Search Results:</h1>
                <div className="container-fluid">
                    {/* {recipe.recipe_name} */}
                </div>
            </div>
        )
    }
}

export default Search
