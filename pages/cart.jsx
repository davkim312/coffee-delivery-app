import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { reset } from '../redux/cartSlice';
import Image from 'next/image';
import styles from '../styles/Cart.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OrderInfo from '../components/OrderInfo';

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const amount = cart.total;
    const currency = 'USD';
    const style = { 'layout': 'vertical' };
    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/api/orders', data);
            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch(err) {
            console.log(err);
        }
    };

    const ButtonWrapper = ({ currency, showSpinner }) => {
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

         useEffect(() => {
             dispatch({
                 type: 'resetOptions',
                 value: {
                     ...options,
                     currency: currency,
                 },
             });
         }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className='spinner' /> }
                <PayPalButtons 
                    style={style}
                    disabled={false}
                    fundingSource={undefined}
                    forceReRender={[amount, currency, style]}
                    createOrder={ (data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency, 
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                method: 1
                            });
                        });
                    }}
                />
            </>
        )
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tableTitle}>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>

                    <tbody>
                        {cart.products.map((product) => (
                            <tr className={styles.tr} key={product._id}> 
                                <td>
                                    <div className={styles.imageContainer}>
                                        <Image 
                                            src={product.image}
                                            alt='' 
                                            layout='fill' 
                                            objectFit='cover' 
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>{product.title}</span>
                                </td>
                                <td>
                                    <span className={styles.specialties}>
                                        {product.extras.map((extra) => (
                                            <span key={extra._id}>{extra.text}, </span>
                                        ))}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.price}>$ {product.price}</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>
                                        $ {product.quantity * product.price}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$ {cart.total}
                    </div>
                    <br />
                    <div>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <br />
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$ {cart.total}
                    </div>
                    <br />
                    {open ? (
                        <div className={styles.paymentMethods}>
                            <button 
                                className={styles.payButton}
                                onClick={() => setCash(true)}
                            >
                                Pay cash upon delivery
                            </button>
                            <br />
                            <PayPalScriptProvider
                                options={{
                                    'client-id': 'AY-ZqZt2Q_GqKkILvAiPhaD1W8kTR-uWz1JeZqtm0zHoJOb7m79P4ugxVBkIzuFqEKbe5Liv5bbEcHYe',
                                    components: 'buttons',
                                    currency: 'USD',
                                    'disable-funding': 'credit,card,p24'
                                }}
                            >
                                <ButtonWrapper currency={currency} showSpinner={false} />
                            </PayPalScriptProvider>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>
                            CHECKOUT
                        </button>
                    )}  
                    {/* if open show me paypal button, if not show me checkout button */}
                    <br />
                </div>
            </div>
            {cash && <OrderInfo total={cart.total} createOrder={createOrder} /> }
        </div>
    )
};

export default Cart;