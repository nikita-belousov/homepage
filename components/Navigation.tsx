import Link from 'next/link';
import * as React from 'react'

import styles from '../styles/Navigation.module.css'
import ActiveLink from './ActiveLink';

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <ActiveLink href="/about" className={styles.link} activeClassName={styles.active}>
                        About
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/portfolio" className={styles.link} activeClassName={styles.active}>
                        Portfolio
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink  href="/contacts" className={styles.link} activeClassName={styles.active}>
                        Contacts
                    </ActiveLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation