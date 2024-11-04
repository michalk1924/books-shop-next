
import styles from './NavBar.module.css'
import Link from 'next/link'

function NavBar() {

  return (
    <div className={styles.header}>
      <Link href="/jewelry">
        Jewelry
      </Link>
      <Link href="/books">
        Books
      </Link>
    </div>
  );
}

export default NavBar;
