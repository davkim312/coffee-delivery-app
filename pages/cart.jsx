import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tableTitle}>
                        <th></th>
                        <th>Item</th>
                        <th>Name</th>
                        <th>Specialty Ingredients</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imageContainer}>
                                <Image 
                                    src='/img/dalgonacoffeeimg.jpg'
                                    alt='' 
                                    layout='fill' 
                                    objectFit='cover' 
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Dalgona</span>
                        </td>
                        <td>
                            <span className={styles.specialties}>
                                One shot of Espresso
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$6.75</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$13.50</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imageContainer}>
                                <Image 
                                    src='/img/dalgonacoffeeimg.jpg'
                                    alt='' 
                                    layout='fill' 
                                    objectFit='cover' 
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Dalgona</span>
                        </td>
                        <td>
                            <span className={styles.specialties}>
                                One shot of Espresso
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$6.75</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$13.50</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$21.75
                    </div>
                    <br />
                    <div>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <br />
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$21.75
                    </div>
                    <br />
                    <button className={styles.button}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;