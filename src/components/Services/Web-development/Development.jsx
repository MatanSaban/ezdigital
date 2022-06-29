import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "./SingleServicePage";

const Development = (props) => {
    return ( 
        <div id="DevelopmentPage" className="developmentWrapper singleService">
            <SinglePagesHero title={props.pageName} grandParentName={props.grandParentName} grandParentPath={props.grandParentPath} parentName={props.parentName} parentPath={props.parentPath}/>
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
 
export default Development;