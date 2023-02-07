import { NavLink } from "react-router-dom";
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import "./projects.css";
import Loader from "../Special/Loader/Loader.jsx";
import { useEffect } from "react";
import { useState } from "react";


const Projects = (props) => {
    const [forceLoader, setForceLoader] = useState(true);
      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },800)
        setTimeout(() => {
            setForceLoader(false);
        },1000)
    },[])

    return (
        <div id="projectsPage">
            {forceLoader ? <Loader/> : null}
            {props.pageName ? null : <Loader/>}
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
