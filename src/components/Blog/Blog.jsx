import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import './blog.css'
import { NavLink } from "react-router-dom";
import Loader from "../Special/Loader/Loader";
import { useEffect } from "react";
import { useState } from "react";

const Blog = (props) => {
    const posts = props.posts;

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
        <div id="blogPage" className="blogWrapper">
            {forceLoader ? <Loader/> : null}
            <SinglePagesHero title={props.pageName} parentName={props.parentName}  parentPath={props.parentPath}/>
            <div className="articles">
                {
                    posts && posts.map((post,index) => {
                        let toReturn = null;
                        toReturn = (
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
                        return toReturn;
                    })
                }
            </div>
        </div>
     );
}
 
export default Blog; 