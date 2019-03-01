import React, { Component } from 'react';

import Recipe from './Recipe';
import RecipeSeach from './RecipeSeach';

class RecipeC extends Component {
  
    state = {  }
    render() { 
        const { recipes } = this.props;
        return ( 
<React.Fragment>
       
        <RecipeSeach />
<div className="container my-5">
<div className="row">
<div className="col-10 mx-aut0 col-md-6 text-center text-uppercase mb-3">
<h1 className="text-slanted"> Reciepe C</h1>
</div>
</div>
<div className="row">
   
{ recipes.map(recipe => { 
       return (<Recipe key={recipe.recipe_id} recipe={recipe}/>
    )}) 
}

</div>
</div>
        
        <Recipe/>
        
</React.Fragment>

         );
    }
}
 
export default RecipeC;