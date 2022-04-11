import styles from '../styles/AddButton.module.css';
import axios from 'axios';
import { useState } from 'react';


const Add = ({ setClose }) => {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'newcoffee');
        try {
            const uploadRes = await axios.post(
                'https://api.cloudinary.com/v1_1/dl7j4aacl/image/upload', 
                data
            );
            
            const { url } = uploadRes.data;
            
            const newProduct = {
                title,
                description, 
                prices,
                extraOptions,
                image: url
            };

            await axios.post('http://localhost:3000/api/products', newProduct);
            setClose(true);
        
        } catch (err) {
            console.log(err);
        }
    }; 

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.closeButton}>
                    X
                </span>
                <h1 className={styles.header}>Add new drink</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an image</label>
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} /> {/* helps not choose multiple files, instead we choose one */}
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                        className={styles.input}
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Description</label>
                    <textarea 
                        rows={4}
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input 
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='8oz'
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='12oz'
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='16oz'
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Extras</label>
                    <div className={styles.extra}>
                        <input 
                            className={`${styles.input} ${styles.inputSm}`}
                            type='text'
                            placeholder='Item'
                            name='text'
                            onChange={handleExtraInput}
                        />
                        <input 
                            className={`${styles.input} ${styles.inputSm}`}
                            type='number'
                            placeholder='Price'
                            name='price'
                            onChange={handleExtraInput}
                        />

                        <button className={styles.extraButton} onClick={handleExtra}>
                            Add
                        </button>
                    </div>
                    
                    <div className={styles.extraItems}>
                        {extraOptions.map((option) => (
                            <span key={option.text} className={styles.extraItem}>
                                {option.text}
                            </span> 
                        ))}
                    </div>
                </div>    
            
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            
            </div>
        </div>
    )
};

export default Add;