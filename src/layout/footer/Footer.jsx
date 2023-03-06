import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>Footer

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

        </footer>
    )
}

export default Footer