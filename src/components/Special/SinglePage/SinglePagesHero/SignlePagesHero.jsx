import TypeWriterEffect from "react-typewriter-effect";
import "./singlepageshero.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SinglePagesHero = (props) => {

    console.log(props);

    return (
        <section className="singlePageHero">
            <TypeWriterEffect
                textStyle={{ fontFamily: "Danidin" }}
                startDelay={100}
                cursorColor="transparent"
                text={props.title}
                typeSpeed={100}
            />
            <div className="breadCrumbs">
                {props.grandParentPath && (
                    <>
                        <NavLink to={"/"}>{"עמוד הבית"}</NavLink>{" "}
                        <FaAngleDoubleLeft />{" "}
                        <NavLink to={props.grandParentPath}>
                            {" "}
                            {props.grandParentName}{" "}
                        </NavLink>
                        <FaAngleDoubleLeft />{" "}
                    </>
                )}
                {props.parentPath !== "/" && !props.grandParentPath ? (
                    <>
                        <NavLink to={"/"}>{"עמוד הבית"}</NavLink>{" "}
                        <FaAngleDoubleLeft />{" "}
                        <NavLink to={props.parentPath}>
                            {" "}
                            {props.parentName}{" "}
                        </NavLink>
                    </>
                ) : (
                    <NavLink to={`${props.grandParentPath}${props.parentPath}`}>
                        {" "}
                        {props.parentName}{" "}
                    </NavLink>
                )}{" "}
                <FaAngleDoubleLeft /> {props.title}
            </div>
        </section>
    );
};

export default SinglePagesHero;
