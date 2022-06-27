import { NavLink } from "react-router-dom";
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import "./projects.css";
import ProjectsJson from "./Projects.json";


const Projects = (props) => {
    return (
        <div id="projectsPage">
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
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
