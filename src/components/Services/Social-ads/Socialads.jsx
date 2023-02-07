import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../SingleServicePage";

const SocialAds = (props) => {
    console.log(props);
    return (
        <div id="SocialAdsPage" className="socialAdsWrapper singleService">
            <SinglePagesHero
                title={props.pageName}
                parentName={props.parentName}
                parentPath={props.parentPath}
            />
            <SingleServicePage
                title={props.pageName}
                path={props.path}
                reasons={
                    [
                        'ניסיון רב בתחום',
                        'מחירים נוחים ביחס לשוק',
                        'תמונות, סרטונים ואייקונים לבחירה ללא תשלום',
                        'קופירייטינג, עיצוב והכרת הפלטפורמות ברמה גבוהה',
                    ]
                }
                pageHeading={
                    <p>
                        פרסום ברשתות חברתיות הוא דרך מצוינת להגיע לקהל היעד שלך. <br />
                        היום כמעט כל עסק מפרסם את עצמו באחת מהרשתות החבריות או משתמש בשירותי הפרסום של גוגל.
                        <br />
                        בעזרת פרסום ממומן ופרסום אורגני ברשתות החברתיות תוכלו להגיע
                        לקהל רחב יותר ולקדם ביעילות את המוצרים או השירותים שלכם.{" "}
                        <br />
                        ובכך, לייצר יותר הכנסות ולהגדיל את העסק.
                        <br />
                        <b>
                            רוצים לפרסם איתנו את העסק שלכם ולהעלות אותו בכמה
                            דרגות?
                        </b>
                        <br />
                        <b>השאירו פרטים או התקשרו עכשיו!</b>
                    </p>
                }
            />
        </div>
    );
};

export default SocialAds;
