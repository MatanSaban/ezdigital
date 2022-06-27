import "./webdevelopment.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { ImUserTie } from "react-icons/im";
import { ImList } from "react-icons/im";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Json from "../ServicesData.json";


const SingleServicePage = (props) => {
    return (
        <div id="SingleServicePage" className="SingleServicePage">
            <video
                autoPlay
                muted
                loop
                style={{
                    height: "95vh",
                    width: "75vw",
                    position: "absolute",
                    left: "0",
                    top: "5vh",
                    zIndex: "-1",
                    objectFit: "cover",
                }}
            >
                <source src={Json[props.path].video} />
            </video>
            <div className="SingleServicePage__hero">
                {props.pageHeading}
                <div>
                    <div className="form lineForm">
                        <input type="text" placeholder="שם מלא" />
                        <input type="number" placeholder="טלפון" />
                        <button>שליחה</button>
                    </div>
                </div>
                <div className="scrollDown">
                    <i className="iconupDown">
                        <FaAngleDoubleDown />
                    </i>
                </div>
            </div>
            <section id="whyUs" className="SingleServicePage__whyUs">
                <h2>למה כדאי לפנות אלינו לגבי {props.title}?</h2>
                <div>
                    <span>
                        <BsCheckCircleFill />
                        פונטים מיוחדים ללא תוספת תשלום
                    </span>
                    <span>
                        <BsCheckCircleFill />
                        אחסון האתר למשך 6 חודשים ללא תשלום
                    </span>
                    <span>
                        <BsCheckCircleFill />
                        תמונות, סרטונים ואייקונים לבחירה ללא תשלום{" "}
                    </span>
                    <span>
                        <BsCheckCircleFill />
                        עיצוב בהתאמה אישית
                    </span>
                    <span>
                        <BsCheckCircleFill />
                        ניסיון ומקצועיות
                    </span>
                </div>
            </section>
            <div className="singleServicePageWrapper">
                <section className="contentWrapper">
                    <h2>עוד מידע על {props.title}</h2>

                    {Object.keys(Json[props.path].content).map(
                        (keyName, index) => {
                            return (
                                <div
                                    key={index}
                                    className='contentSection'

                                    // style={{ background: "red", margin: "10px" }}
                                >
                                    <h3>
                                        {
                                            Json[props.path].content[keyName]
                                                .title
                                        }
                                    </h3>
                                        
                                        <p><pre>
                                            {
                                                Json[props.path].content[
                                                    keyName
                                                ].paragraph
                                            }
                                        </pre></p>
                                    
                                </div>
                            );
                        }
                    )}
                </section>
                {/* <section className=""> */}
                <div>
                    <div className="formWrapper">
                        <div className="form lineForm">
                            <input type="text" placeholder="שם מלא" />
                            <input type="number" placeholder="טלפון" />
                            <button>שליחה</button>
                        </div>
                    </div>
                </div>
                {/* </section> */}
            </div>
        </div>
    );
};

export default SingleServicePage;
