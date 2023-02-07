import { NavLink, useParams } from "react-router-dom";
import "./singleblog.css";
// import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import Form from "../Special/Form/Form";
import Loader from "../Special/Loader/Loader";

// const Container = (props) => (
//     <Parallax
//         renderLayer={(percentage) => (
//             <div
//                 style={{
//                     height: percentage * 500,
//                     zIndex: -1,
//                     position: "absolute",
//                     left: "0",
//                     top: "0",
//                     width: "fit-content",
//                     backgroundSize: "contain",
//                 }}
//             />
//         )}
//         bgImage={props.path}
//         strength={500}
//     ></Parallax>
// );

const SingleBlog = (props) => {
    const { link } = useParams();

    const [twoArticles, setTwoArticles] = useState([]);
    const [currentArticleNumber, setCurrentArticleNumber] = useState([]);
    const [post, setPost] = useState(null);
    const [forceLoader, setForceLoader] = useState(true);
    const posts = props.posts;

    const pageLoad = () => {
        setTimeout(() => {
            setTwoArticles(posts);
            window.scrollTo(0, 0);
        }, 500);
    };

      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },800)
        setTimeout(() => {
            setForceLoader(false);
        },1000)
    },[post])

    

    
    useEffect(() => {
        const checkCurrentBlogPos = () => {
            window.scrollTo(0, 0);
            const currentPost = posts && posts.find(post => post.acf.slug === link);
            currentPost && setPost(currentPost.acf);

            let indexes = [];
            posts && posts.map((post, index) => {
                if (post.acf.slug === link) {
                    setCurrentArticleNumber(index);

                    if (index === 0) {
                        indexes = [null, index + 1];
                        console.log(1);
                        console.log(indexes);
                    } else if (index + 1 <= posts.length - 1) {
                        indexes = [index - 1, index + 1];
                        console.log(2);
                        console.log(indexes);
                    } else if (index + 1 > posts.length - 1) {
                        indexes = [index - 1, null];
                        console.log(3);
                        console.log(indexes);
                    }

                    
                }
                return setTwoArticles(indexes);
            });
        };

        checkCurrentBlogPos();
    }, [posts, link]);

    const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

    return (
        <div id="singleBlog" className="singleBlogWrapper">
            {forceLoader ? <Loader/> : null}
            {post && <><section className="hero">
                <SinglePagesHero
                    title={post && post.post_title}
                    parentName={props.parentName}
                    parentPath={props.parentPath}
                />
                <div className="heading">
                    <h2>{post && post.pre_post_title}</h2>
                    {RenderHTML(
                        // BlogJson.theBlog.articles[link].headingParagraph
                        post && post.pre_post_content
                    )}
                </div>
            </section>
            <section
                className="blogContent"
                style={{
                    background: `url(${post && post.featured_image})`,
                }}
            >
                <div className="sections contentWrapper">
                    {post.post_content.map(
                        (section, index) => {
                            return (
                                <div className="contentSection" key={index}>
                                    <h3>
                                        {
                                            section.content_1.title
                                        }
                                    </h3>
                                    {RenderHTML(
                                        section.content_1.text
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
            </section>
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "fit-content",
                    marginTop: "100px",
                }}
            >
                <Form
                    formStyle={"longForm"}
                    title={
                        <>
                            <h3>רוצה לדבר על זה?</h3>
                            <p>פרטים בקטנה וכבר נחזור אליך!</p>
                        </>
                    }
                />
            </section>
            <section className="nextandprevblogpostsWrapper">
                <div className="nextandprevblogposts">
                    {twoArticles &&
                        twoArticles.map((i, index) => {
                            return (
                                posts[i] !== undefined && (
                                    <NavLink
                                        onClick={() => pageLoad}
                                        className={
                                            i > currentArticleNumber
                                                ? "prevBlog"
                                                : "nextBlog"
                                        }
                                        key={index}
                                        to={`/blog/${
                                            posts[i] &&
                                            posts[i].acf.slug
                                        }`}
                                    >
                                        <div
                                            style={{
                                                background: `url(${
                                                    posts[i] &&
                                                    posts[i].acf.featured_image
                                                })`,
                                            }}
                                        >
                                            <div className="blogItemCover">
                                                <h3>
                                                    {posts[i] &&
                                                        posts[i].acf.post_title}
                                                </h3>
                                                <button>מעבר לכתבה</button>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            );
                        })}
                </div>
            </section></>}
        </div>
    );
};

export default SingleBlog;
