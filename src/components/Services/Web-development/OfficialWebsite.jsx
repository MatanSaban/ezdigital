import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "./SingleServicePage";

const OfficialWebsite = (props) => {
    return ( 
        <div id="OfficialWebsitePage" className="officialWebsiteWrapper singleService">
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
                pageHeading= {
                        <p>
                            אתר תדמית הוא כמו דייט ראשון ולמה אתם שואלים? <br />
                            כי זהו הרגע שבו הלקוח הפוטנציאלי שלכם פוגש אותכם לראשונה,<br />
                            ואתם רוצים שיהיה את החיבור המוצלח ביותר באופן מיידי!<br />
                            כי אם הוא יתאכזב הסיכוי להחזיר אותו לדייט שני הוא כמעט בלתי אפשרי.<br />
                            אנחנו באיזי דיגיטל יודעים לבנות אתרי תדמית בהתאמה אישית מעוצבים ברמה הגבוהה ביותר!<br />
                            <br />
                            <b>השאירו פרטים או התקשרו אלינו לייעוץ ראשוני חינם!</b><br />
                        </p>
                }
            />

        </div>
     );
}
 
export default OfficialWebsite;