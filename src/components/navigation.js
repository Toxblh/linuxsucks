import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Logo from './linuxsuckslogo.png'

export default () => (
  <nav role="navigation" className={styles.navigationwrap}>
    <img className={styles.navigationlogo} src={Logo} alt="Linux Friday Shitposting"></img>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Главная</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Статьи</Link>
      </li>
    </ul>
  </nav>
)
