import styles from './innercontainer.module.css';


export const InnerContainer = ({children}) => {
    return (
        <div className={styles.innercontainer}>
            {children}
        </div>
    );
}