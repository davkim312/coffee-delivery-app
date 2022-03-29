import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/footerimage.jpg' alt='' objectFit='cover' layout='fill' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.statement}>
                        ALL YOU NEED IS LOVE AND A CUP OF COFFEE.
                    </h1>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>ADDRESS (More locations to come!)</h2>
                    <p className={styles.text}>
                        1 Best Coffee Ave. #1
                        <br /> Coffee Central, 12345
                        <br /> (123) 345-6789 
                    </p>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>Hours of Operation</h2> 
                    <p className={styles.text}>
                        Monday to Saturday:
                        <br /> 5:00AM - 6:00PM
                    </p>
                    <p className={styles.text}>
                        Sunday:
                        <br /> 7:00AM - 2:00PM
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;