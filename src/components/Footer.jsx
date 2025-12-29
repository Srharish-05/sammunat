import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>Sammunat</span>
                        <p className={styles.tagline}>Empowering engineering teams.</p>
                    </div>
                    <div className={styles.links}>
                        <a href="#" className={styles.link}>Twitter</a>
                        <a href="#" className={styles.link}>LinkedIn</a>
                        <a href="#" className={styles.link}>GitHub</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Sammunat Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
