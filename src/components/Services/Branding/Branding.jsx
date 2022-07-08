import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../SingleServicePage";




const Branding = (props) => {
    return ( 
        <div id="BrandingPage" className="brandingWrapper singleService">
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                pageHeading={
                    <p>
                        מיתוג עסקי הוא היבט חשוב בכל עסק. תחשוב על זה כלספר את הסיפור של החברה שלך. <br />
                        איך החברה חושבת, פועלת, מדברת ואפילו נראית! <br />
                        בעזרת מיתוג עסקי נכון וטוב העסק שלך יקבל מהלקוחות הנוכחיים שלו והעתידיים את היחס והמכירות הראויים לו. 
                    </p>
                }
            />
        </div>

     );
}
 
export default Branding;


