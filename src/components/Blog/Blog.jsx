import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import blogJson from './Blog.json'
import './blog.css'
import { NavLink } from "react-router-dom";

const Blog = (props) => {
    return ( 
        <div id="blogPage" className="blogWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName}  parentPath={props.parentPath}/>
            <div className="articles">
                {
                    Object.keys(blogJson.theBlog.articles).map((articleName,index) => {
                        return (
                            <div key={index} className='article' style={{background:`url(${blogJson.theBlog.articles[articleName].image})`}}>
                                <NavLink to={`${blogJson.theBlog.link}${blogJson.theBlog.articles[articleName].link}`}>
                                <div className="articleCover">
                                    {
                                        Object.keys(blogJson.theBlog.articles[articleName].categories).map((categName, index) => {
                                            return (
                                                <div className="categoryTag" key={categName + index}>
                                                     <span>{blogJson.categories[categName]}</span>
                                                </div>
                                            )
                                        })
                                    }
                                    <h3>{blogJson.theBlog.articles[articleName].title}</h3>
                                    <NavLink to={`${blogJson.theBlog.link}${blogJson.theBlog.articles[articleName].link}`}><button>מעבר לכתבה</button></NavLink>
                                </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Blog; 