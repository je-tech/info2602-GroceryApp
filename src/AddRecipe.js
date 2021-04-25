import React from "react";
import {useState, useEffect}from 'react';
import Recipe from "./Recipes";
import{BrowserRouter as Router,Route,Link,NavLink,Switch,button}from "react-router-dom"


const AddRecipe=()=>{
    const[querylink,noQuery]=useState('');
    const[search,nosearch]=useState("");
    const Searchitem = a =>{
        nosearch(a.target.value);
 
       }
       const[recipes,noRecipes]=useState([]);
 
 const Applicationkey="521f8eb62b6f5613ef73d1e4578f4cd6";
 const ApplicationID="0b8b92c8";
 
  useEffect( () => {
    reqReciepes();

   }, [querylink]);
    

      const reqSearch = a =>{
        a.preventDefault();
        noQuery(search);
      }
      

     
      
      const reqReciepes = async() => {
        const response = await fetch(
          `https://api.edamam.com/search?q=${querylink}&app_id=${ ApplicationID}&app_key=${Applicationkey}`
          );
     const data = await response.json();
     //console.log(data.hits);
     noRecipes(data.hits);
     

      }
    
    return(<div>
      <h3>Find Recipes </h3>
      <form  onSubmit={reqSearch}  className="AppForm"  >
      <input className="searchRecipe" type="text" value={search}  onChange={Searchitem} />
    <button   class="search-btn waves-effect waves-light" type="submit"> Search</button>
    </form>
    <div className="recipes">
  {recipes.map(reci => (
    <Recipe 
    key={reci.recipe.label}
    title={ reci.recipe.label} 
    ingredients={reci.recipe.ingredients}
    image={reci.recipe.image}
    
    
    

   
      />
  ))}
  </div>
    </div>

    
    )}
    
  export default AddRecipe;