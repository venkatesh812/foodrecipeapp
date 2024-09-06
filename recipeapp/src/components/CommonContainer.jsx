import styles from './commoncontainer.module.css';

export const CommonContainer = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}