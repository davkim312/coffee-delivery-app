import Image from 'next/image';
import styles from '../../styles/Order.module.css';
import axios from 'axios';

const Order = ({ order }) => {

    const status = order.status;

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
                                <span className={styles.order}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.customer}>{order.customer}</span>
                            </td>
                            <td>
                                <span className={styles.address}>{order.address}</span>
                            </td>
                            <td>
                                <span className={styles.total}>$ {order.total}</span>
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
                        <b className={styles.totalTextTitle}>Subtotal:</b>$ {order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$ {order.total}
                    </div>
                    <button disabled className={styles.button}>Order Confirmed!</button>
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`); // 'res' for response
    return {
        props: { 
            order: res.data 
        }
    }
};

export default Order;