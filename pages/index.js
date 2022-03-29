import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import CoffeeList from '../components/CoffeeList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Get fresh coffee delivered to you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Featured />
      <CoffeeList />
    </div>
  )
}
