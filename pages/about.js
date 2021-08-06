import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Jason D. Allen | About</title>
      </Head>
      <div className="container">
        <main className={styles.about}>
          <div>
            <h2>Hello, there.</h2>
            <h1>I&apos;m Jason.</h1>
          </div>
          <div>
            <Image
              src="/images/Coffee.png"
              alt="Jason"
              width={333}
              height={400}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
