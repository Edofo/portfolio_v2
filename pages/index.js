import Head from 'next/head'
import Image from 'next/image'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Navbar />
      

      <main className={styles.main}>
       
      </main>

      <Footer />

    </div>
  )
}
