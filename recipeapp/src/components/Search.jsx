import { useEffect, useState } from "react";
import styles from './search.module.css';

const Search = ({foodData,setFoodData}) => {

    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "172ee69415a4471bbdd216dc48c7ca60";

    const [query,setQuery] = useState("");
    
    useEffect(()=>{
        const fetchSearch = async () => {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setFoodData(data.results);
        }
        fetchSearch()
    },[query])

    return(
        <div className={styles.search}>
            <div className={styles.text}>Search for food item:</div>
            <input 
            value={query}
            className={styles.input}
            onChange={(e)=>setQuery(e.target.value)}
            type="text"
            />
        </div>
    );
}

export default Search;