import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router';

// Styles
import styles from 'styles/bio/bio.module.scss';

// Assets
import Arrow from 'assets/svg/red-arrow.svg';

function Bio() {
    const titleRef = useRef();
    const scrollRef = useRef();
    const { handleClick, next } = useOutletContext();
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const node = scrollRef.current;
        node.addEventListener('scroll', handleScroll);

        return () => node.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setEntered(true);
        }, 300);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    const handleScroll = (e) => {
        const { scrollTop } = e.target;

        if (scrollTop > 50) {
            titleRef.current.className = `${styles.headerSlide} ${styles.header}`;
        } else if (scrollTop < 50) {
            titleRef.current.className = `${styles.headerEnter} ${styles.header}`;
        }
    };

    const shouldEnter = entered && !next;

    return (
        <div className={styles.bio}>
            <div
                className={
                    shouldEnter
                        ? `${styles.headerEnter} ${styles.header}`
                        : styles.header
                }
                ref={titleRef}
            >
                <span className={styles.light}>Bi</span>
                <span className={styles.dark}>o.</span>
            </div>
            <div
                className={
                    shouldEnter
                        ? `${styles.aboutActive} ${styles.about}`
                        : styles.about
                }
                ref={scrollRef}
            >
                <div
                    className={styles.container}
                >
                    <div className={styles.divider} />
                    <div className={styles.paragraph}>
                        My name is Graham von Oehsen. Welcome to my portfolio.
                    </div>
                    <div className={styles.paragraph}>
                        I’m a software engineer and designer with 9+ years of
                        experience working for various companies and freelancing.
                        I’m passionate about creating beautiful, intuitive
                        interfaces and being on the cutting edge of front-end software.
                    </div>
                    <div className={styles.paragraph}>
                        I was most recently a senior level software engineer at Capital One, however,
                        I'm looking to move back into the start-up world. My ideal role would be at a
                        company in the 50-100 person size range looking to expand their engineeering
                        team.
                    </div>
                    <div className={styles.paragraph}>
                        While I have dabbled in backend development, I prefer to work on the
                        frontend, utilizing technologies such as React, TypeScript, Webpack, Next.js,
                        Node.js, etc. I also have experience in web design, graphic design, UI/UX,
                        rebranding, and iconography.
                    </div>
                    <div className={styles.paragraph}>
                        Beyond tech, I spend time writing and playing music. I’m
                        proficient on guitar, bass, drums, keyboards and I’ve
                        played in multiple bands. One of my biggest dreams is
                        to go on tour with my music. I’m currently working on
                        completing my debut album.
                    </div>
                    <div className={styles.paragraph}>
                        Thanks for checking out my website! Feel free to&nbsp;
                        <a className={styles.link} href="mailto:grahamvo@gmail.com">
                            contact me
                        </a>
                        &nbsp;if you want to chat.
                    </div>
                </div>
                <div className={styles.linkContain}>
                    <div className={styles.backLink} onClick={() => handleClick('/')}>
                        <img src={Arrow} alt="arrow" className={styles.arrow} />
                        <div className={styles.text}>Home</div>
                    </div>
                    <div
                        className={styles.forwardLink}
                        onClick={() => handleClick('/portfolio')}
                    >
                        <div className={styles.text}>Portfolio</div>
                        <img src={Arrow} alt="arrow" className={styles.arrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;