import LOGO from "../../assets/images/ezdLogo.svg";
import "./header.css";
import Svg from "../Special/Logo/Svg.jsx";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./MenuItems.json";
import { AiFillCaretLeft } from "react-icons/ai";

const Header = () => {
    return (
        <header className="mainHeader blurFilter">
            <div className="mainMenu">
                <ul className="mainMenu__list">
                    {Object.keys(menuItems).map((keyName, i) => (
                        <li className="mainMenu__Item" key={i}>
                            <NavLink to={menuItems[keyName].link}>
                                {menuItems[keyName].text}
                            </NavLink>
                            {menuItems[keyName].Submenu && (
                                <ul className="mainMenu__subMenu">
                                    {menuItems[keyName].Submenu &&
                                        Object.keys(
                                            menuItems[keyName].Submenu
                                        ).map((item, index) => {
                                            return (
                                                <>
                                                    <li
                                                        key={index}className={menuItems[keyName].Submenu[item].subSubmenu ? "mainMenu__subMenu__item has_submenu": "mainMenu__subMenu__item"}>{menuItems[keyName].Submenu[item].subSubmenu ? (
                                                            <>
                                                                <NavLink
                                                                    to={menuItems[keyName].Submenu[item].link}>{menuItems[keyName].Submenu[item].text}</NavLink>
                                                                <AiFillCaretLeft />
                                                            </>
                                                        ) : (
                                                            <NavLink
                                                                to={menuItems[keyName].Submenu[item].link}>{menuItems[keyName].Submenu[item].text}
                                                            </NavLink>
                                                        )}
                                                        {
                                                            menuItems[keyName].Submenu[item].subSubmenu && 
                                                            (
                                                                <ul className="sub-subMenu">
{                                                                Object.keys(menuItems[keyName].Submenu[item].subSubmenu).map((subSubmenuItem, index) => {
                                                                    return (
                                                                        <li className="sub-subMenu__item" key={menuItems[keyName].Submenu[item].subSubmenu[subSubmenuItem].text + index}>
                                                                            <NavLink to={`${menuItems[keyName].Submenu[item].link}${menuItems[keyName].Submenu[item].subSubmenu[subSubmenuItem].link}`}>
                                                                                {menuItems[keyName].Submenu[item].subSubmenu[subSubmenuItem].text}
                                                                            </NavLink>
                                                                        </li>
                                                                    )
                                                                }) 
}                                                                </ul>
                                                            )
                                                        }
                                                    </li>
                                                </>
                                            );
                                        })}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="logoAndPhone">
                <a
                    href="tel:052-798-4133"
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "1.2rem",
                    }}
                >
                    דברו איתנו - 052-798-4133
                </a>
                <Svg />
            </div>
        </header>
    );
};

export default Header;
