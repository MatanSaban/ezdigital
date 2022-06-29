import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../Web-development/SingleServicePage";




const GoogleAds = (props) => {
    return ( 
        <div id="GoogleAdsPage" className="googleAdsWrapper singleService">
        <SinglePagesHero title={props.pageName} parentName={props.parentName} parentPath={props.parentPath} />
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
                        <h2>פרסום בגוגל וכל מה שבדרך</h2>
                        <p>
                        פרסום בפלטפורמת החיפוש של גוגל הוכיחה את עצמה מזמן. <br />
                        בין אם מדובר בקמפיין ממומן או בחיפושים אורגניים, פרסום בגוגל לא יכניס לעסק שלך לקוחות חדשים ומשלמים, <br />
                        כמובן במידה ואתה עומד בקריטריונים שלה. <br />
                        מה זה SEO? מה זה PPC? מה זה SEM? <br />
                        כל התשובות פה. <br />
                        </p>
                    </>
                }
            />
    </div>

     );
}
 
export default GoogleAds;


