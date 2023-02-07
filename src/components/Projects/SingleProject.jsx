import { NavLink, useParams } from "react-router-dom";
import ProjectsJson from "../Projects/Projects.json";
import "./singleproject.css";
import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";
import Form from "../Special/Form/Form";
import axios from "axios";
import Loader from "../Special/Loader/Loader.jsx";

const Container = (props) => (
    <Parallax
        renderLayer={(percentage) => (
            <div
                style={{
                    height: percentage * 1000,
                }}
            />
        )}
        bgImage={props.path}
        strength={400}
    ></Parallax>
);

const SingleProject = (props) => {
    const [projectsArray, setProjectsArray] = useState([]);
    const [twoProjects, setTwoprojects] = useState();
    const [project, setProject] = useState(null);
    const projects = props.projects;

    const scrollArea = useRef();
    const scrollBoundary = useRef();
    const scrolledElement = useRef();

    const [isElementVisible, setIsElementVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);
        });
        observer.observe(scrolledElement.current);
        window.scrollTo(0, 0);
    }, []);

    const { link } = useParams();

    useEffect(() => {
        projects &&
            projects.map((project, index) => {
                if (project.acf.link_title !== link) {
                    setProjectsArray((projectsArray) => [
                        ...projectsArray,
                        project,
                    ]);
                }
            });
    }, [projects, link]);

    useEffect(() => {
        setTwoprojects(
            projectsArray.sort(() => 0.5 - Math.random()).slice(0, 2)
        );
    }, [projectsArray]);

    useEffect(() => {
        projects &&
            projects.find(
                (project) =>
                    project.acf &&
                    project.acf.link_title === link &&
                    setProject(project)
            );
    }, [link, projects]);

    const pageLoad = () => {
        setTimeout(() => {
            setTwoprojects(
                projectsArray.sort(() => 0.5 - Math.random()).slice(0, 2)
            );
            window.scrollTo(0, 0);
        }, 500);
    };

    const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

    function stripTags(html, allowedTags) {
        if (typeof allowedTags === "string") {
            allowedTags = [allowedTags];
        }

        const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
        return html.replace(tags, function (match, tag) {
            if (allowedTags.includes(tag.toLowerCase())) {
                return match;
            }
            return "";
        });
    }

    return (
        <div id="singleProject" className="projectWrapper">
            {project ? null : <Loader ready={project}/>}
            <section
                className="hero"
                style={{
                    background: `url(${
                        project && project.acf.in_post_main_image.url
                    })`,
                }}
            >
                <div className="heroCover">
                    <h1>{project && project.title.rendered}</h1>
                    <h3>{project && project.acf.which_work}</h3>
                    {RenderHTML(
                        project && project.acf.short_description_about_client
                    )}
                    <a
                        className="button"
                        style={{
                            background: `${
                                project &&
                                project.acf.fonts_props[0].color_1.color_number
                            }`,
                        }}
                        href={project && project.acf.website_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        מעבר לאתר
                    </a>
                </div>
            </section>
            <section
                className="fontsPassage passage"
                style={{
                    background: `${
                        project &&
                        project.acf.fonts_props[0].color_1.color_number
                    }`,
                }}
            >
                <h2>פונטים באתר</h2>
                <div className="fontsContainer">
                    {project && project.acf.font_types}
                </div>
            </section>
            <section className="mobileBgSection">
                <Container
                    className="mobileBgSection"
                    path={project && project.acf.first_background.url}
                ></Container>
                <div>
                    <h5>{project && project.acf.client_quote}</h5>
                </div>
            </section>
            <section
                className="colorsPassage passage"
                ref={scrollArea}
                style={{
                    background: `${
                        project &&
                        project.acf.fonts_props[0].color_1.color_number
                    }`,
                }}
            >
                <div
                    ref={scrolledElement}
                    style={
                        isElementVisible
                            ? { position: "sticky", left: "0", top: "150px" }
                            : { position: "relative" }
                    }
                    className="colorsPallete"
                >
                    {project &&
                        Object.keys(project && project.acf.fonts_props[0]).map(
                            (colorObj, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            width: `calc(100% / ${
                                                Object.keys(
                                                    project &&
                                                        project.acf
                                                            .fonts_props[0]
                                                ).length
                                            })`,
                                            background: `${
                                                project &&
                                                project.acf.fonts_props[0][
                                                    colorObj
                                                ].color_number
                                            }`,
                                        }}
                                    >
                                        <p>
                                            {project &&
                                                project.acf.fonts_props[0][
                                                    colorObj
                                                ].color_name}
                                        </p>
                                        <p style={{ direction: "ltr" }}>
                                            {project &&
                                                project.acf.fonts_props[0][
                                                    colorObj
                                                ].color_number.toUpperCase()}
                                        </p>
                                    </div>
                                );
                                // })
                            }
                        )}
                </div>
                <div className="colorsDescription">
                    <h3>צבעים</h3>
                    <pre>
                        <p>
                            {project && project.acf.branding_colors_explanation}
                        </p>
                    </pre>
                    <div className="endScroll" ref={scrollBoundary}></div>
                </div>
            </section>
            <section
                className="projectSummary"
                style={{
                    background: `url(${
                        project && project.acf.second_background.url
                    })`,
                }}
            >
                <div className="projectSummaryCover">
                    {RenderHTML(project && project.acf.website_story)}
                </div>
            </section>
            <section className="projectContactForm">
                <div className="formWrapper">
                    <div>
                        <h4>
                            אהבת את האתר של {project && project.title.rendered}?
                        </h4>
                        <p style={{ color: "black" }}>
                            גם העסק שלך יכול לקבל אתר כזה!
                        </p>
                    </div>
                    <Form formStyle={"lineForm"} />
                </div>
            </section>
            <section className="nextandprevprojectsWrapper">
                <h2>פרויקטים נוספים</h2>
                <div className="nextandprevprojects">
                    {twoProjects &&
                        twoProjects.map((i, index) => {
                            return (
                                <NavLink
                                    onClick={() => pageLoad()}
                                    className="nextProjectItem"
                                    key={index}
                                    to={`/projects/${i.acf.link_title}`}
                                >
                                    <div
                                        style={{
                                            background: `url(${i.acf.featured_image.url})`,
                                        }}
                                    >
                                        <div className="nextProjectItemCover">
                                            <h3>{i.title.rendered}</h3>
                                            <button>למעבר לפרויקט</button>
                                        </div>
                                    </div>
                                </NavLink>
                            );
                        })}
                </div>
            </section>
        </div>
    );
};

export default SingleProject;
