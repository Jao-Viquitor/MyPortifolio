// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    const aboutRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        titleRef.current.classList.add(styles.visible);
                    } else {
                        titleRef.current.classList.remove(styles.visible);
                    }
                });
            },
            {
                threshold: 0.5, // 50% visível
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.container} id="about" ref={aboutRef}>
            <h1 className={`${styles.backgroundTitle}`} ref={titleRef}>ABOUT ME</h1>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")}
                             alt="Cursor icon"
                             className={styles.icon}/>
                        <div>
                            <h4>Front End Developer</h4>
                            <p>
                                I’m a frontend developer with a talent for creating dynamic mobile applications
                                and responsive websites. I love turning innovative ideas into reality.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")}
                             alt="Server icon"
                             className={styles.icon}/>
                        <div>
                            <h4>Backend Developer</h4>
                            <p>
                                I’m a backend developer with a knack for building lightning-fast systems and robust APIs,
                                turning innovative ideas into powerful solutions.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")}
                             alt="UI icon"
                             className={styles.icon}/>
                        <div>
                            <h4>UI Designer</h4>
                            <p>
                                I’m UI/UX designer with a talent for crafting intuitive and engaging user
                                interfaces, transforming creative ideas into seamless experiences.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/scrumIcon.png")}
                             alt="Server icon"
                             className={styles.icon}/>
                        <div>
                            <h4>Software Engineer</h4>
                            <p>
                                I’m a Software Engineer dedicated to innovation and excellence,
                                inspiring and leading my team to success in every project.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};