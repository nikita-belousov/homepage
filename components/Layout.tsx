import * as React from 'react'

import styles from '../styles/Layout.module.css'
import Header from './Header';

interface ILayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.content}>
                {children}

                <div className={`${styles.triangle} ${styles.left}`} />
                <div className={`${styles.triangle} ${styles.right}`} />
                <div className={`${styles.triangle} ${styles.bottom}`} />
            </div>
        </div>
    );
}

export default Layout