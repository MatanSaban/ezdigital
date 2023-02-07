import { NavLink } from "react-router-dom";
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import "./projects.css";
import Loader from "../Special/Loader/Loader.jsx";


const Projects = (props) => {
    return (
        <div id="projectsPage">
            {props.projects ? null : <Loader/>}
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
            <div className="theProjects">
                {props.projects && props.projects.map((project) => { 
                    return (
                        <div key={project.id} className="projectContainer" style={{background: `url(${project.acf.featured_image.url})`, }}>
                            <NavLink to={`/projects/${project.acf.link_title}`}>
                                <div className="projectContainerCover">
                                    
                                </div>
                                <div className="projectContainerContent">
                                <h3>{project.title.rendered}</h3>
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
