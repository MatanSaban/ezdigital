import './Form.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Form = (props) => {

    const form = useRef();

    const [emailPopup, setEmailPopup] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vubtku7', 'template_c8j177q', form.current, 'Y02FzGPyxlG7vKb5e')
          .then((result) => {
            setEmailPopup(true)
                setTimeout(() => {
                    setEmailPopup(false)
                }, 2000)
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    


    return (
        <div className="formWrapper" style={props.wrapperStyle}>
            {emailPopup && <div className='popup'>
                <h1>ההודעה נשלחה בהצלחה, ניצור איתך קשר בקרוב מאוד!</h1>
            </div>}
            <div className='heading'>
            {props.title}
            </div>
            <form ref={form} onSubmit={sendEmail} className={props.formStyle}>
                <div className="inputs">
                    <input
                        type="text"
                        placeholder="שם פרטי"
                        id="userFirstName"
                        name="userFirstName"
                        required
                    />
                    <input
                        type="text"
                        placeholder="שם משפחה"
                        id="userLastName"
                        name="userLastName"
                        required
                    />
                    <input
                        type="text"
                        placeholder="מספר נייד"
                        id="userMobilePhone"
                        name="userMobilePhone"
                        required
                    />
                    <input
                        type="email"
                        placeholder="אימייל"
                        id="userEmail"
                        name="userEmail"
                        required
                    />
                </div>
                {
                    props.whatAreWeGoingToTalkAbout && 
                    <div className='whatWeAreGoingToTalkAbout'>
                    <p>על מה נדבר?</p>
                    <div className="checkboxes">
                        <span className="checkbox">
                            <input type="checkbox" name="website" id="website" />
                            בניית אתר
                        </span>
                        <span className="checkbox">
                            <input type="checkbox" name="google" id="google" />
                            פרסום בגוגל
                        </span>
                        <span className="checkbox">
                            <input type="checkbox" name="social" id="social" />
                            פרסום ברשתות החברתיות
                        </span>
                        <span className="checkbox">
                            <input type="checkbox" name="branding" id="branding" />
                            מיתוג עסקי
                        </span>
                        <span className="checkbox">
                            <input type="checkbox" name="else" id="else" />
                            משהו אחר
                        </span>
                    </div>
                </div>
                }
                <button style={!props.whatAreWeGoingToTalkAbout ? {marginBottom:'20px', width:'91%'}: {marginBottom:'0'}}>שליחה</button>
            </form>
        </div>
    );
};

export default Form;
