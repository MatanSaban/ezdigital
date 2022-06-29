import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "./SingleServicePage";

const OnlineStore = (props) => {
    console.log(props.path);
    return ( 
        <div id="OnlineStorePage" className="onlineStoreWrapper singleService">
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
                    <>
                        <h2>בניית אתר מכירה - כל המידע מא' ועד ת'</h2>
                        <p>
                        אתם בעלי חנות פיזית שרוצים להגדיל את מאגר הלקוחות ולהעלות את המכירות? או שתמיד חלמתם למכור <br />
                        מוצר אותו אתם מייצרים או מעצבים ולא ידעתם איך? ויכול להיות שטיילתם בסין או בכל מקום אחר בעולם <br />
                        ומצאתם מוצרים שלדעתכם כולם ירצו לקנות? <br />
                        אנחנו באיזי דיגיטל יודעים לבנות לכם אתר חנות אינטרנטית (e-commerce) ברמה הגבוהה ביותר<br /> והכי חשוב 
                        מתאימה לכם ולמוצרים שלכם! <br />
                        <br />
                        <b>לייעוץ חינם השאירו פרטים או צרו איתנו קשר בטלפון.</b> <br />
                        </p>
                    </>
                }
            />

        </div>
     );
}
 
export default OnlineStore;