import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Building for builders</h2>
                    <p className={styles.text}>
                        Sammunat started with a simple observation: modern engineering teams spend too much time managing processes and not enough time shipping code.
                    </p>
                    <p className={styles.text}>
                        We are a small team of developers, designers, and product managers based in Kathmandu. We’re bootstrapping a tool that we actually want to use every day—no bloat, no buzzwords, just effective software.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
