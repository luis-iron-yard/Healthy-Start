import React from 'react'

class Nutrient extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
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
        )

    }
}

export default Nutrient
