import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";

const Services = (props) => {
    return ( 
        <div id="ServicesPage" className="servicesWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName}  parentPath={props.parentPath} />
        </div>
     );
}
 
export default Services;