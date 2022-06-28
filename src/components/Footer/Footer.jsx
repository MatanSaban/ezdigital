import "./footer.css";
import LOGO from "../../assets/images/ezdLogo.svg";
import { NavLink } from "react-router-dom";
import menuItems from "../Header/MenuItems.json";
import { useState } from "react";
import ProjectsJson from "../Projects/Projects.json";
import Svg from "../Special/Logo/Svg.jsx";

const Footer = () => {
    const [subMenuItems, setSubMenuItems] = useState([]);

    return (
        <footer className="centerText">
            <div className="footer__content">
                <div className="about">
                <NavLink to={'/'}><Svg /></NavLink>
                    <p style={{ textAlign: "right", paddingRight:'100px' }}>
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
                                    <li>
                                        <NavLink
                                            key={index}
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
                                    menuItems.Services.Submenu[subMenuItem]
                                        .subSubmenu !== undefined &&
                                    Object.keys(
                                        menuItems.Services.Submenu[subMenuItem]
                                            .subSubmenu
                                    ).map((i) => {
                                        return (
                                            <li>
                                                <NavLink
                                                    key={index + i}
                                                    to={`${menuItems.Services.Submenu[subMenuItem].link}${menuItems.Services.Submenu[subMenuItem].subSubmenu[i].link}`}
                                                >
                                                    {
                                                        menuItems.Services
                                                            .Submenu[
                                                            subMenuItem
                                                        ].subSubmenu[i].text
                                                    }
                                                </NavLink>
                                            </li>
                                        );
                                    })
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
                                <li key={index + projectName}>
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
                </div>
            </div>
            <div className="formWrapper">
                <h4>קליק קטן לאדם, צעד גדול לעסק.</h4>
                <div className="footer__contact lineForm">
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="שם מלא"
                    />
                    <input
                        type="number"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="מספר טלפון"
                    />
                    <input
                        type="email"
                        name="useremail"
                        id="useremail"
                        placeholder="אימייל"
                    />
                    <button>שליחה</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
