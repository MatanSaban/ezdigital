import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";

const Blog = (props) => {
    return ( 
        <div id="blogPage" className="blogWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName}  parentPath={props.parentPath}/>
        </div>
     );
}
 
export default Blog;