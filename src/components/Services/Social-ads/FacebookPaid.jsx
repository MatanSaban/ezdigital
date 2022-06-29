import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "../Web-development/SingleServicePage";

const FacebookPaid = (props) => {
    return ( 
        <div id="FacebookPaidPage" className="facebookPaidWrapper singleService">
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
                    ]
                }
                pageHeading={
                    <p>
                        כולם כבר יודעים שפייסבוק היא הרשת החברתית הגדולה בעולם. <br />
                        עם הכמויות העצומות של המידע האישי שפייסבוק יודעים עלינו, <br />
                        בעלי עסקים וחברות פרסום יכולים ליצור ולמקד את המודעות שלהם בדיוק מירבי. <br />
                        פרסום ממומן בפייסבוק יציג את המודעות שלך לאנשים שכבר עשו לייק לעמוד שלך או הביעו עניין במוצרים דומים. <br />
                        כמו כן, ניתן למקד ללקוחות פוטנציאליים לפי מיקום, גיל, מין או נתונים דמוגרפיים אחרים. <br />
                        כאן איזי דיגיטל נכנסת לתמונה! <br />
                        <br />
                        <b>צריכים קמפיין פייסבוק לעסק? השאירו פרטים ונתחיל.</b>
                    </p>
                }
            />
        </div>
     );
}
 
export default FacebookPaid;