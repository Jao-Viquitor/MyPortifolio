import React from 'react';
import styles from './Profile.module.css';

export const Profile = () => {
    return (
        <section className={styles.profileSection}>
            <h1 className={`${styles.profileName} ${styles.typewriter}`}>João
                Victor Santos</h1>
            <p className={`${styles.profileTitle} ${styles.typewriterTitle}`}>UI/UX
                Designer & Developer</p>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};