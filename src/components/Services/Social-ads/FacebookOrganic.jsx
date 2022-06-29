import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../Web-development/SingleServicePage";

const FacebookOrganic = (props) => {
    return (
        <div
            id="FacebookOrganicPage"
            className="facebookOrganicWrapper singleService"
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
                        'שקיפות מלאה',
                        'הצגת תוצאות חודשיות',
                        'תמונות, סרטונים ואייקונים לבחירה ללא תשלום',
                        'מחירים נוחים ביחס לשוק',
                        'ניסיון ומקצועיות',
                    ]
                }
                pageHeading={
                    <>
                        <h2>מה זה פרסום אורגני בפייסבוק?</h2>
                        <p>
                            {/* פייסבוק היא פלטפורמת המדיה החברתית הפופולרית ביותר
                            בעולם, עם למעלה מ-1.6 מיליארד משתמשים פעילים. <br />
                            נכון לינואר 2022 מספר המשתמשים בפייסבוק ישראל הוא מעל 6
                            מליון (!) <br /> */}
                            פרסום אורגני בפייסבוק הוא דרך מצוינת לקדם את העסק,
                            המוצר או השירות שלך לאנשים בפייסבוק מבלי לשלם כסף.{" "}
                            <br />
                            זוהי אחת הדרכים החסכוניות ביותר לפרסם בפייסבוק
                            מכיוון שהיא אינה דורשת פרסומות בתשלום או פוסטים
                            ממומנים. <br />
                            <b>
                                רוצים לקדם את העסק שלכם בצורה אורגנית בפייסבוק?
                                השאירו פרטים ונחזור אליכם מיד.
                            </b>
                        </p>
                    </>
                }
            />
        </div>
    );
};

export default FacebookOrganic;
