import { NavLink, useParams } from "react-router-dom";
import ProjectsJson from "../Projects/Projects.json";
import "./singleproject.css";
import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";

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

    const scrollArea = useRef();
    const scrollBoundary = useRef();
    const scrolledElement = useRef();

    const [isElementVisible, setIsElementVisible] = useState(false);

    const pageLoad = () => {
        setTimeout(() => {
            setTwoprojects(
                projectsArray.sort(() => 0.5 - Math.random()).slice(0, 2)
            );
            window.scrollTo(0, 0);
        }, 500);
    };

    useEffect(() => {
        // getMultipleRandom(projectsArray,2)
        Object.keys(ProjectsJson).map((projectName, index) => {
            if (ProjectsJson[projectName] !== ProjectsJson[link]) {
                setProjectsArray((projectsArray) => [
                    ...projectsArray,
                    ProjectsJson[projectName],
                ]);
            }
        });

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);
        });
        observer.observe(scrolledElement.current);
        window.scrollTo(0, 0);
        // getMultipleRandom(projectsArray, 2);
    }, []);

    useEffect(() => {
        setTwoprojects(
            projectsArray.sort(() => 0.5 - Math.random()).slice(0, 2)
        );
    }, [projectsArray]);

    const { link } = useParams();

    const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

    return (
        <div id="singleProject" className="projectWrapper">
            <section
                className="hero"
                style={{
                    background: `url(${ProjectsJson[link].backgroundImage})`,
                }}
            >
                <div className="heroCover">
                    <h1>{ProjectsJson[link].name}</h1>
                    <h3>{ProjectsJson[link].whatWeDid}</h3>
                    {RenderHTML(ProjectsJson[link].description)}
                    <a
                        style={{
                            background: `${ProjectsJson[link].colors.mainColor}`,
                        }}
                        href={ProjectsJson[link].websiteLink}
                    >
                        מעבר לאתר
                    </a>
                </div>
            </section>
            <section
                className="fontsPassage passage"
                style={{
                    background: `${ProjectsJson[link].colors["mainColor"]}`,
                }}
            >
                <h2>פונטים באתר</h2>
                <div className="fontsContainer">
                    {Object.keys(ProjectsJson[link].fonts).map(
                        (fontName, index) => {
                            return (
                                ProjectsJson[link].fonts[fontName] !== "" && (
                                    <div key={index}>
                                        <p>
                                            {ProjectsJson[link].fonts[fontName]}
                                        </p>
                                    </div>
                                )
                            );
                        }
                    )}
                </div>
            </section>
            <section className="mobileBgSection">
                <Container
                    className="mobileBgSection"
                    path={ProjectsJson[link].mobileBG}
                ></Container>
                <div>
                    <h5>{ProjectsJson[link].mobileQuote}</h5>
                </div>
            </section>
            <section
                className="colorsPassage passage"
                ref={scrollArea}
                style={{
                    background: `${ProjectsJson[link].colors["mainColor"]}`,
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
                    {Object.keys(ProjectsJson[link].colors.colorsatts).map(
                        (colorName, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        width: `calc(100% / ${
                                            Object.keys(
                                                ProjectsJson[link].colors
                                                    .colorsatts
                                            ).length
                                        })`,
                                        background: `${ProjectsJson[link].colors.colorsatts[colorName].colornumber}`,
                                    }}
                                >
                                    <p>{colorName}</p>
                                    <p>
                                        {
                                            ProjectsJson[link].colors
                                                .colorsatts[colorName]
                                                .colornumber
                                        }
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
                        <p>{ProjectsJson[link].colors.colorsDescription}</p>
                    </pre>
                    <div className="endScroll" ref={scrollBoundary}></div>
                </div>
            </section>
            <section
                className="projectSummary"
                style={{ background: `url(${ProjectsJson[link].laptopBG})` }}
            >
                <div className="projectSummaryCover">
                    {RenderHTML(ProjectsJson[link].laptopDescription)}
                </div>
            </section>
            <section className="projectContactForm">
                <div className="formWrapper">
                    <div>
                        <h4>אהבת את האתר של {ProjectsJson[link].name}?</h4>
                        <p>גם העסק שלך יכול לקבל אתר כזה!</p>
                    </div>
                    <div className="lineForm">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="שם מלא"
                        />
                        <input
                            type="number"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="מספר טלפון"
                        />
                        <input
                            type="email"
                            name="useremail"
                            id="useremail"
                            placeholder="אימייל"
                        />
                        <input
                            type="hidden"
                            name="hidden_site_name"
                            id="hidden_site_name"
                            value={ProjectsJson[link].name}
                        />
                        <button>שליחה</button>
                    </div>
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
                                    to={`/projects${i.link}`}
                                >
                                    <div
                                        style={{
                                            background: `url(${i.backgroundImage})`,
                                        }}
                                    >
                                        <div className="nextProjectItemCover">
                                            <h3>{i.name}</h3>
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
