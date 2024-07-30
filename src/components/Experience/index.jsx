import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import frameworks from "../../data/framework.json";
import librarys from "../../data/library.json";
import dbs from "../../data/db.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.contentSkills}>
                    <h3 className={styles.subTitle}>Languages</h3>
                    <div className={styles.skills}>
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)}
                                             alt={skill.title}/>
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className={styles.subTitle}>Frameworks</h3>
                    <div className={styles.skills}>
                        {frameworks.map((framework, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img
                                            src={getImageUrl(framework.imageSrc)}
                                            alt={framework.title}/>
                                    </div>
                                    <p>{framework.title}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsSection}>
                            <h3 className={styles.subTitle}>Library’s</h3>
                            <div className={styles.skills}>
                                {librarys.map((library, id) => {
                                    return (
                                        <div key={id} className={styles.skill}>
                                            <div
                                                className={styles.skillImageContainer}>
                                                <img
                                                    src={getImageUrl(library.imageSrc)}
                                                    alt={library.title}/>
                                            </div>
                                            <p>{library.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.skillsSection}>
                            <h3 className={styles.subTitle}>Databases</h3>
                            <div className={styles.skills}>
                                {dbs.map((db, id) => {
                                    return (
                                        <div key={id} className={styles.skill}>
                                            <div
                                                className={styles.skillImageContainer}>
                                                <img
                                                    src={getImageUrl(db.imageSrc)}
                                                    alt={db.title}/>
                                            </div>
                                            <p>{db.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li
                                                key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};