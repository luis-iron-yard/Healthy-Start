import React from 'react'
import { Link } from 'react-router'

class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>

              <div className="container-fluid navBar">
                <div className="row">

                  <div className="col-sm-2">
                    <button type="button" className="btn btn-lg btn-primary btn-block">Nutrition</button>
                  </div>

                  <div className="col-sm-2">
                    <button type="button" className="btn btn-lg btn-primary btn-block">Complaint</button>
                  </div>

                  <div className="col-sm-6">
                      <div className="form-group">
                      <input type="text" className="form-control input-lg" placeholder="search recipes" />
                      </div>
                  </div>

                  <div className="col-sm-2">
                    <button type="button" className="btn btn-lg btn-primary btn-block"><img src="http://bonniesomerville.nz/wp-content/uploads/2015/08/profile-icon.png" style="width: 1.5em"/></button>
                  </div>

                </div>
              </div>
              {/* <!--END OF NAV BAR--> */}

            {/* <!--START OF CONTENT--> */}
              <div className="container-fluid well">

                <div className="col-sm-3">

                    <h6>Profile</h6>
                    <div className="row">
                      <div className="proPicHolder">
                              <img className="proPic" src="http://unsplash.it/150/150?random"  />
                      </div>
                    </div>
                    <div className="row">
                      <div className="proPicHolder">
                        <h5>Quote:</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>

                  </div>



            {/* <!-- SAVED RECIPE AREA --> */}
                  <div className="col-sm-9">


                    <div className="container-fluid well">

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

                    <div className="row">
                        <div className="pictureHolder">
                            <div className="col-xs-6">
                          <img src="http://unsplash.it/200/120?random"  />
                        </div>
                        <div className="col-xs-6">
                          <h6>Recipe #2</h6>
                          <span>Title of picture. It needs to have more words.</span><br />
                        </div>
                      </div>
                    </div>


                    </div>

                  </div>

              </div>

            </main>
        )
    }
}

export default Favorites
