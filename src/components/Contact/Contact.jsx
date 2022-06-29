import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import './contact.css'
import BGIMAGE from '../Contact/modernOfficeInteriorBG.webp'
import {BsPinMap} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {MdAlternateEmail} from 'react-icons/md'

const Contact = (props) => {

    return ( 
        <div id="ContactPage" className="contactWrapper">
            <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
            <div className="contactContent" style={{backgroundImage:`url(${BGIMAGE})`}}>
            <div className="form">
                    <h3>כמה פרטים ומתקדמים</h3>
                    <div className="inputs">
                        <input type="text" placeholder="שם פרטי" id="userFirstName" name="userFirstName" />
                        <input type="text" placeholder="שם משפחה" id="userLastName" name="userLastName" />
                        <input type="text" placeholder="מספר נייד" id="userMobilePhone" name="userMobilePhone" />
                        <input type="email" placeholder="אימייל" id="userEmail" name="userEmail" />
                    </div>
                    <p>על מה נדבר?</p>
                    <div className="checkboxes">
                        <span className="checkbox"><input type="checkbox" name="website" id="website" />בניית אתר</span>
                        <span className="checkbox"><input type="checkbox" name="google" id="google" />פרסום בגוגל</span>
                        <span className="checkbox"><input type="checkbox" name="social" id="social" />פרסום ברשתות החברתיות</span>
                        <span className="checkbox"><input type="checkbox" name="branding" id="branding" />מיתוג עסקי</span>
                        <span className="checkbox"><input type="checkbox" name="else" id="else" />משהו אחר</span>
                    </div>
                    <br /><br />
                    <button>שליחה</button>
                </div>
                <div className="contactDetails">
                    <h3>פרטי התקשרות</h3>
                    <ul >
                        <li><i><BsPinMap/></i><span>אילת 36, חולון</span></li>
                        <li><a href="tel:0527984133"><i><BsPhone/></i><span>0527984133</span></a></li>
                        <li><a href="https://wa.me/+972527984133"><i><AiOutlineWhatsApp/></i><span>0527984133</span></a></li>
                        <li><a href="mailto:office@ezd.co.il"><i style={{marginTop:'5px'}}><MdAlternateEmail/></i><span>office@ezd.co.il</span></a></li>
                    </ul>
                </div>
                
            </div>
        </div>

     );
}
 
export default Contact; 