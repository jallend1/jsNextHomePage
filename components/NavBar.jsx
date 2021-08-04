import styles from '../styles/NavBar.module.css';
const NavBar = () => {
    return (
        <nav>
        <p className={styles.logo}>Jason D. Allen</p>
        <div>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    )

}

export default NavBar;