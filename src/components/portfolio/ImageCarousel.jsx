import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, wrap } from 'motion/react';

// Styles
import styles from 'styles/portfolio/imageCarousel.module.scss';

// Assets
import ThoughtbloxHome from 'assets/images/thoughtblox-home.png';
import ThoughtbloxGroup from 'assets/images/thoughtblox-group.png';
import ThoughtbloxEditor from 'assets/images/thoughtblox-editor.png';
import MerkatoHero from 'assets/images/merkato-hero.png';
import MerkatoHeroDark from 'assets/images/merkato-hero-dark.png';
import MerkatoServices from 'assets/images/merkato-services.png';
import Notch from 'assets/svg/notch.svg';
import Exit from 'assets/svg/exit.svg';

const images = {
    1: [
        ThoughtbloxHome,
        ThoughtbloxGroup,
        ThoughtbloxEditor,
    ],
    2: [
        MerkatoHeroDark,
        MerkatoHero,
        MerkatoServices,
    ],
};

const StaticImages = ({ enter, page, handleToggleExpand }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        setImageIndex(0);
    }, [page]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = wrap(0, images[page].length, imageIndex + 1);
            setImageIndex(newIndex);
        }, 5000);

        return () => clearInterval(interval);
    })
    
    return (
        <div
            className={
                enter
                    ? `${styles.imageContainerEnter} ${styles.imageContainer}`
                    : styles.imageContainer
            }
            onClick={handleToggleExpand}
            key="carousel"
        >
            <AnimatePresence>
                <motion.img
                    key={images[page][imageIndex]}
                    src={images[page][imageIndex]}
                    alt="item"
                    className={styles.image}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.6,
                    }}
                />
            </AnimatePresence>
        </div>
    )
}

function ExpandedCarousel({ expanded, handleToggleExpand, page }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handleChangeImage = (changeInterval) => {
        const newIndex = wrap(0, images[page].length, imageIndex + changeInterval);
        setImageIndex(newIndex);
    };

    return (
        <div
            className={
                expanded
                    ? `${styles.imageContainerExpanded} ${styles.imageContainerExpand}`
                    : styles.imageContainerExpand
            }
            key="expand"
        >
            <AnimatePresence>
                <img
                    src={Exit}
                    alt="exit"
                    className={styles.exit}
                    key="exit"
                    onClick={handleToggleExpand}
                />
                <img
                    src={Notch}
                    alt="notch"
                    className={styles.notch1}
                    key="notch1"
                    onClick={() => handleChangeImage(-1)}
                />
                <motion.img
                    src={images[page][imageIndex]}
                    alt="item"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            type: "spring",
                            visualDuration: 0.3,
                            bounce: 0.4,
                        },
                    }}
                    exit={{ opacity: 0 }}
                    className={styles.image}
                    key={images[page][imageIndex]}
                />
                <img
                    src={Notch}
                    alt="notch"
                    className={styles.notch2}
                    key="notch2"
                    onClick={() => handleChangeImage(1)}
                />
            </AnimatePresence>
        </div>
    );
}

function ImageCarousel({ enter, page }) {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        console.log(expanded);
        setExpanded(prev => !prev);
    };

    return([
        <StaticImages enter={enter} page={page} handleToggleExpand={handleToggleExpand} />,
        <ExpandedCarousel expanded={expanded} page={page} handleToggleExpand={handleToggleExpand} />
    ]);
}

export default ImageCarousel;