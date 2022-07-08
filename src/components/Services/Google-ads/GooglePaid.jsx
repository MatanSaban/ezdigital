import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../SingleServicePage";

const GooglePaid = (props) => {
    return ( 
        <div id="GooglePaidPage" className="googlePaidWrapper singleService">
            <SinglePagesHero title={props.pageName} grandParentName={props.grandParentName} grandParentPath={props.grandParentPath} parentName={props.parentName} parentPath={props.parentPath}/>
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                reasons={
                    [
                        'ניסיון רב בתחום',
                        'הכרת הפלטפורמה לעומק',
                        'תמונות, סרטונים ואייקונים לבחירה ללא תשלום',
                        'שקיפות מלאה בתהליך',
                        'קבלת החלטות תקציב ואסטרטגיה מורכבות'
                    ]
                }
                pageHeading={
                    <>
                        <h2>פרסום ממומן בגוגל - הכלי האפקטיבי ביותר לקבלת לידים</h2>
                        <p>
                        כיצד פרסום בגוגל יכול להרחיב את העסק שלך? <br />
                        כבעל עסק ולא משנה אם זה עסק גדול, בינוני או קטן, <br />
                        פרסום בגוגל הוא אחת ההחלטות הטובות ביותר שאתה יכול לקבל על מנת להגדיל חשיפה, קבלת לקוחות חדשים והגדלת העסק. <br />
                        פלטפורמת Ads Google – אשר בעבר נקראה גוגל אדוורדס היא פלטפורמת הפרסום המקוונת הנפוצה והגדולה ביותר שיש, <br />
                        ועל ידי פרסום נכון בגוגל העסק שלך יכול להגיע לקהל פוטנציאלי של מיליונים. <br />
                        אנחנו באיזי דיגיטל יודעים לבנות קמפיין ממומן בגוגל (SEM), המתאים לתקציבך אשר יגדיל משמעותית את כמות הלידים! <br />
                        <br />
                        <b>תתקשרו עכשיו לייעוץ חינם או השאירו פרטים ונחזור אליכם במהרה.</b>
                        </p>
                    </>
                }
            />
        </div>
     );
}
 
export default GooglePaid;