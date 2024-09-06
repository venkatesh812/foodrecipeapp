import { useEffect, useState } from "react";
import styles from "./recipedisplay.module.css";

export const RecipeDisplay = ({foodKey}) => {
    const [recipe,setRecipe] = useState("");
    const [recipeAcquired,setRecipeAcquired] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodKey}/information`;
    const API_KEY = "172ee69415a4471bbdd216dc48c7ca60";

    useEffect(()=>{
        const fetchRecipe = async () => {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setRecipe(data);
            setRecipeAcquired(false);
        }
        fetchRecipe()
    },[foodKey])
    return (
        <div className={styles.recipecontainer}>
            <div className={styles.recipeimg}>
                <h1>{recipe.title}</h1>
                <img className={styles.recipeimage} src={recipe.image} alt="" />
            </div>
            <div className={styles.recipeatt}>
                <span>⏰ <strong> Ready in {recipe.readyInMinutes} Minutes</strong></span>
                <span><strong> Type:-{recipe.vegetarian?"🍆Vegetarian": "🍗Non-Vegetarian"}</strong></span>
                <span>👨‍👩‍👧‍👦<strong> Serves:- {recipe.servings}</strong></span>
            </div>
            <div>
                <h2>Ingredients</h2>
                <div className={styles.recipeingredients}>
                {recipeAcquired?(
                    <p>Loading the Ingredients ........</p>
                ):
                (recipe.extendedIngredients.map((item)=>(
                    <div className={styles.ingbox}>
                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
                        <h3>{item.name}: {item.amount} {item.unit}</h3>
                    </div>
                )))
                }
                </div>
            </div>
            <div>
                <h2>Process</h2>
                <div className={styles.recipedetail}>
                <ol >
                {recipeAcquired?(
                    <p>Loading the recipe ........</p>
                ):
                (recipe.analyzedInstructions[0].steps.map((step)=>(
                    <li>{step.step}</li>
                )))
                }
                </ol>
                </div>
            </div>
        </div>
    )
}