import { useParams } from "react-router-dom";
import BlogJson from "./Blog.json";
import "./singleblog.css";
import { Parallax } from "react-parallax";
import { useEffect, useRef, useState } from "react";
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";

const Container = (props) => (
    <Parallax
        renderLayer={(percentage) => (
            <div
                style={{
                    height: percentage * 500,
                    zIndex: -1,
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "fit-content",
                    backgroundSize: "contain",
                }}
            />
        )}
        bgImage={props.path}
        strength={500}
    ></Parallax>
);

const SingleBlog = (props) => {
    const { link } = useParams();

    const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

    console.log();

    return (
        <div id="singleBlog" className="singleBlogWrapper">
            <section className="hero">
                <Container path={BlogJson.theBlog.articles[link].image}>
                    <div
                        className="singleBlog__hero"
                        style={{
                            background: `url(${BlogJson.theBlog.articles[link].image})`,
                        }}
                    ></div>
                </Container>
                <SinglePagesHero
                    title={BlogJson.theBlog.articles[link].title}
                    parentName={props.parentName}
                    parentPath={props.parentPath}
                />
            </section>
            <section className="blogContent">
                        <div className="heading">
                            <h2>{BlogJson.theBlog.articles[link].headingTitle}</h2>
                            {RenderHTML(BlogJson.theBlog.articles[link].headingParagraph)}
                        </div>
                        <div className="sections contentWrapper">
                            {
                                Object.keys(BlogJson.theBlog.articles[link].sections).map((sectioName, index) => {
                                    return (
                                        <div className="contentSection" key={index}>
                                        {console.log(BlogJson.theBlog.articles[link].sections[sectioName].title)}
                                        <h3>{BlogJson.theBlog.articles[link].sections[sectioName].title}</h3>
                                        {RenderHTML(BlogJson.theBlog.articles[link].sections[sectioName].content)}
                                    </div>

                                    )
                                    })
                            }
                        </div>
            </section>
        </div>
    );
};

export default SingleBlog;
