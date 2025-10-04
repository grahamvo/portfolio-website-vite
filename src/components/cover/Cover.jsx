import React, { useState, useEffect } from 'react';

// Styles
import styles from 'styles/cover/cover.module.scss';

// Assets
import DarkGreen from 'assets/svg/green.svg';
import DarkRed from 'assets/svg/red.svg';

function Cover({ current, next }) {
    const [style, setStyle] = useState(styles.cover);
    const [topStyle, setTopStyle] = useState(styles.topGroup);
    const [bottomStyle, setBottomStyle] = useState(styles.bottomGroup);

    useEffect(() => {
        console.log(current, next);

        if (next === '/bio' && current === '/') {
            handleNavFromHomeToBio();
        }

        if (current === '/bio') {
            if (next === '/') {
                handleNavToHomeFromBio();
            } else {
                handleNavToBio();
            }
        }

        if (next === '/portfolio' && current === '/') {
            handleNavFromHomeToPortfolio();
        }

        if (current === '/portfolio') {
            if (next === '/') {
                handleNavToHomeFromPortfolio();
            } else {
                handleNavToPortfolio();
            }
        }
    }, [current, next]);

    const handleNavToBio = () => {
        setStyle(`${styles.bioCover} ${styles.cover}`);

        setTimeout(() => {
            setStyle(`${styles.bioEnter} ${styles.bioCover} ${styles.cover}`);
        }, 200);
    }

    const handleNavFromHomeToBio = () => {
        setTopStyle(styles.topGroup);
        setBottomStyle(`${styles.animateBottom} ${styles.bottomGroup}`);
    };

    const handleNavToHomeFromBio = () => {
        setStyle(`${styles.bioCover} ${styles.cover}`);
        setTopStyle(`${styles.topGroup}`);

        setTimeout(() => {
            setStyle(`${styles.cover}`);
            setBottomStyle(`${styles.animateBottomContract} ${styles.bottomGroup}`);
        }, 600);
    }

    const handleNavToPortfolio = () => {
        setStyle(`${styles.portfolioCover} ${styles.cover}`);

        setTimeout(() => {
            setStyle(`${styles.portfolioEnter} ${styles.portfolioCover} ${styles.cover}`);
        }, 200);
    }

    const handleNavToHomeFromPortfolio = () => {
        setStyle(`${styles.portfolioCover} ${styles.cover}`);
        setBottomStyle(`${styles.bottomGroup}`);

        setTimeout(() => {
            setStyle(`${styles.cover}`);
            setTopStyle(`${styles.animateTopContract} ${styles.topGroup}`);
        }, 600);
    }

    const handleNavFromHomeToPortfolio = () => {
        setTopStyle(`${styles.animateTop} ${styles.topGroup}`);
        setBottomStyle(styles.bottomGroup);
    }

    return ([
        <div className={style} key="cover" />,
        <img
            className={topStyle}
            style={{ display: current !== '/' ? 'none' : null }}
            key="topSVG"
            src={DarkGreen}
            alt="Green"
        />,
        <img
            className={bottomStyle}
            style={{ display: current !== '/' ? 'none' : null }}
            key="bottomSVG"
            src={DarkRed}
            alt="Red"
        />,
    ]);
}

export default Cover;