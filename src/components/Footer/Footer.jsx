import "./footer.css";
import LOGO from "../../assets/images/ezdLogo.svg";
import { NavLink } from "react-router-dom";
import menuItems from "../Header/MenuItems.json";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectsJson from "../Projects/Projects.json";
import Svg from "../Special/Logo/Svg.jsx";
import blogJson from "../Blog/Blog.json";
import { v4 as uuidv4 } from "uuid";
import Form from "../Special/Form/Form";
import { useMediaQuery } from 'react-responsive';


const Footer = () => {
    const [subMenuItems, setSubMenuItems] = useState([]);

    const [isElementVisible, setIsElementVisible] = useState(false);

    const ref = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);
        });
        observer.observe(ref.current);
    })

    // console.log('isElementVisible', isElementVisible);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` }); 

    return (
        <footer className="centerText" ref={ref}>
            <div className="footer__content" style={!isMobile ? {display:'grid', gridTemplateColumns:'25% 25% 25% 25% '} : {display:'flex', flexDirection:'column'}}>
                <div className="about">
                    <NavLink to={"/"}>
                        <Svg />
                    </NavLink>
                    <p style={{ textAlign: "right", paddingRight: "100px" }}>
                        אנו חברת פרסום דיגיטלי העוסקת בבניית אתרים בוורדפרס,
                        <br />
                        פרסום אורגני, פרסום ממומן בגוגל,
                        <br /> פרסום ממומן ברשתות החברתיות,
                        <br /> ניהול דפי עסק ברשתות החברתיות, עיצוב גרפי ועוד.{" "}
                    </p>
                </div>
                <div className="quickLinks">
                    <h3>ניווט מהיר</h3>
                    <ul style={{ textAlign: "right" }}>
                        {Object.keys(menuItems.Services.Submenu).map(
                            (subMenuItem, index) => {
                                return (
                                    <li key={uuidv4()}>
                                        <NavLink
                                            to={
                                                menuItems.Services.Submenu[
                                                    subMenuItem
                                                ].link
                                            }
                                        >
                                            {
                                                menuItems.Services.Submenu[
                                                    subMenuItem
                                                ].text
                                            }
                                        </NavLink>
                                    </li>
                                );
                            }
                        )}
                        {Object.keys(menuItems.Services.Submenu).map(
                            (subMenuItem, index) => {
                                return (
                                    <div key={uuidv4()}>
                                        {menuItems.Services.Submenu[subMenuItem]
                                            .subSubmenu !== undefined &&
                                            Object.keys(
                                                menuItems.Services.Submenu[
                                                    subMenuItem
                                                ].subSubmenu
                                            ).map((i) => {
                                                return (
                                                    <li key={uuidv4()}>
                                                        <NavLink
                                                            
                                                            to={`${menuItems.Services.Submenu[subMenuItem].link}${menuItems.Services.Submenu[subMenuItem].subSubmenu[i].link}`}
                                                        >
                                                            {
                                                                menuItems
                                                                    .Services
                                                                    .Submenu[
                                                                    subMenuItem
                                                                ].subSubmenu[i]
                                                                    .text
                                                            }
                                                        </NavLink>
                                                    </li>
                                                );
                                            })}
                                    </div>
                                );
                            }
                        )}
                    </ul>
                </div>
                <div className="projects">
                    <h3>פרויקטים</h3>
                    <ul style={{ textAlign: "right" }}>
                        {Object.keys(ProjectsJson).map((projectName, index) => {
                            return (
                                <li key={uuidv4()}>
                                    <NavLink
                                        to={`/projects${ProjectsJson[projectName].link}`}
                                    >
                                        {ProjectsJson[projectName].name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="blog">
                    <h3>הבלוג</h3>
                    <ul style={{ textAlign: "right" }}>
                        {Object.keys(blogJson.theBlog.articles).map(
                            (articleName, index) => {
                                return (
                                    <li key={uuidv4()}>
                                        <NavLink
                                            to={`${blogJson.theBlog.link}${blogJson.theBlog.articles[articleName].link}`}
                                        >
                                            {
                                                blogJson.theBlog.articles[
                                                    articleName
                                                ].title
                                            }
                                        </NavLink>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
                
            </div>
            <div className="formHolderWrapper" ref={ref}>
                <div className="formHolder"  style={ isElementVisible ? {background:'transparent', width:'100%', margin:'0 auto', position:'initial', left:'0', bottom:'0'} : {background: 'linear-gradient( 180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 70%) )',width:'50%', margin:'0 auto', position:'fixed', left:'0', bottom:'0', width:'100%'}} >
                    <Form parent={'footer'} isElementVisible={isElementVisible} whatAreWeGoingToTalkAbout={true} wrapperStyle={{width:'50%', margin:'0 auto'} } formStyle={'fullWidthForm lineForm'} title={<><h3>קליק קטן לאדם, צעד גדול לעסק.</h3></>}/>
                </div>
            </div>
        <div className="copyrights">כל הזכויות שמורות לEasy Digital</div>
        </footer>
    );
};

export default Footer;