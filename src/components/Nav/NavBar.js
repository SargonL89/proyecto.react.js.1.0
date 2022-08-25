import React from 'react'
import styles from "./Nav.module.css"

export const NavBar = () => {
  return (
    <nav>
        <ul className={styles.ul}>
            <li >
                <a href="nosotros.js" className={styles.il}>Nosotros</a>
            </li>
            <li>
                <a href="contacto.js" className={styles.il}>Contacto</a>
            </li>
            <li>
                <a href="https://www.facebook.com/" className={styles.il}>Facebook</a>
            </li>
            <li>
                <a href="https://www.instagram.com/" className={styles.il}>Instagram</a>
            </li>
        </ul>
    </nav>
  )
}

