import React from 'react';
// import PropTypes from 'prop-types';

// Components
import BurgerMenu from 'components/header/BurgerMenu';

// Styles
import styles from 'styles/header/header.module.scss';

function Name({ location, handleClick, showMenu }) {
    const isPortfolio = location.pathname === '/portfolio';

    if (location.pathname !== '/') {
        return (
            <div
                onClick={() => handleClick('/')}
                className={
                    isPortfolio && !showMenu
                        ? `${styles.nameDark} ${styles.name}`
                        : styles.name
                }
            >
                Graham von Oehsen
            </div>
        );
    }

    return <div className={styles.emptyName} />;
};

function Header({ next, handleClick, location, showMenu, toggleMenu  }) {
    const show = !next;
    return (
        <div className={show ? `${styles.show} ${styles.header}` : styles.header}>
            <Name location={location} handleClick={handleClick} showMenu={showMenu} />
            <BurgerMenu toggleMenu={toggleMenu} location={location} showMenu={showMenu} />
        </div>
    );
};

export default Header;
