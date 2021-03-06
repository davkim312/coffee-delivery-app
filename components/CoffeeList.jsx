import styles from '../styles/CoffeeList.module.css';
import CoffeeCard from './CoffeeCard';

const CoffeeList = ({ coffeeList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get coffee delivered right to you!</h1>
            <p className={styles.description}>
                Working from home? or working at the office? Need a quick energy boost? Get great quality coffee delivered to right to you!
            </p>
            <div className={styles.wrapper}>
                {coffeeList.map((coffee) => (
                    <CoffeeCard key={coffee._id} coffee={coffee} />
                ))}
            </div>
        </div>
    )
};

export default CoffeeList;