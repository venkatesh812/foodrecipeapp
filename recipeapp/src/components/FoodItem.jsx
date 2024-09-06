import styles from './fooditem.module.css';

export const FoodItem = ({food,setFoodKey}) => {
    return (
        <div className={styles.item}>
          <img src={food.image} alt=" " className={styles.image} />
          <div className={styles.itemName}>{food.title}</div>
          <button onClick={()=>setFoodKey(food.id)} className={styles.button}>View Recipe</button>
        </div>
    )
}