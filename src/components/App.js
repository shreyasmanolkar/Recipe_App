import React, { useState, useEffect } from "react";
import ReciepList from "./ReciepList";
import '../css/app.css'
import { v4 as uuidv4} from 'uuid'; 
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(),
          name: 'Name',
          amount: '1 Tbs'
        }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }
  
  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <ReciepList recipes={recipes}/>
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  );
};



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken \n2. put Chicken in oven \n3. Eat the Chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '1 kg'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbs'
      }
    ]
  },
  { id: 2,
    name: 'Plain Mutton',
    servings: 5,
    cookTime: '2:45',
    instructions: "1. Put masala on Mutton \n2. put Mutton on Barbeque \n3. Eat Mutton",
    ingredients: [
      {
        id: 1,
        name: 'Mutton',
        amount: '3 kg'
      },
      {
        id: 2,
        name: 'masala',
        amount: '3 tbs'
      }
    ]
  }
]

export default App;
