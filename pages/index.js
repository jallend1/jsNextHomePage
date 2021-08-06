import Head from "next/head";
import Image from 'next/image';
import styles from "../styles/Home.module.css";
import CodeBlock from "../components/CodeBlock";
import profilePic from '../public/images/Coffee.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason D. Allen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
            <Image
              src={profilePic}
              alt="Jason"      
            />
          </div>
        <div className={styles.welcome}>
        <div className={styles.bio}>
          <CodeBlock />
          <div className={styles.contact}>
            <button className={styles.btn}>Get in touch.</button>
          </div>
        </div>
          <h2 className={styles.subtitle}>&lt;coder&gt;</h2>
          <h1>
            Using elegant code to craft
            <span className="clean"> beautifully simple</span> web experiences.
          </h1>
          <h2 className={styles.subtitle}>&lt;/coder&gt;</h2>
        </div>
      </main>
    </>
  );
}
