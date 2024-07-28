import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, skills, demo, source } = project;

    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.descContainer}>
                <p className={styles.description}>{description}</p>
            </div>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Demo
                </a>
                <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        demo: PropTypes.string,
        source: PropTypes.string.isRequired,
    }).isRequired,
};
