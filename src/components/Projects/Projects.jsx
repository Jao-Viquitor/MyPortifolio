import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard.jsx";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Jao-Viquitor/repos', {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                const projectsWithLanguages = await Promise.all(
                    sortedData.map(async repo => {
                        try {
                            const languagesResponse = await fetch(repo.languages_url, {
                                headers: {
                                    'Authorization': `token ${GITHUB_TOKEN}`
                                }
                            });
                            if (!languagesResponse.ok) {
                                throw new Error('Network response was not ok for languages');
                            }
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
                        } catch (languagesError) {
                            return {
                                title: repo.name,
                                imageSrc: "projects/project.png",
                                description: repo.description,
                                skills: [],
                                demo: repo.homepage,
                                source: repo.html_url
                            };
                        }
                    })
                );
                setProjects(projectsWithLanguages);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, [GITHUB_TOKEN]);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.length > 0 ? (
                    projects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
        </section>
    );
};
