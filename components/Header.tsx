import * as React from 'react'
import Image from 'next/image'

import styles from '../styles/Header.module.css'
import logo from '../public/images/logo.svg';
import Navigation from './Navigation';
import SocialButtons from './SocialButtons';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo" />
            </div>
            <div className={styles.navigation}>
                <Navigation />
            </div>
            <div className={styles.socialButtons}>
                <SocialButtons />
            </div>
        </div>
    );
}

export default Header