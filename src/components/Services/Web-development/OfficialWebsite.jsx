import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "./SingleServicePage";

const OfficialWebsite = (props) => {
    return ( 
        <div id="OfficialWebsitePage" className="officialWebsiteWrapper singleService">
            <SinglePagesHero title={props.pageName} grandParentName={props.grandParentName} grandParentPath={props.grandParentPath} parentName={props.parentName} parentPath={props.parentPath}/>
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

        </div>
     );
}
 
export default OfficialWebsite;