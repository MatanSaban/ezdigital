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

const LandingPage = (props) => {
    return (
        <div id="LandingPagesPage" className="landingPageWrapper  singleService"> 
            <SinglePagesHero title={props.pageName} grandParentName={props.grandParentName} grandParentPath={props.grandParentPath} parentName={props.parentName} parentPath={props.parentPath}/>
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                pageHeading={
                    <p>
                        בניית אתרים בעיצוב מיוחד, מותאם למובייל, עם דגש על
                        מהירות וחווית משתמש שלא הכרתם! <br />
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
        </div>
    );
};

export default LandingPage;
