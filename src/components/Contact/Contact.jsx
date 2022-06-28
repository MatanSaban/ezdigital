import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import './contact.css'
import BGIMAGE from '../Contact/modernOfficeInteriorBG.webp'

const Contact = (props) => {

    console.log(props.location);


    return ( 
        <div id="ContactPage" className="contactWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
            <div className="contactContent" style={{backgroundImage:`url(${BGIMAGE})`}}>
                <div className="contactDetails">
                    <ul>
                        <li><i></i>אילת 36, חולון</li>
                        <li><i></i>0527984133</li>
                        <li><i></i>0527984133</li>
                        <li><i></i>office@ezd.co.il</li>
                    </ul>
                </div>
                <div className="form">
                    <input type="text" placeholder="שם פרטי" id="userFirstName" name="userFirstName" />
                    <input type="text" placeholder="שם משפחה" id="userLastName" name="userLastName" /><br /><br />
                    <input type="text" placeholder="מספר נייד" id="userMobilePhone" name="userMobilePhone" />
                    <input type="email" placeholder="אימייל" id="userEmail" name="userEmail" />
                    <p>על מה נדבר?</p>
                    <input type="checkbox" name="website" id="website" /><span>בניית אתר</span><br />
                    <input type="checkbox" name="google" id="google" /><span>פרסום בגוגל</span><br />
                    <input type="checkbox" name="social" id="social" /><span>פרסום ברשתות החברתיות</span><br />
                    <input type="checkbox" name="branding" id="branding" /><span>מיתוג עסקי</span><br />
                    <input type="checkbox" name="else" id="else" /><span>משהו אחר</span><br />
                    <br /><br />
                    <button>שליחה</button>
                </div>
            </div>
        </div>

     );
}
 
export default Contact; 