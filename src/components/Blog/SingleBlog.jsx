import { NavLink, useParams } from "react-router-dom";
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
    
    
    const [articlesArray, setArticlesArray] = useState([]);
    const [twoArticles, setTwoArticles] = useState([]);
    const [currentArticleNumber, setCurrentArticleNumber] = useState([]);
    
    
    const pageLoad = () => {
        setTimeout(() => {
            setTwoArticles(
                articlesArray
                );
                window.scrollTo(0, 0);
            }, 500);
        };
        
        
        useEffect(() => {
            
            Object.keys(BlogJson.theBlog.articles).map((articleName, index) => {
                // if (articleName !== link) {
                    setArticlesArray((articlesArray) => [
                        ...articlesArray,
                    BlogJson.theBlog.articles[articleName],
                ]);
                // }
            });

   

    },[]
    );
    
    
    
    
        

        useEffect(() => {
            const checkCurrentBlogPos = () => {
                window.scrollTo(0, 0);

                let currentArticle = null
                let indexes = []
                articlesArray.map((article, index) => {
                    if (article.link == `/${link}`) {
                        currentArticle = index
                        setCurrentArticleNumber(currentArticle)
                        if (index === 0) {
                            indexes = [currentArticle + 1, currentArticle + 2]
                        } else if ((index + 1) !== undefined) {
                            indexes = [currentArticle - 1 , currentArticle +1]
                        } else if (index + 1 == (null || undefined || "undefined")){
                            indexes = [currentArticle - 1 , currentArticle - 2]
                        }
                        setTwoArticles(indexes)
                    }
                    
                })
            }
    
            checkCurrentBlogPos();
        }, [articlesArray, link]);
    
        
        
        


    const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

    console.log('link', BlogJson.theBlog.articles[link].title);
    return (
        <div id="singleBlog" className="singleBlogWrapper">
            <section className="hero">
                {/* <Container path={BlogJson.theBlog.articles[link].image}>
                    <div
                        className="singleBlog__hero"
                        style={{
                            background: `url(${BlogJson.theBlog.articles[link].image})`,
                        }}
                    ></div>
                </Container> */}
                <SinglePagesHero
                    title={BlogJson.theBlog.articles[link].title}
                    parentName={props.parentName}
                    parentPath={props.parentPath}
                />
                        <div className="heading">
                            <h2>{BlogJson.theBlog.articles[link].headingTitle}</h2>
                            {RenderHTML(BlogJson.theBlog.articles[link].headingParagraph)}
                        </div>
            </section>
            <section className="blogContent" style={{background:`url(${BlogJson.theBlog.articles[link].image})`}}>
                        <div className="sections contentWrapper">
                            {
                                Object.keys(BlogJson.theBlog.articles[link].sections).map((sectioName, index) => {
                                    return (
                                        <div className="contentSection" key={index}>
                                        <h3>{BlogJson.theBlog.articles[link].sections[sectioName].title}</h3>
                                        {RenderHTML(BlogJson.theBlog.articles[link].sections[sectioName].content)}
                                    </div>

                                    )
                                    })
                            }
                        </div>
            </section>
            <section className="leaveDetails">
                <h3>רוצה לדבר על זה?</h3>
                <p>פרטים בקטנה וכבר נחזור אליך!</p>
                <div className="form">
                        <input type="text" placeholder="שם מלא.. צריכים להכיר לא?" />
                        <input type="text" placeholder="מספר נייד, כדי שתוכל לטייל עם הכלב בזמן השיחה :)" />
                        <input type="email" placeholder="אימייל למקרה שהמספר פלאפון לא נכון" />
                        <button>יאללה, תחזרו אלי</button>
                </div>
            </section>
            <section className="nextandprevblogpostsWrapper">
                <div className="nextandprevblogposts">
                    {twoArticles &&
                        twoArticles.map((i, index) => {
                              
                            return (
                                articlesArray[i] !== undefined &&
                                <NavLink
                                    onClick={() => pageLoad}
                                    className={i > currentArticleNumber ? 'prevBlog' : 'nextBlog'}
                                    key={index}
                                    to={`/blog${articlesArray[i] && articlesArray[i].link}`}
                                >
                                    <div
                                        style={{
                                            background: `url(${articlesArray[i] && articlesArray[i].image})`,
                                        }}
                                    >
                                        <div className="blogItemCover">
                                            <h3>{articlesArray[i] && articlesArray[i].title}</h3>
                                            <button>מעבר לכתבה</button>
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

export default SingleBlog;
