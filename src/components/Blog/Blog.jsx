import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import './blog.css'
import { NavLink } from "react-router-dom";
import Loader from "../Special/Loader/Loader.jsx";

const Blog = (props) => {
    const posts = props.posts;

    return ( 
        <div id="blogPage" className="blogWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName}  parentPath={props.parentPath}/>
            <div className="articles">
                {
                    posts && posts.map((post,index) => {
                        return (
                            <div key={index} className='article' style={{background:`url(${post.acf.featured_image})`}}>
                                <NavLink to={`/blog/${post.acf.slug}`}>
                                <div className="articleCover">
                                    {
                                        post.acf.post_category.map((category, index) => {
                                            if (category.name !== 'הבלוג') {
                                                return (
                                                    <div className="categoryTag" key={category.term_id}>
                                                         <span>{category.name}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    <h3>{post.acf.post_title}</h3> 
                                    <button>מעבר לכתבה</button>
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