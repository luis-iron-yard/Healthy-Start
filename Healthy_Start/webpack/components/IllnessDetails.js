// import React from 'react'
// import IllnessRecipes from './IllnessRecipes'
//
// class IllnessDetails extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selectedFood: undefined,
//         }
//
//     }
//
//     componentWillReceiveProps(nextProps) {
//         this.setState({selectedFood: undefined})
//     }
//
//     captureFoodSearch(food) {
//         this.setState({selectedFood: food})
//     }
//
//
// // TODO: (1)Render Current Nutrient in Component; (2) Capture clicked on Food (Not clicking on current food); (3)Use current food item to conduct fetch for receips; (3) Render recipes to the Nutrient Recipes Component
//
//
//     render() {
//         var foods = ''
//         if(this.props.currentNutrient) {
//              foods = this.props.currentNutrient.foods.map((food, i) => {
//                 return <li key={i} onClick={() => this.captureFoodSearch(food)}>{food.name}</li>
//             })
//         }
//
//         return(
//             <div>
//                 <div className='ns--nutritionDesc'>
//                     <h4 className='ns--sectionHeader'>Nutrition Details</h4>
//                     <div className='ns--card'>
//                         <h5>Nutrient Name: </h5>
//                         {/* <p>Lorem ipsum dolor sit amet</p><br /> */}
//                         <p>{this.props.currentNutrient? this.props.currentNutrient.nutrient: ''}</p><br />
//                         <h5>Nutrien Benefits:</h5>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
//                         <ul>
//                             {foods}
//                         </ul>
//                     </div>
//                     <hr />
//                 </div>
//                 <IllnessRecipes food={this.state.selectedFood} />
//             </div>
//         )
//     }
// }
//
// export default IllnessDetails
