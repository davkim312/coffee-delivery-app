import { useState } from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {

    const [index, setIndex] = useState(0);

    const images = [
        '/img/featured1.jpg',
        '/img/featured2.jpg',
        '/img/featured3.jpg'
    ];

    const handleArrow = (direction) => {
        if (direction === 'left') {
            setIndex(index !== 0 ? index-1 : 2) // if index number is NOT zero, then decrease index number by one. '?' is 'if'. ':' is for 'else'
            // else, it will go to the last index.
        }

        if (direction === 'right') {
            setIndex(index !== 2 ? index+1 : 0) // if index number is NOT two, then increase
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow('left')}>
                <Image src='/img/arrowleft.png' alt='' layout='fill' objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100*index}vw)`}}>
                {images.map((img, i) => ( // 'i' standing for the index number of the 'images' stated above
                    <div className={styles.imageContainer} key={i}>
                        <Image src={img} alt='' layout='fill' objectFit='contain' />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0}} onClick={() => handleArrow('right')}>
                <Image src='/img/arrowright.png' alt='' layout='fill' objectFit='contain' />
            </div>
        </div>
    )
};

export default Featured;