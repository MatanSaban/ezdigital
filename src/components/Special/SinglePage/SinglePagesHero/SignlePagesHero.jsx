import TypeWriterEffect from "react-typewriter-effect";
import "./singlepageshero.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const SinglePagesHero = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      },[] )
    return (
        <section className="singlePageHero">
            <h1>{props.title}</h1>
            <div className="breadCrumbs">
                {props.grandParentPath && (
                    <>
                    {console.log('here 1')}

                        <NavLink to={"/"}>{"עמוד הבית"}</NavLink>{" "}
                        <FaAngleDoubleLeft />{" "}
                        <NavLink to={props.grandParentPath}>
                            {" "}
                            {props.grandParentName}{" "}
                        </NavLink>
                        <FaAngleDoubleLeft />{" "}
                        <NavLink to={`${props.grandParentPath}${props.parentPath}`}>
                        {props.parentName}
                        </NavLink>{" "}
                        <FaAngleDoubleLeft />{" "}
                        {props.title}
                    </>
                )}
                {props.parentPath !== "/" && !props.grandParentPath && (
                    <>
                    {console.log("props.parentPath")}
                    {console.log(props.parentPath)}
                    {console.log('here 2')}

                        <NavLink to={"/"}>{"עמוד הבית"}</NavLink> 
                        <FaAngleDoubleLeft /> 
                        <NavLink to={`/${props.parentPath}`}> {props.parentName} </NavLink>
                        <FaAngleDoubleLeft /> 
                        {props.title}
                    </>
                )}
                {props.parentPath == '/' && !props.grandParentPath && (
                    <>
                        {console.log('here 3')}

                        <NavLink to={`${props.parentPath}`}>
                            {" "}
                            {props.parentName}{" "}
                        </NavLink>
                        {" "}
                        <FaAngleDoubleLeft />{" "}
                            {" "}
                            {props.title}{" "}
                    </>
                )
                    
                }
            </div>
        </section>
    );
};

export default SinglePagesHero;
