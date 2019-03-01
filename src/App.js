import './App.css';

import React, { Component } from 'react';

import RecipeC from './componentx/RecipeC';
import RecipeDetail from './componentx/RecipeDetail';
import {recipes} from './tempList';

class App extends Component {
  state = {
    recipes: recipes,
    url:
    "https://www.food2fork.com/api/search?key=0f462d9db0775f89e180bb31c7c8c072"
  };

//   async getRecipes(){
//   try  {
//     const data = await fetch (this.state.url);
//     const jsonData = await data.json();
//     this.setState({
//       recipes:jsonData.recipes
//     });
//   } 
//   catch(error){
//     console.log(error);
//   }
// }
// componentDidMount(){
//   this.getRecipes()
// }
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
   
      <RecipeC  recipes={this.state.recipes}/>
   
    
  
      <RecipeDetail />
      </React.Fragment>
    );
  }
}

export default App;
