import Image from 'next/image';
import styles from '../../styles/Order.module.css';

const Order = () => {

    const status = 0;

    const statusLevel = (i) => {
        if(i - status < 1) return styles.finished;
        if(i - status === 1) return styles.inProcess;
        if(i - status > 1) return styles.unfinished;
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.tableTitle}>
                            <th>Order No.</th>
                            <th>Customer's Name</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.order}>111</span>
                            </td>
                            <td>
                                <span className={styles.customer}>Michael Cappucino</span>
                            </td>
                            <td>
                                <span className={styles.address}>5 Caffeine Blvd.</span>
                            </td>
                            <td>
                                <span className={styles.total}>$21.75</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusLevel(0)}>
                        <Image src='/img/paid.png' alt='' height={50} width={50} />
                        <span className={styles.status}>Order Received!</span>
                        <div className={styles.checksign}>
                            <Image className={styles.checksign} src='/img/checkconfirm.jpg' alt='' height={40} width={40} />
                        </div>
                    </div>
                    <div className={statusLevel(1)}>
                        <Image src='/img/espressomachine.jpg' alt='' height={50} width={50} />
                        <span className={styles.status}>Preparing!</span>
                        <div className={styles.checksign}>
                            <Image className={styles.checksign} src='/img/checkconfirm.jpg' alt='' height={40} width={40} />
                        </div>
                    </div>
                    <div className={statusLevel(2)}>
                        <Image src='/img/driving.png' alt='' height={50} width={50} />
                        <span className={styles.status}>On the way to you!</span>
                        <div className={styles.checksign}>
                            <Image className={styles.checksign} src='/img/checkconfirm.jpg' alt='' height={40} width={40} />
                        </div>
                    </div>
                    <div className={statusLevel(3)}>
                        <Image src='/img/deliveredicon.png' alt='' height={50} width={50} />
                        <span className={styles.status}>Delivered! Please Enjoy!</span>
                        <div className={styles.checksign}>
                            <Image className={styles.checksign} src='/img/checkconfirm.jpg' alt='' height={40} width={40} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Total</h3>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$21.75
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$21.75
                    </div>
                    <button className={styles.button} disabled>Order Confirmed!</button>
                </div>
            </div>
        </div>
    )
};

export default Order;