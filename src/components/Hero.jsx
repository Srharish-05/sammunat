import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <h1 className={`${styles.title} animate-enter`}>
                        Ship code faster,<br /> without the burnout.
                    </h1>
                    <p className={`${styles.subtitle} animate-enter animate-delay-1`}>
                        The intelligent workspace for engineering teams to plan, build, and ship high-quality software together.
                    </p>
                    <div className={`${styles.actions} animate-enter animate-delay-2`}>
                        <button onClick={scrollToContact} className="btn btn-primary">
                            Get Started
                        </button>
                        <button onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
