import { NavLink } from "react-router-dom";
import "./projects.css";
import ProjectsJson from "./Projects.json";

console.log(ProjectsJson);

const Projects = () => {
    return (
        <div id="projectsPage">
            <h1>Projects</h1>
            <div className="theProjects">
                {Object.keys(ProjectsJson).map((project, index) => {
                    return (
                        <div
                            className="projectContainer"
                            style={{
                                background: `url(${ProjectsJson[project].backgroundImage})`,
                            }}
                        >
                            <NavLink to={`/projects${ProjectsJson[project].link}`}>
                                <div className="projectContainerCover">
                                    
                                </div>
                                <div className="projectContainerContent">
                                <h3>{ProjectsJson[project].name}</h3>
                                </div>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
