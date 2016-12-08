import React from 'react'


class NutritionList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('Nutrition component did mount')
        //On mount call method to retrieve list of nutritions
        // this.retrieveNutritionList()
        // console.log('Nutrition component about to retrieve Nutrition List')
    }

    retrieveNutrionList() {
        // console.log('Call server to return list of nutritions from database')
        // //Fire off ajax to obtain Nutrition List from database
        // fetch('/api/nutritions')
        // //Convert server response to Javascript object notation
        // .then(response => response.json())
        // //Update the current empty nutritionList array with the response for the ajax call, use curl brackets b/c this.state is an object.
        // .then(response => this.setState({nutritionList: response}))
    }

    render() {
        // //Display contents nutrition list w/ click feature to update the current nutrition details
        // var nutritionDisplay = this.state.nutritionList.map((nutrition, i) =>{
        //     return(
        //         <li key={i}>{nutrition}</li>
        //     )
        // })
        // console.log(this.state.nutritionList)
        return(
            <div>
                <h1>Nutrition List</h1>
                <ol>
                    {/* {nutritionDisplay} */}
                </ol>

            </div>
        )
    }
}

export default NutritionList
