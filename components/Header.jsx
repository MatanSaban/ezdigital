import Link from "next/link";
import { useState } from "react";
import Logo from './Logo';
import MainMenu from './MainMenu';
import MobileMenu from "./MobileMenuComps/MobileMenu";
import ServicesPopup from './MobileMenuComps/ServicesPopup';

const Header = (props) => {
    const [isShown, setIsShown] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpenReady, setMenuOpenReady] = useState(false);

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpenReady, setSubMenuOpenReady] = useState(false);

    const menuToggle = () => {
        setTimeout(() => {
            setMenuOpenReady(!menuOpenReady);
            setSubMenuOpen(!subMenuOpen);
            setSubMenuOpenReady(false);
        }, 500);
        if (menuOpen === true) {
            setTimeout(() => {
                setMenuOpen(!menuOpen);
            }, 1000);
        } else {
            setMenuOpen(!menuOpen);
        }
    };

    const subMenuToggle = () => {
        setSubMenuOpen(!subMenuOpen);
        setSubMenuOpenReady(!subMenuOpenReady);
        // setTimeout(() => {
        // }, 50);
    };


    return (
        <>
            <header className={`blurFilter p-l-r-50 `}>
                <div className={`MainMenu w-p-60`}>
                    <nav>
                        <ul className="row space-between p-relative txt-center">
                            <MainMenu navMenu={props.navMenu} />
                        </ul>
                    </nav>
                    <div className="mobileMenuWrapper">
                        <div onClick={menuToggle} className={`mobileMenu ${!menuOpen ? "mobileMenu-closed" : !menuOpenReady ? "mobileMenu-open" : "mobileMenu-open mobileMenu-open-ready"}`}>
                            <div className="mobileMenuLine mobileMenuLine1"></div>
                            <div className="mobileMenuLine mobileMenuLine2"></div>
                            <div className="mobileMenuLine mobileMenuLine3"></div>
                        </div>
                    </div>
                </div>
                <div className={`logoAndPhone row aligned-center w-p-30`}>
                    <div className="ContactLink txt-center w-p-50"> 
                    <Link
                            onMouseEnter={() => setIsShown(true)}
                            className="phoneButton f-size-r-1-2 p-relative "
                            href="tel:0527984133"
                            target={'_blank'}
                            style={{
                                textDecoration: "none", 
                                color:'#fff',
                                textShadow: '0 0 20px black',
                                fontWeight:'bold'
                            }}
                        >
                            דברו איתנו - 052-798-4133
                            {isShown && (
                                <div className="p-absolute column"
                                style={{
                                    top: "100%",
                                    textAlign: "center",
                                    right: "50%",
                                    transform: 'translateX(50%)',
                                    width: '100%',
                                    borderRadius: "15px",
                                    marginTop:'10px',
                                }}
                                onMouseLeave={() => setIsShown(false)}>
                                    <Link target={'_blank'} className='contactButton m-t-b-5 p-5' style={{background: "var(--color-primary)", borderRadius: "15px",}} href={'tel:0527984133'} >קליק והשיחה יוצאת</Link>
                                    <Link target={'_blank'} className='contactButton m-t-b-5 p-5 txt-white' style={{background: "green", borderRadius: "15px",}} href={'https://wa.me/+972527984133'} >הודעת וואטסאפ</Link>
                                </div>
                            )}
                        </Link>
                    </div>
                    <div className={`Logo w-p-50`}>
                        <Link onClick={(props.mobileView || props.tabletView) && menuOpen && menuToggle} href="/"><Logo className="w-p-100"></Logo></Link>
                    </div>
                </div>
            </header>
            <MobileMenu classes={menuOpen ? 'menuOpen' : ''} menuToggle={menuToggle} subMenuToggle={subMenuToggle} navMenu={props.navMenu} mobileView={props.mobileView} tabletView={props.tabletView} />
            <ServicesPopup servicesNavMenu={props?.navMenu?.items[1]} menuToggle={menuToggle} subMenuToggle={subMenuToggle} classes={menuOpen && subMenuOpenReady ? 'subMenuOpen' : menuOpen && !subMenuOpen ? 'subMenuClosed' : !menuOpen && !subMenuOpenReady ? 'subMenuClosed' : ''} /> 
        </>
    );
};

export default Header;
