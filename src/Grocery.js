import React from 'react';
import AddRecipe from './AddRecipe';
import Additem from'./Additem';
import{BrowserRouter as Router,Route,Link,NavLink,Switch}from "react-router-dom"
import{ Button} from 'semantic-ui-react';
const Grocery=({logout_func})=>{
    return(
                <section className="Grocery">
            
            <nav>
                <h2>The Grocery List</h2>
                
               
                
                
                
                <button type="button" class="btn btn-default waves-effect waves-light"  onClick={logout_func}>logout</button>

            </nav>
            <body>
                <section className="butt">
            <Router>
                    <NavLink exact activeClassName="active" to="/AddRecipe"><button type="button"  class="btn btn-default waves-effect waves-light">Add Recipe </button> </NavLink>
                    <NavLink exact activeClassName="active" to="/Additem"><button type="button"  class="btn btn-default waves-effect waves-light">ADD Item </button></NavLink>
                    

                    
                    <Switch>
                    <Route path="/AddRecipe" component={AddRecipe}></Route>
                    <Route path="/Additem" component={Additem}></Route>
                   
                   
                    
                    </Switch> 
                    
                    


                    
                </Router>
               
               
                
                </section>
            </body>

        </section>
        
        
    )
}

export default Grocery;
