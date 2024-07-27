import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard.jsx";

export const Projects = () => {
    seEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('https://api.github.com/users/Jao-Viquitor/repos');
            const data = await response.json();

            const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            const projectsWithLanguages = await Promise.all(
                sortedData.map(async repo => {
                    const languagesResponse = await fetch(repo.languages_url);
                    const languagesData = await languagesResponse.json();
                    const languages = Object.keys(languagesData).slice(0, 3);
                    return {
                        title: repo.name,
                        imageSrc: "projects/project.png",
                        description: repo.description,
                        skills: languages,
                        demo: repo.homepage,
                        source: repo.html_url
                    };
                })
            );

            setProjects(projectsWithLanguages);
        };

        fetchProjects();
    }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};
