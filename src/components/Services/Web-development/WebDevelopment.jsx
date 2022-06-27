import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
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
import SingleServicePage from "./SingleServicePage";

const WebDevelopment = (props) => {
    const firstRef = useRef();

    const scrollNextSection = () => {
        const refref = firstRef.current;
    };

    return (
        <div id="WebdevelopmentPage " className="webdevelopmentWrapper singleService">
            <SinglePagesHero
                title={props.pageName}
                parentName={props.parentName}
                parentPath={props.parentPath}
            />
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                pageHeading={
                    <p>
                        <b>בניית אתרים בעיצוב מיוחד, מותאם למובייל, עם דגש על
                        מהירות וחווית משתמש שלא הכרתם!</b>
                         <br />
                        כל בעל עסק מבין שללא אתר אינטרנט קשה מאוד לעסק להתקיים
                        בימינו. <br />
                        אנחנו בחברת איזי דיגיטל עוסקים בבניית אתרים כבר מעל 5
                        שנים <br />
                        ויודעים להתאים לכל לקוח את האתר / חנות אינטרנטית בדיוק
                        לצרכיו.
                        <br />
                        <big>
                            <b>
                                {" "}
                                לא משנה אם אתם עסק קטן או רשת חנויות, אנחנו נבנה
                                לכם אתר ברמה הגבוהה ביותר בכל רמת תקציב.
                                <br />
                                כל שעליכם לעשות הוא להשאיר פרטים או לחייג אלינו
                                ולקבל את השירות המקצועי ביותר!
                                <br />
                            </b>
                        </big>
                    </p>
                }
            />


            {/* <section className="websiteDevelop__Explanation">
                
            </section> */}


            <section className="websiteDevelop__services">
                <h3>שירותי בניית אתרים</h3>
                <div>
                    <NavLink to="/services/web-development/landing-page">
                        <div className="websiteDevelop__services__item">
                            <i>
                                <IoRocketOutline />
                            </i>
                            <span>עמודי נחיתה</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services/web-development/official-website">
                        <div className="websiteDevelop__services__item">
                            <i>
                                <ImUserTie />
                            </i>
                            <span>אתרי תדמית</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services/web-development/online-store">
                        <div className="websiteDevelop__services__item">
                            <i>
                                <IoStorefrontOutline />
                            </i>
                            <span>אתרי חנות</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services/web-development/digital-asset">
                        <div className="websiteDevelop__services__item">
                            <i>
                                <ImList />
                            </i>
                            <span>נכסים דיגיטליים</span>
                        </div>
                    </NavLink>
                    <NavLink to="/services/web-development/development">
                        <div className="websiteDevelop__services__item">
                            <i>
                                <IoCodeSlashOutline />
                            </i>
                            <span>פיתוח</span>
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
