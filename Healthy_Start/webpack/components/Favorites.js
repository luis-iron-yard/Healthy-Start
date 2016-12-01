import React from 'react'
import Nav from './Nav'
import User from './User'
import Recipes from './Recipes'

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
             <div className="container-fluid">
                <Nav />
             </div>
              {/* <!--END OF NAV BAR--> */}

            {/* <!--START OF CONTENT--> */}
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-sm-3">
                         <User />
                     </div>
                     <div className="col-sm-9">
                         <Recipes />
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}

export default Favorites
