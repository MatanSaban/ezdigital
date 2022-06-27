import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";

const Contact = (props) => {

    console.log(props.location);


    return ( 
        <div id="ContactPage" className="contactWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
        </div>

     );
}
 
export default Contact; 