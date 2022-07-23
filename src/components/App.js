import ReciepList from "./ReciepList";
import '../css/app.css'

function App() {
  return (
    <ReciepList recipes={sampleRecipes}/>
  );
};

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken 2. put Chicken in oven 3. Eat the Chicken",
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
    instructions: "1. Put masala on Mutton 2. put Mutton on Barbeque 3. Eat Mutton",
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
