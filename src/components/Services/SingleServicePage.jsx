import "./web-development/webdevelopment.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { useEffect } from "react";
import WhyUs from "./WhyUs";
import Form from "../Special/Form/Form";
import './singleservicepage.css';
import SinglePagesHero from "../Special/SinglePage/SinglePagesHero/SignlePagesHero";
import { useState } from "react";
import Loader from "../../components/Special/Loader/Loader";


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
    // console.log(props);

    const [forceLoader, setForceLoader] = useState(true);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   },)
      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },800)
        setTimeout(() => {
            setForceLoader(false);
        },1000)
    },[props.page])


    return (
        <div id="SingleServicePage" className="SingleServicePage singleService">
            {forceLoader ? <Loader/> : null}
            <SinglePagesHero
                title={props.page.title.rendered}
                parentName={props.page.acf.parentName}
                parentPath={props.page.acf.parentPath}
                grandParentName={props.page.acf.grandParentName}
                grandParentPath={props.page.acf.grandParentPath}
            />
            <video autoPlay muted loop>
                <source src={props && props.page.acf.background_video} />
            </video>
            <div className="SingleServicePage__hero">
            {RenderHTML(props.page.acf.pre_content)}
                <div>
                <Form wrapperStyle={{ margin:'0 auto'}} formStyle={'lineForm'}/>
                </div>
                <div className="scrollDown">
                    <i className="iconupDown">
                        <FaAngleDoubleDown />
                    </i>
                </div>
            </div>
            {props.page.acf.reasons && <WhyUs title={props.page.title.rendered} reasons={props.page.acf.reasons}/>}
            <div className="singleServicePageWrapper">
                <section className="contentWrapper">
                    <h2>עוד מידע על {props.page.title.rendered}</h2>

                    {props.page.acf.page_content.map(
                        (section, index) => {
                            return (
                                <div key={index} className='contentSection' >
                                    <h3>{section.title}</h3>
                                    {RenderHTML(section.content)}
                                    
                                </div>
                            );
                        }
                    )}
                </section>
                <div style={{position:'relative'}}>
                <Form formStyle={'lineForm'}/>
                </div>
            </div>
        </div>
    );
};

export default SingleServicePage;
