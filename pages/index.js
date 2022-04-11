import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css'
import CoffeeList from '../components/CoffeeList';
import axios from 'axios';
import AddButton from '../components/AddButton';
import Add from '../components/Add';
import { useState } from 'react';

export default function Home({ coffeeList, admin }) {

  const [close, setClose] = useState(true); // if its 'close' or 'true' we will not see the modal

  return (
    <div className={styles.container}>
      <Head>
        <title>Friendly Neighborhood Coffee Shop</title>
        <meta name="description" content="Get fresh coffee delivered to you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <CoffeeList coffeeList={coffeeList} />
      
      {!close && <Add setClose={setClose} />} 
      {/* if it's not close, call another component */}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {

    const myCookie = ctx.req?.cookies || '';
    let admin = false;

    if(myCookie.token === process.env.TOKEN) {
      admin = true;
    }

    const res = await axios.get('http://localhost:3000/api/products'); // this will fetch the data from this page 
    return {
      props:{
        coffeeList: res.data, // 'response' data
        admin
      }
    }
};


