import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I’m Victor</h1>
                <h2 className={styles.subTitle}>
                    Software Engineer, <br/>
                    Scrum Master
                    & Frontend Developer
                </h2>
                <p className={styles.description}>
                    I’m a creative and straightforward person passionate about
                    mobile and web
                    development, focusing on frontend. At 25, I’m studying
                    Software Engineering and interning as an Android Developer.
                    I also serve as a Tech Lead for the Frontend team and as a
                    Scrum Master for other teams.

                    My most notable achievements include managing teams to
                    ensure timely deliveries and maintaining high code quality.
                    I’m driven by the desire to turn ideas into reality, support
                    my colleagues in achieving their goals, and create new
                    things.

                    I believe that every piece of work should be done well.
                    Outside of development, I enjoy playing music and reading
                    books.

                    If you want to know more, check out this <a
                    href="https://viquitor-me.vercel.app"
                    style={{color: '#3498db'}}>
                    link</a>.
                </p>
                <p className={styles.description}>
                    My email: <a href="mailto:victorsantos.ft18@gmail.com"
                                 style={{color: '#3498db'}}>
                    victorsantos.ft18@gmail.com
                </a>
                </p>


                <div className={styles.contentBtn}>
                    <a href="https://viquitor-me.vercel.app"
                       className={styles.contactBtn}>
                        Learn more
                    </a>
                    <a href="https://docs.google.com/document/d/1WJGKfQKVAQM3AQccVivVft14ZwCXmlrH9BHYjavrBI4/export?format=pdf"
                       className={styles.contactBtn}>
                        Download Resume
                    </a>
                        <p className={styles.description} style={{textWrap: 'nowrap'}}>
                            <a href="https://dev.to/viquitor"
                               className={styles.articleLink}>
                                Read my articles
                                <img
                                    src={getImageUrl("hero/arrow.png")}
                                    alt="Arrow for link"
                                    style={{width: '10%'}}
                                />
                            </a>
                        </p>
                </div>

            </div>
            <img
                src={getImageUrl("hero/profile.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />

        </section>
    );
};