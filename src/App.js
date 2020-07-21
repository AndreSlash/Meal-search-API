import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';


const App =()=>{
  const APP_ID="89a2a3d8";
const APP_KEY="8ab374bf3c2024d5412a6c8dfcbc0133";
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('chicken');
useEffect(()=>{
  getRecipes();
},[query])

const getRecipes=async ()=>{
  
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data=await response.json();
  setRecipes(data.hits);
}
const updateSearch=(e)=>{
  setSearch(e.target.value); 
}
const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
}
return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search} type="text" onChange={updateSearch}/>
        <button 
          
          className="search-button"
          type="submit">
          Search
        </button>
        
      </form>
      {recipes.map(recipe=>(
        <Recipe calories={recipe.recipe.calories} image={recipe.recipe.image} title={recipe.recipe.label}/>
      ))}
    </div>
  );
}
export default App;
//`