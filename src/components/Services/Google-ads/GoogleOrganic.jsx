import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../SingleServicePage";

const GoogleOrganic = (props) => {
    return ( 
        <div id="GoogleOrganicPage" className="googleOrganicWrapper singleService">
            <SinglePagesHero title={props.pageName} grandParentName={props.grandParentName} grandParentPath={props.grandParentPath} parentName={props.parentName} parentPath={props.parentPath}/>
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                reasons={
                    [
                        'ניסיון רב בתחום',
                        'הכרת הפלטפורמה לעומק',
                        'הכרת כל הפרמטרים לSEO ברמה גבוהה',
                        'שקיפות מלאה בתהליך',
                    ]
                }
                pageHeading={
                    <p>
                        אחרי שבניתם אתר מקצועי ומעוצב להפליא עכשיו הגיע הזמן להציג אותו לעולם, ואיך עושים זאת? <br />
                        צודקים, על ידי קידום בגוגל - (SEO) וממומן בגוגל (SEM). <br />
                        אם תרצו מידע נוסף מעבר למה שתקראו בכתבה או להתחיל לחשוף וליצור תנועה באתר שלכם ללקוחות פוטנציאליים, <br />
                        <b>תשאירו פרטים או תתקשרו אלינו לייעוץ חינם.</b> <br />
                    </p>
                }
            />
        </div>
     );
}
 
export default GoogleOrganic;