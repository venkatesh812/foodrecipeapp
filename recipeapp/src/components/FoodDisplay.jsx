import { FoodItem } from "./FoodItem"
import styles from "./fooddisplay.module.css";

export const FoodDisplay = ({foodData,setFoodKey}) => {
    return (
        <div className={styles.container}>
            <h3>Food Items</h3>
            {foodData.map((food) => (
                <FoodItem key={food.id} food={food} setFoodKey={setFoodKey} />
            ))}
        </div>
    )
}
