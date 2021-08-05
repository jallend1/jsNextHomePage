import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <p className={styles.logo}>
        <Link href='/'>
          <a>Jason D. Allen</a>
        </Link>
      </p>
      <div>
        <ul className={styles.menu}>
          <li className={router.pathname === '/' ? styles.active : null}>
            <Link href='/' passHref>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={router.pathname === '/projects' ? styles.active : null}
          >
            <Link href='/projects' passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li className={router.pathname === '/about' ? styles.active : null}>
            <Link href='/about' passHref>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
