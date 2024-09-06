import { useState } from 'react'
import Search from './components/Search';
import { FoodDisplay } from './components/FoodDisplay';
import { Header } from './components/Header';
import './App.css';
import { InnerContainer } from './components/InnerContainer';
import { CommonContainer } from './components/CommonContainer';
import { RecipeDisplay } from './components/RecipeDisplay';

function App() {
  
  const [foodData,setFoodData] = useState([]);
  const [foodKey,setFoodKey] = useState("715415");

  return (
    <div className="App">
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <CommonContainer>
        <InnerContainer>
          <FoodDisplay setFoodKey={setFoodKey} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDisplay foodKey={foodKey} />
        </InnerContainer>
      </CommonContainer>
    </div>
  )
}

export default App;
