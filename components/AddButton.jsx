import styles from '../styles/AddButton.module.css';

const AddButton = ({ setClose }) => {
    return (
        <div 
            onClick={() => setClose(false)} 
            className={styles.mainButton}
        >
            Add New Drink
        </div>
    )
};

export default AddButton;