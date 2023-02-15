import { BsCheckCircleFill } from "react-icons/bs";

const WhyUs = (props) => {
    return (
        <section id="whyUs" className="SingleServicePage__whyUs">
            <h2>למה כדאי לפנות אלינו לגבי {props.title}?</h2>
            <div>
                {props.reasons && props.reasons.map((reason, index) => {
                    return (
                        <span key={index}>
                            <BsCheckCircleFill />
                            {reason.title}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyUs;
