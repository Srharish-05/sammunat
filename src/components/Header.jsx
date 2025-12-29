import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Sammunat
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('hero')} className={styles.navLink}>Home</button>
          <button onClick={() => scrollToSection('features')} className={styles.navLink}>Features</button>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <div className={styles.mobileNavContent}>
            <button onClick={() => scrollToSection('hero')} className={styles.mobileNavLink}>Home</button>
            <button onClick={() => scrollToSection('features')} className={styles.mobileNavLink}>Features</button>
            <button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>About</button>
            <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
