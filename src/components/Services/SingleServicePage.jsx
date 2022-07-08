import "./Web-development/webdevelopment.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { ImList } from "react-icons/im";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Json from "./ServicesData.json";
import WhyUs from "./WhyUs";
import Form from "../Special/Form/Form";


// const htmlDiv=document.querySelector('div');
// const htmlPart='<p>Welcome to this <strong>page</strong></p>'
// htmlDiv.innerHTML='json';


const RenderHTML=(text)=>{
	const htmlPart=text
    return(
      <div dangerouslySetInnerHTML={ {__html: htmlPart} } />
    )
}



const SingleServicePage = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div id="SingleServicePage" className="SingleServicePage">
            <video
                autoPlay
                muted
                loop
                style={{
                    height: "95vh",
                    width: "75vw",
                    position: "absolute",
                    left: "0",
                    top: "5vh",
                    zIndex: "-1",
                    objectFit: "cover",
                }}
            >
                <source src={Json[props.path].video} />
            </video>
            <div className="SingleServicePage__hero">
                {props.pageHeading}
                <div>
                <Form wrapperStyle={{ margin:'0 auto'}} formStyle={'lineForm'}/>
                </div>
                <div className="scrollDown">
                    <i className="iconupDown">
                        <FaAngleDoubleDown />
                    </i>
                </div>
            </div>
            {props.reasons && <WhyUs title={props.title} reasons={props.reasons}/>}
            <div className="singleServicePageWrapper">
                <section className="contentWrapper">
                    <h2>עוד מידע על {props.title}</h2>

                    {Object.keys(Json[props.path].content).map(
                        (keyName, index) => {
                            return (
                                <div
                                    key={index}
                                    className='contentSection'

                                    // style={{ background: "red", margin: "10px" }}
                                >
                                    <h3>
                                        {
                                            Json[props.path].content[keyName]
                                                .title
                                        }
                                    </h3>
                                        
                                        {/* <p><pre> */}
                                            { RenderHTML(Json[props.path].content[
                                                    keyName
                                                ].paragraph)
                                                
                                            }
                                        {/* </pre></p> */}
                                    
                                </div>
                            );
                        }
                    )}
                </section>
                {/* <section className=""> */}
                <div style={{position:'relative'}}>
                <Form formStyle={'lineForm'}/>
                </div>
                {/* </section> */}
            </div>
        </div>
    );
};

export default SingleServicePage;