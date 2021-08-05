import Head from 'next/head';
import Image from 'next/image';
import CodeBlock from '../components/CodeBlock';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>Jason D. Allen | About</title>
      </Head>
      <div className='container'>
        <main className={styles.about}>
          <div>
            <h2>Hello, there.</h2>
            <h1>I&apos;m Jason.</h1>
            <CodeBlock />
          </div>
          <div>
            <Image
              src='/images/Coffee.png'
              alt='Jason'
              width={600}
              height={720.24}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
