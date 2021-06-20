import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav/Nav';
import img_1 from '../assets/img_1.svg';
import img_2 from '../assets/img_2.svg';
import img_3 from '../assets/img_3.svg';
import img_4 from '../assets/img_4.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy 1 Take 1</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.body}>
        <div className={styles.landing_page}>
          <div className={styles.image_container}>
            <Image src={img_1} alt='landing picture' />
          </div>
          <div className={styles.text_container}>
            <h1 className={styles.heading_text}>
              Online Shopping? Groceries? Lets make it Simple
            </h1>
            <p className={styles.subheading_text}>
              Over 10,000+ customers are waiting for fresh and new
              products from us. Always have shopping deals and
              discounts, What are you waiting for?{' '}
            </p>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button_primary}>
              SHOP NOW
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
