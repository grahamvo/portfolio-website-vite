import React, { useEffect, useState, useRef } from 'react';
import { useOutletContext } from 'react-router';
import { Link } from 'react-scroll';

import Merkato  from './Merkato';
import Thoughtblox from './Thoughtblox';
import ImageCarousel from './ImageCarousel';

import styles from 'styles/portfolio/portfolio.module.scss';

function Portfolio() {
    const titleRef = useRef();
    const scrollRef = useRef();
    const {next} = useOutletContext();
    const [entered, setEntered] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const node = scrollRef.current;
        node.addEventListener('scroll', handleScroll);

        return () => node.removeEventListener('scroll', handleScroll);
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setEntered(true);
        }, 300);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, children } = e.target;
        const rect = children[1].getBoundingClientRect().top;

        if (rect < clientHeight && page !== 2) {
            setPage(2);
        }

        if (rect > clientHeight && page !== 1) {
            setPage(1);
        }

        if (scrollTop > 40) {
            titleRef.current.className = `${styles.headerSlide} ${styles.header}`;
        } else if (scrollTop < 40) {
            titleRef.current.className = `${styles.headerEnter} ${styles.header}`;
        }
    }

    const shouldEnter = entered && !next;

    return (
        <div className={styles.portfolio}>
            <div
                className={
                    shouldEnter
                        ? `${styles.headerEnter} ${styles.header}`
                        : styles.header
                }
                ref={titleRef}
            >
                <span className={styles.dark}>Portfolio.</span>
                <span className={styles.light}>io.</span>
            </div>
            <div className={styles.dots}>
                <Link
                    className={`${styles.dotActive} ${styles.dot}`}
                    to="Thoughtblox"
                    smooth
                    duration={400}
                    containerId="scrollContainer"
                    offset={-350}
                />
                <Link
                    className={page >= 2 ? `${styles.dotActive} ${styles.dot}` : styles.dot}
                    to="Merkato"
                    smooth
                    duration={400}
                    containerId="scrollContainer"
                    offset={-350}
                />
            </div>
            <ImageCarousel enter={shouldEnter} page={page} />
            <div
                className={
                    shouldEnter
                        ? `${styles.infoContainerActive} ${styles.infoContainer}`
                        : styles.infoContainer
                }
                ref={scrollRef}
                id="scrollContainer"
            >
                <Thoughtblox />
                <Merkato />
            </div>
        </div>
    );
}

export default Portfolio;