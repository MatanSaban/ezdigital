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
        <div
            id="LandingPagesPage"
            className="landingPageWrapper  singleService"
        >
            <SinglePagesHero
                title={props.pageName}
                grandParentName={props.grandParentName}
                grandParentPath={props.grandParentPath}
                parentName={props.parentName}
                parentPath={props.parentPath}
            />
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                reasons={
                    [
                        'פונטים מיוחדים ללא תוספת תשלום',
                        'אחסון האתר למשך 6 חודשים ללא תשלום',
                        'תמונות, סרטונים ואייקונים לבחירה ללא תשלום',
                        'עיצוב בהתאמה אישית',
                        'ניסיון ומקצועיות',
                    ]
                }
                pageHeading={
                    <>
                        <h2>מה זה דף נחיתה?</h2>
                        <p>
                        כאשר שואלים אותנו איך צריך להראות דף נחיתה, התשובה שלנו מאוד פשוטה, אחד שמביא המרות. <br />
                        חשוב מאוד לדעת, בדפי הנחיתה משתמשים לרוב כאשר רוצים להפעיל קמפיין ממומן בגוגל או ברשת <br />
                        החברתית, ואם הדף לא יפגע במטרה כסף רב יתבזבז ולא נקבל תוצאות רצויות. <br />
                        אנחנו בחברת איזי דיגיטל פיתחנו שיטה לבניית דפי נחיתה שבאמת מביאים תוצאות! <br />
                        </p>
                    </>
                }
            />
        </div>
    );
};

export default LandingPage;
