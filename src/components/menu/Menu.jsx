import React from 'react';

// Styles
import styles from 'styles/menu/menu.module.scss';

function Menu({ showMenu, location, handleClick }) {
    return (
        <div className={showMenu ? `${styles.menuActive} ${styles.menu}` : styles.menu}>
            <div
                className={
                    showMenu
                        ? `${styles.linkContainerActive} ${styles.linkContainer}`
                        : styles.linkContainer
                }
            >
                <div
                    className={
                        location.pathname === '/'
                            ? `${styles.activeLink} ${styles.link}`
                            : styles.link
                    }
                    onClick={() => handleClick('/')}
                >
                    Home
                </div>
                <div
                    className={
                        location.pathname === '/bio'
                            ? `${styles.activeLink} ${styles.link}`
                            : styles.link
                    }
                    onClick={() => handleClick('/bio')}
                >
                    Bio
                </div>
                <div
                    className={
                        location.pathname === '/portfolio'
                            ? `${styles.activeLink} ${styles.link}`
                            : styles.link
                    }
                    onClick={() => handleClick('/portfolio')}
                >
                    Portfolio
                </div>
                <a
                    href="https://dribbble.com/grahamvo"
                    target="__blank"
                    className={styles.link}
                >
                    Dribbble
                </a>
                <a href="https://github.com/grahamvo" target="__blank" className={styles.link}>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/graham-von-oehsen-2067b776/"
                    target="__blank"
                    className={styles.link}
                >
                    LinkedIn
                </a>
                <a href="mailto:grahamvo@gmail.com" className={styles.link}>
                    Contact
                </a>
            </div>
            <div className={showMenu ? `${styles.copywriteActive} ${styles.copywrite}` : styles.copywrite}>
                © Graham von Oehsen 2025
            </div>
        </div>
    );
}

export default Menu;