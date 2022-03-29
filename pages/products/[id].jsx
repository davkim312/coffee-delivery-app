import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

const Product = () => {
    const [size, setSize] = useState(0);

    const coffee = {
        id: 1,
        image: '/img/dalgonacoffeeimg.jpg',
        name: 'DALGONA COFFEE',
        price: [6.75, 7.00, 7.25], // must use 'state' hook for this
        description: 'Milk of your choice topped with hand-whipped cream made out of grounded coffee beans and brown sugar.'
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={coffee.image} objectFit='contain' layout='fill' alt='' />
                </div>
            </div> 
            <div className={styles.right}>
                <h1 className={styles.title}>{coffee.name}</h1>
                <span className={styles.price}>$ {coffee.price[size]}</span>
                <p className={styles.description}>{coffee.description}</p>
                <h3 className={styles.choose}>Choose your size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />
                        <span className={styles.number}>8oz</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />    
                        <span className={styles.number}>12oz</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src='/img/coffeelogo (2).jpg' alt='' layout='fill' />        
                        <span className={styles.number}>16oz</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose type of milk</h3>
                    <div className={styles.milk}>
                        <div className={styles.option}>
                            <input 
                                type='checkbox'
                                className={styles.checkbox}
                                id='wholemilk'
                                name='wholemilk' 
                            />
                            <label htmlFor='wholemilk'>  Whole Milk</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type='checkbox'
                                className={styles.checkbox}
                                id='2%milk'
                                name='2%milk'
                            />
                            <label htmlFor='2%milk'> 2% Reduced Fat Milk</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type='checkbox'
                                className={styles.checkbox}
                                id='almondmilk'
                                name='almondmilk' 
                            />
                            <label htmlFor='almondmilk'> Almond Milk</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type='checkbox'
                                className={styles.checkbox}
                                id='oatmilk'
                                name='oatmilk' 
                            />
                            <label htmlFor='oatmilk'> Oat Milk</label>
                        </div>
                        <div className={styles.option}>
                            <input 
                                type='checkbox'
                                className={styles.checkbox}
                                id='soymilk'
                                name='soymilk' 
                            />
                            <label htmlFor='soymilk'> Soy Milk</label>
                        </div>
                    </div>
                    <div className={styles.addNumber}>
                        <input type='number' defaultValue={1} className={styles.quantity} />
                        <button className={styles.button}>Add to Cart</button>
                    </div>
            </div>
        </div>
    )
};

export default Product;