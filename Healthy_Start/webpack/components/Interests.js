import React from 'react'
import { Link } from 'react-router'

class Interests extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
             <div className="container-fluid">
                <div className="row navBar">

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
                    <button type="button" className="btn btn-lg btn-primary btn-block"><img src="http://bonniesomerville.nz/wp-content/uploads/2015/08/profile-icon.png" /*style="width: 1.5em"*//></button>
                  </div>

                </div>
              </div>
              {/* <!--END OF NAV BAR--> */}

            {/* <!--START OF CONTENT--> */}
              <div className="container-fluid well">

                <div className="col-sm-3">
                    <ol id="sidebar">
                      <h4>Nutrients:</h4>

                      <li><a href="">Vitamin A</a></li>

                      <li><a href="">Vitamin B</a></li>

                      <li><a href="">Vitamin C</a></li>

                        <li><a href="">Vitamin D</a></li>

                        <li><a href="">Vitamin K</a></li>

                        <li><a href="">Folic Acid</a></li>

                        <li><a href="">Iron</a></li>

                        <li><a href="">Zinc</a></li>

                        <li><a href="">Calcium</a></li>

                        <li><a href="">Omega 3 / fatty acid</a></li>

                        <li><a href="">Protein</a></li>

                        <li><a href="">Potassium</a></li>
                      </ol>
                  </div>

                  <div className="col-sm-9">
                      <div className="container-fluid well nutriFacts">
                        <h2>Vitamin A</h2>
                        <h4>Benefits:</h4>
                          <p>
                            Vitamin A has multiple functions: it is important for growth and development, for the maintanence of the immune system and good vision.
                          </p>
                        <h4>Common Foods:</h4>
                          <ul>
                            <li>Broccoli</li>
                            <li>Carrots</li>
                            <li>Sweet Potatoes</li>
                          </ul>
                      </div>

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

export default Interests
