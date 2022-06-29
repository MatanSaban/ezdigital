import SinglePagesHero from "../../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import SingleServicePage from "./SingleServicePage";

const DigitalAsset = (props) => {
    return ( 
        <div id="DigitalAssetPage" className="digitalAssetWrapper singleService">
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
                        <h2>מה זה אתר תוכן?</h2>
                        <p>
                            אתר תוכן הינו אתר הנועד לספק תוכן לגולש, ומתפרש על
                            מגוון רחב של תחומים. <br />
                            לרוב אתר תוכן יהיה אתר "חדשותי"
                            שייספק מידע חדש לגולש עבור התחום בו האתר עוסק. <br />
                            לדוגמא: אתר מאקו הינו אתר תוכן המספק חדשות, בנוסף
                            לכך אתר מאקו נותן חדשות במגוון רחב של תחומים ועקב זה
                            נקרא אתר תוכן רחב. <br />
                            כיאה לכל אתר תוכן הוא יציג מידע
                            טקסטואלי או גרפי לגבי נושאים מסויימים כאמור, בצורה
                            הנוחה ביותר לקריאה וממשק המשתמש. <br />
                            כשייתבצעו כל הפרטים
                            האלה, אתר התוכן נחשב לכזה.
                        </p>
                    </>
                }
            />
        </div>
     );
}
 
export default DigitalAsset;