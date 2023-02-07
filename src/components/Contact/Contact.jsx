import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import "./contact.css";
import BGIMAGE from "../Contact/modernOfficeInteriorBG.webp";
import { BsPinMap } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Form from "../Special/Form/Form";

const Contact = (props) => {

    return (
        <div id="ContactPage" className="contactWrapper">
            <SinglePagesHero
                title={props.pageName}
                parentName={props.parentName}
                parentPath={props.parentPath}
            />
            <div
                className="contactContent"
                style={{ backgroundImage: `url(${BGIMAGE})` }}
            >
                <Form formStyle='longForm'/>
                <div className="contactDetails">
                    <h3>פרטי התקשרות</h3>
                    <ul>
                        <li>
                            <i>
                                <BsPinMap />
                            </i>
                            <span>אילת 36, חולון</span>
                        </li>
                        <li>
                            <a href="tel:0527984133">
                                <i>
                                    <BsPhone />
                                </i>
                                <span>0527984133</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+972527984133">
                                <i>
                                    <AiOutlineWhatsApp />
                                </i>
                                <span>0527984133</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:office@ezd.co.il">
                                <i style={{ marginTop: "5px" }}>
                                    <MdAlternateEmail />
                                </i>
                                <span>office@ezd.co.il</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
