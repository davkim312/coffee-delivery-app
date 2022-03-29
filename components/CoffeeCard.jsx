import Image from 'next/image';
import styles from '../styles/CoffeeCard.module.css';

const CoffeeCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/dalgonacoffeeimg.jpg' alt='' width='500' height='500' />
        <h1 className={styles.title}>DALGONA COFFEE</h1>
            <span className={styles.price}>$6.50</span>
            <p className={styles.description}>
                Milk of your choice topped with hand-whipped cream made out of grounded coffee beans and brown sugar.
            </p>
    </div>
  )
};

export default CoffeeCard;