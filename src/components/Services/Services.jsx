import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import Json from "../Header/MenuItems.json";
import "./services.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Special/Loader/Loader";

const Services = (props) => {

    const [forceLoader, setForceLoader] = useState(true);
      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },800)
        setTimeout(() => {
            setForceLoader(false);
        },1000)
    },[])

    return (
        <div id="ServicesPage" className="servicesWrapper">
            {forceLoader ? <Loader/> : null}
            <SinglePagesHero
                title={props.pageName}
                parentName={props.parentName}
                parentPath={props.parentPath}
            />
            <div className="allServices">
                {Object.keys(Json.Services.Submenu).map((keyName, index) => {
                    return (
                        <div key={index} className="service" style={{display:'flex', flexDirection:'column', alignItems:'flex-start', alignContent:'center'}}>
                            <NavLink to={Json.Services.Submenu[keyName].link}><h2>{Json.Services.Submenu[keyName].text}</h2></NavLink>

                            {Json.Services.Submenu[keyName].subSubmenu && (
                                <ul style={{display:'flex', flexDirection:'column', alignItems:'flex-start', alignContent:'center', justifyContent:'center', padding:'0 5px 0 0 '}}>
                                    {Object.keys(
                                        Json.Services.Submenu[keyName]
                                            .subSubmenu
                                    ).map((keyname,idx) => {
                                        return (
                                            <NavLink key={idx} to={`${Json.Services.Submenu[keyName].link}${Json.Services.Submenu[
                                                keyName
                                            ].subSubmenu[keyname].link}`}>
                                                {
                                                    Json.Services.Submenu[
                                                        keyName
                                                    ].subSubmenu[keyname].text
                                                }
                                            </NavLink>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
