import LOGO from "../../assets/images/ezdLogo.svg";
import "./header.css";
import Svg from "../Special/Logo/Svg.jsx";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./MenuItems.json";
import { AiFillCaretLeft } from "react-icons/ai";
import { useEffect, useState } from "react";

const Header = () => {


    const [isShown, setIsShown] = useState(false);

    const [y, setY] = useState(window.scrollY);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
        } else if (y < window.scrollY) {
        }
        setY(window.scrollY);
      };
    

useEffect(() => {
  window.addEventListener("scroll", (e) => handleNavigation(e));

  return () => { // return a cleanup function to unregister our function since its gonna run multiple times
    window.removeEventListener("scroll", (e) => handleNavigation(e));
  };
}, [y]);


    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

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
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    href="tel:052-798-4133"
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "1.2rem",
                        position:'relative'
                    }}
                >
                    דברו איתנו - 052-798-4133
                    {isShown && <p style={{position:'absolute',top:'100%', textAlign:'center', right:'0', width:'100%', background:'var(--color-primary)', borderRadius:'15px',
                padding:'10px'
                }}>קליק והשיחה יוצאת</p>}
                </a>
                <NavLink to={'/'}><Svg /></NavLink>
            </div>
            {y > 500 &&<div id="toTopButton">
                <button style={y > 600 ? {opacity:1, transition:'all 0.3s ease'} : {opacity:0 , transition:'all 0.3s ease'}} onClick={() => scrollToTop()}>To Top</button>
            </div>}
        </header>
    );
};

export default Header;
