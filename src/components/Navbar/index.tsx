import clsx from 'clsx'
import Link from 'next/link'

import styles from './style.module.scss'

const Navbar = () => (
  <>
    <header className={clsx('bgColor-white', [styles.navbarWrapper])}>
      <div className={clsx('mx-6', [styles.navbarContent])}>
        <span>DartedMonki</span>
        <Link href="/">Home</Link>
      </div>
    </header>
    <div className={styles.offset} />
  </>
)

export default Navbar
