import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import Link from "next/link";
import { useRouter } from "next/router";

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

    const [forceLoader, setForceLoader] = useState(true);

    const router = useRouter();

    const link = router.query.childSlug;
      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },800)
        setTimeout(() => {
            setForceLoader(false);
        },1000)
    },[project])

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);
        });
        observer.observe(scrolledElement.current);
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
            projects?.map((project, index) => {
                if (project?.acf?.link_title !== link) {
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
            projects?.find(
                (project) =>
                    project.acf &&
                    project.acf.link_title === link &&
                    setProject(project)
            );
    }, [router, projects]);

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
        <div id="singleProject" className="projectWrapper" style={{marginTop:'-215px'}}>
            <section
                className="hero"
                style={{
                    background: `url(${
                        project?.acf?.in_post_main_image.url
                    })`,
                }}
            >
                <div className="heroCover">
                    <h1>{project?.acf?.project_name}</h1>
                    <h3>{project?.acf?.which_work}</h3>
                    {RenderHTML(
                        project?.acf?.short_description_about_client
                    )}
                    <a
                        className="button"
                        style={{
                            background: `${
                                project?.acf?.fonts_props[0]?.color_1?.color_number
                            }`,
                        }}
                        href={project?.acf?.website_url}
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
                        project?.acf?.fonts_props[0]?.color_1?.color_number
                    }`,
                }}
            >
                <h3 className="f-size-r-1-8">פונטים באתר</h3>
                <div className="fontsContainer p-b-20">
                    {project?.acf?.font_types}
                </div>
            </section>
            <section className="mobileBgSection">
                <Container
                    className="mobileBgSection"
                    path={project?.acf?.first_background?.url}
                ></Container>
                <div>
                    <h5>{project?.acf?.client_quote}</h5>
                </div>
            </section>
            <section
                className="colorsPassage passage"
                ref={scrollArea}
                style={{
                    background: `${
                        project?.acf?.fonts_props[0]?.color_1?.color_number
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
                        Object.keys(project?.acf?.fonts_props[0]).map(
                            (colorObj, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            width: `calc(100% / ${Object.keys(project?.acf?.fonts_props[0])?.length})`,background: `${project?.acf?.fonts_props[0][colorObj]?.color_number}`,
                                        }}
                                    >
                                        <p>{project?.acf?.fonts_props[0][colorObj]?.color_name}</p>
                                        <p style={{ direction: "ltr" }}>
                                            {project?.acf?.fonts_props[0][colorObj]?.color_number?.toUpperCase()}
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
                            {project?.acf?.branding_colors_explanation}
                        </p>
                    </pre>
                    <div className="endScroll" ref={scrollBoundary}></div>
                </div>
            </section>
            <section
                className="projectSummary"
                style={{background: `url(${project?.acf?.second_background?.url})`,}}
            >
                <div className="projectSummaryCover">
                    {RenderHTML(project?.acf?.website_story)}
                </div>
            </section>
            <section className="projectContactForm">
                <div className="formWrapper">
                    <div>
                        <h4>
                            אהבת את האתר של {project?.acf?.project_name}?
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
                    {twoProjects?.map((i, index) => {
                            return (
                                <Link
                                    onClick={() => pageLoad()}
                                    className="nextProjectItem"
                                    key={index}
                                    href={`/showcase/${i?.acf?.link_title}`}
                                >
                                    <div
                                        style={{
                                            background: `url(${i?.acf?.featured_image.url})`,
                                        }}
                                    >
                                        <div className="nextProjectItemCover">
                                            <h3>{i?.acf?.project_name}</h3>
                                            <button>למעבר לפרויקט</button>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </section>
        </div>
    );
};

export default SingleProject;
