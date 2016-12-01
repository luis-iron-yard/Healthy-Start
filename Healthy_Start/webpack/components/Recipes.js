import React from 'react'
import { Link } from 'react-router'

class Recipe extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="row">
                <div className="pictureHolder">
                    <div className="col-xs-6">
                  <img src="http://unsplash.it/200/120?random"  />
                </div>
                <div className="col-xs-6">
                  <h6>Recipe #1</h6>
                  <span>Title of picture. It needs to have more words.</span><br />
                </div>
              </div>
            </div>
        )
    }
}

export default Recipe
