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
    e.preventDefault();
    }


    render() {
        console.log(this.state.recipes)
        var newRecipes = this.state.recipes.map((recipe, i) =>{
            return (
                <li key={i}>
                  {/* <div className="card">
                      <img className="card-img-top" src={recipe.food_image} alt="Card image cap"/>
                      <div className="card-block" >
                        <h4 className="card-title">{recipe.recipe_name}</h4>
                        <p className="card-text">{recipe.instruction}</p>
                      </div>
                    </div> */}

                    <div className="col s12 m7">
                        <h2 className="header">{recipe.recipe_name}</h2>
                        <div className="card horizontal">
                          <div className="card-image">
                            <img src={recipe.food_image} />
                          </div>
                          <div className="card-stacked">
                            <div className="card-action">
                              <a href={recipe.instruction}>Click here for recipe!</a>
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
                <div className="col-sm-11">
                    <h4>Recipes:</h4>
                    <ol>
                        {/* <li> */}
                            {/* <div className="pictureHolder">
                                <div className="col-xs-6">
                                    <img src="http://unsplash.it/200/120?random"  />
                                </div><br />
                            <div className="col-xs-6"><br />
                              <h5>recipe_name</h5>
                              <span>instruction</span><br />
                            </div>
                          </div> */}

                          {/* <div className="card">
                              <img className="card-img-top" src="http://unsplash.it/200/120?random" alt="Card image cap"/>
                              <div className="card-block">
                                <h4 className="card-title">Recipe</h4>
                                <p className="card-text">Link to recipe</p>
                              </div>
                            </div>

                            <div className="col s12 m7">
                                <h2 className="header">Recipe</h2>
                                <div className="card horizontal">
                                  <div className="card-image">
                                    <img src="http://lorempixel.com/100/190/nature/6" />
                                  </div>
                                  <div className="card-stacked">
                                    <div className="card-content">
                                      <p>I am a very simple card. I am good at containing small bits of information.</p>
                                    </div>
                                    <div className="card-action">
                                      <a href="#">This is a link</a>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                        {/* </li> */}

                        {newRecipes}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search
