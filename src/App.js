import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import SingleProject from "./components/Projects/SingleProject.jsx";
import WebDevelopment from "./components/Services/Web-development/WebDevelopment.jsx";
import SocialAds from "./components/Services/Social-ads/Social-ads.jsx";
import Page404 from "./components/Special/404/Page404.jsx";
import GoogleAds from "./components/Services/Google-ads/Google-ads.jsx";
import Branding from "./components/Services/Branding/Branding.jsx";
import LandingPage from "./components/Services/Web-development/LandingPage.jsx";
import OfficialWebsite from "./components/Services/Web-development/OfficialWebsite.jsx";
import OnlineStore from "./components/Services/Web-development/OnlineStore.jsx";
import DigitalAsset from "./components/Services/Web-development/DigitalAsset.jsx";
import Development from "./components/Services/Web-development/Development.jsx";
import GooglePaid from "./components/Services/Google-ads/GooglePaid.jsx";
import GoogleOrganic from "./components/Services/Google-ads/GoogleOrganic.jsx";
import FacebookPaid from "./components/Services/Social-ads/FacebookPaid.jsx";
import FacebookOrganic from "./components/Services/Social-ads/FacebookOrganic.jsx";



function App() {


    return (
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home path={'Projects'} pageName={'עמוד הבית'}/>} ></Route>
            
            <Route exact path="Projects" element={<Projects path={'Projects/:link'} pageName={'פרויקטים'} parentName={'עמוד הבית'} parentPath={'/'}/>} ></Route>
            <Route exact path="Projects/:link" element={<SingleProject />} ></Route>
            
            <Route exact path="Services" element={<Services path={'services'} pageName={'כל השירותים'} parentName={'עמוד הבית'} parentPath={'/'}/>} ></Route>
            
            <Route exact path="Services/web-development" element={<WebDevelopment path={'web-development'} pageName={'בניית אתרים'} parentName={'כל השירותים'} parentPath={'/Services'}/>} ></Route> 
            <Route exact path="Services/web-development/landing-page" element={<LandingPage path={'landing-page'} pageName={'דף נחיתה'} parentName={'בניית אתרים'} parentPath={'/web-development'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/web-development/official-website" element={<OfficialWebsite path={'official-website'} pageName={'אתר תדמית'} parentName={'בניית אתרים'} parentPath={'/web-development'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/web-development/online-store" element={<OnlineStore path={'online-store'} pageName={'אתר חנות'} parentName={'בניית אתרים'} parentPath={'/web-development'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/web-development/digital-asset" element={<DigitalAsset path={'digital-asset'} pageName={'נכס דיגיטלי'} parentName={'בניית אתרים'} parentPath={'/web-development'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/web-development/development" element={<Development path={'development'} pageName={'פיתוח'} parentName={'בניית אתרים'} parentPath={'/web-development'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            
            <Route exact path="Services/Social-ads" element={<SocialAds path={'social-ads'} pageName={'פרסום ברשתות החברתיות'} parentName={'כל השירותים'} parentPath={'/Services'}/>} ></Route>
            <Route exact path="Services/Social-ads/facebook-organic" element={<FacebookOrganic path={'facebook-organic'} pageName={'פרסום אורגני בפייסבוק'} parentName={'פרסום ברשתות החברתיות'} parentPath={'/Social-ads'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/Social-ads/facebook-paid" element={<FacebookPaid path={'facebook-paid'} pageName={'פרסום ממומן בפייסבוק'} parentName={'פרסום ברשתות החברתיות'} parentPath={'/Social-ads'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            
            <Route exact path="Services/Google-ads" element={<GoogleAds path={'google-ads'} pageName={'פרסום בגוגל'} parentName={'כל השירותים'} parentPath={'/Services'}/>} ></Route>
            <Route exact path="Services/Google-ads/Google-organic" element={<GoogleOrganic path={'google-organic'} pageName={'פרסום אורגני בגוגל'} parentName={'פרסום בגוגל'} parentPath={'/google-ads'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            <Route exact path="Services/Google-ads/Google-paid" element={<GooglePaid path={'google-paid'} pageName={'פרסום ממומן בגוגל'} parentName={'פרסום בגוגל'} parentPath={'/google-ads'} grandParentName={'כל השירותים'} grandParentPath={'/Services'} />}  ></Route>
            
            <Route exact path="Services/Branding" element={<Branding path={'branding'} pageName={'מיתוג עסקי'} parentName={'כל השירותים'} parentPath={'/Services'}/>} ></Route>

            <Route exact path="Blog" element={<Blog path={'blog'} pageName={'הבלוג'} parentName={'עמוד הבית'} parentPath={'/'}/>} ></Route>
            <Route exact path="Contact" element={<Contact path={'contact'} pageName={'יצירת קשר'} parentName={'עמוד הבית'} parentPath={'/'}/>} ></Route> 

            <Route path="*" element={<Page404 />} ></Route>
          </Routes>
          <Footer />
          

        </div>
    );
}

export default App;
