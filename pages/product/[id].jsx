import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import axios from 'axios';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

const Product = ({ coffee }) => {
    
    const [size, setSize] = useState(0);

    const [price, setPrice] = useState(coffee.prices[0]);

    const [additions, setAdditions] = useState([]);

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const priceChange = (number) => {
        setPrice(price + number);
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            priceChange(option.price);
            setAdditions((prev) => [...prev, option]);
        } else {
            priceChange(-option.price);
            setAdditions(additions.filter((addition) => addition._id !== option._id));
        }
    }

    const handleSize = (sizeIndex) => {
        const priceDifference = coffee.prices[sizeIndex] - coffee.prices[size];
        setSize(sizeIndex);
        priceChange(priceDifference);
    };

    const handleCart = () => {
        dispatch(addProduct({...coffee, additions, price, quantity}));
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={coffee.image} objectFit='contain' layout='fill' alt='' />
                </div>
            </div> 
            <div className={styles.right}>
                <h1 className={styles.title}>{coffee.title}</h1>
                <span className={styles.price}>$ {price}</span>
                <p className={styles.description}>{coffee.description}</p>
                <h3 className={styles.choose}>Choose your size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />
                        <span className={styles.number}>8oz</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />    
                        <span className={styles.number}>12oz</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />        
                        <span className={styles.number}>16oz</span>
                    </div>
                </div>
                
                <h3 className={styles.choose}>Choose type of milk</h3>
                    <div className={styles.milk}>
                        {coffee.milk.map((option) => (
                            <div className={styles.option} key={option._id}>
                                <input 
                                    type='checkbox'
                                    className={styles.checkbox}
                                    id={option.text}
                                    name={option.text}
                                />
                                <label htmlFor='milk'>{option.text}</label>
                            </div>
                        ))}
                    </div>
                
                <h3 className={styles.choose}>Choose extras</h3>
                    <div className={styles.milk}>
                        {coffee.extras.map((option) => (
                            <div className={styles.option} key={option._id}>
                                <input 
                                    type='checkbox'
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox}
                                    onChange={(e) => handleChange(e, option)}
                                />
                                <label htmlFor="extras">{option.text}</label>
                            </div>
                        ))}
                    </div>

                    <div className={styles.addNumber}>
                        <input 
                            onChange={(e) => setQuantity(e.target.value)} 
                            type='number' 
                            defaultValue={1} 
                            className={styles.quantity} 
                        />
                        <button className={styles.button} onClick={handleCart}>Add to Cart</button>
                    </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ params }) => {

    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`); // 'params' represents the different product ids
    
    return {
      props: {
        coffee: res.data, // 'response' data
      },
    };
};

export default Product;