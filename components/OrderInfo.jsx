import styles from '../styles/OrderInfo.module.css';
import { useState } from 'react';

const OrderInfo = ({ total, createOrder }) => {

    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');

    const handleClick = () => {
        createOrder({  customer, address, total, method: 0 })
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>There's a $5.00 delivery fee that will be added to the total.</h1>
                <div className={styles.info}>
                    <label className={styles.label}>Name</label>
                    <input 
                        placeholder='Name' 
                        type='text' 
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.info}>
                    <label className={styles.label}>Phone Number</label>
                    <input 
                        placeholder='+1 (111) 111-1111'
                        type='text'
                        className={styles.input}
                    />
                </div>
                <div className={styles.info}>
                    <label className={styles.label}>Address</label>
                    <textarea 
                        rows={5}
                        placeholder='Address'
                        type='text'
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order Now!
                </button>
            </div>
        </div>
    )
};

export default OrderInfo;