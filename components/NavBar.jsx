import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
const NavBar = () => {
  return (
    <nav>
      <p className={styles.logo}>Jason D. Allen</p>
      <div>
        <ul className={styles.menu}>
          <Link href='/' passHref>
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link href='/projects' passHref>
            <li>
              <a>Projects</a>
            </li>
          </Link>
          <Link href='/about' passHref>
            <li>
              <a>About</a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
