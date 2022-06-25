import "./footer.css";
import LOGO from "../../assets/images/ezdLogo.svg";
import { NavLink } from "react-router-dom";
import menuItems from "../Header/MenuItems.json";
import { useState } from "react";
import ProjectsJson from "../Projects/Projects.json";

const Footer = () => {
    const [subMenuItems, setSubMenuItems] = useState([]);

    return (
        <footer className="centerText">
            <div className="footer__content">
                <div className="about">
                    <NavLink to={'/'}>
                        <img className="logo" src={LOGO} alt="Easy Digital Logo" />
                    </NavLink>
                    <p style={{textAlign:'right'}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur nostrum facere corporis illum eligendi
                        similique veritatis quos quia illo sit.
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
                    <ul style={{textAlign:'right'}}>
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
            <div className="footer__contact">
                <h2>קליק קטן לאדם, צעד גדול לעסק.</h2>
                <input type="text" name="fullname" id="fullname" />
                <input type="number" name="phonenumber" id="phonenumber" />
                <input type="email" name="useremail" id="useremail" />
                <button>שליחה</button>
            </div>
        </footer>
    );
};

export default Footer;
