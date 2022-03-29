import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {  
    return (
        <div className={styles.container}>
            <div className={styles.item}> { /* these will be menu links */ }
                <div className={styles.callButton}>
                    <Image src='/img/telephone.png' alt='' height='35' width='35' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>(123)-456-7890</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src='/img/logo2.jpg' alt='' height='200px' width='200px' /> 
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src='/img/cart.png' alt='' height='35px' width='35px' /> 
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;