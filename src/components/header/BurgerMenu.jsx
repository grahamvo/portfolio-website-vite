import React from 'react';

// Styles
import styles from 'styles/header/burgerMenu.module.scss';

function BurgerMenu({ showMenu, location, toggleMenu }) {
    const getColor = () => {
        if (location.pathname === '/portfolio' || showMenu) {
            return '#FBFBFB';
        }

        return '#3C3C3C';
    };

    return (
        <div
            className={styles.burger}
            onClick={toggleMenu}
            style={{
                borderColor: getColor(),
            }}
        >
            <div className={styles.arms}>
                <span
                    className={
                        showMenu ? `${styles.remove} ${styles.arm}` : styles.arm
                    }
                    style={{ backgroundColor: getColor() }}
                />
                <span
                    className={
                        showMenu ? `${styles.remove} ${styles.arm}` : styles.arm
                    }
                    style={{ backgroundColor: getColor() }}
                />
                <span
                    className={
                        showMenu ? `${styles.remove} ${styles.arm}` : styles.arm
                    }
                    style={{ backgroundColor: getColor() }}
                />
            </div>
            <div
                className={
                    showMenu
                        ? `${styles.diagonalEnter} ${styles.diagonal}`
                        : styles.diagonal
                }
            />
        </div>
    );
};

export default BurgerMenu;