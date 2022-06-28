import "./home.css";
import Svg from "../Special/Logo/Svg.jsx";
import Section from "../Special/Section/Section";
import Lottie from "lottie-react";
import one from "./one.json";
import two from "./two.json";
import three from "./three.json";
import four from "./four.json";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    Parallax,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectsJson from "../Projects/Projects.json";
import { NavLink } from "react-router-dom";
import Json from '../Header/MenuItems.json'

// const dataToString = JSON.stringify(ProjectsJson);
// const data = JSON.parse(dataToString);
// console.log(data.Project1.description);
// console.log(<pre>{{d}}</pre>);

const testimonials = {
    testimonial: {
        name: "מיכל ארווץ",
        title: "בעלת סטודיו פילאטיס בשרון",
        text: "מתן האלוף דאג לכל מה שהייתי צריכה כדי להקפיץ את העסק בכמה רמות בזמן קצר מאוד. ממליצה!",
    },
    testimonial2: {
        name: "אורית אבלס",
        title: "בעלת חנות תכשיטים אינטרנטית",
        text: "מתן מאיזי דיגיטל בנה לי את האתר החדש שלי אחרי שנים של שירות מפה לאוזן.. \nלא האמנתי לאן זה יכול להגיע, אני מאוד מרוצה.",
    },
    testimonial3: {
        name: "ישראל טבכר",
        title: "בעל חברת רימרקטינג",
        text: "על איזי דיגיטל שמעתי מספר פעמים לפני שהחלטתי לבנות אצלם את האתר שלי,\nהחלטתי שהמלצה זה מספיק בשבילי ואכן האתר נבנה ונמסר בתוך שבוע בלבד.",
    },
    testimonial4: {
        name: "איתי סניור",
        title: "בעל חברת הובלות במרכז",
        text: "איזי דיגיטל עזרו לי בתקופת הקורונה להחזיק את עסק ההובלות שלי מעל המים,\nברגע שעברנו את הקורונה כל העבודה הקשה התחילה להשתלם עוד יותר.",
    },
    testimonial5: {
        name: "אמיר סאלח",
        title: "בעל מכון קעקועים בצפון",
        text: "התחלתי לעבוד עם מתן באמצע תקופת הקורונה רק מתוך התעניינות אם כדאי בכלל כדאי לפרסם בתקופה הזו..\nהיום אחרי חצי שנה אני יכול להגיד שזו ההחלטה העסקית הטובה ביותר שעשיתי בתקופה הזו.",
    },
};

const Home = () => {
    return (
        <main className="pageWrapper">
            <section id="hero">
                {/* <img src={LOGO} alt="Easy Digital Logo" width={1000}/> */}
                <Svg />

                <h1 className="centerText primaryColor">
                    חברה לבניית אתרים, פרסום ומיתוג.
                </h1>
                <h2 className="centerText">
                    אנחנו מאמינים בשירות, מקצועיות ושקיפות
                    <br />
                    ומבטיחים לספק לך אתר, פרסום ומיתוג שישרתו אותך לעוד המון
                    שנים.
                </h2>
            </section>
            {/* <section style={{display:'flex', width:'50%', justifyContent:'space-evenly', margin:'0 auto'}}>
          
            </section> */}
            <section
                id="services"
                className="centerText"
                style={{ width: "1200px", margin: "0 auto" }}
            >
                <h2
                    style={{
                        color: "var(--color-primary)",
                        fontWeight: "400",
                        fontSize: "2.5rem",
                    }}
                >
                    דיגיטל? אנחנו נעשה את זה קל!
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                    חברת Easy Digital הינה משרד פרסום דיגיטלי המעניק היקף רחב של
                    פתרונות דיגיטל שהעסק שלך חייב. תחומי ההתמחות של החברה הינם:
                    עיצוב גרפי ומיתוג לעסקים, קידום אורגני SEO, קידום ממומן PPC,
                    פרסום ממומן ברשתות החברתיות, בניית אסטרטגיה דיגיטלית לעסקים
                    ובניית אתרי תדמית, חנויות אונליין ואתרי תוכן.
                </p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                {Object.keys(Json.Services.Submenu).map((keyName, index) => {
                    return (
                        <div className="service" style={{display:'flex', flexDirection:'column', alignItems:'center', alignContent:'center'}}>
                            
                            {Json.Services.Submenu[keyName].rel === 'one' && <Lottie animationData={one} loop={true} style={{ maxWidth: "500px" }}/>}
                            {Json.Services.Submenu[keyName].rel === 'two' && <Lottie animationData={two} loop={true} style={{ maxWidth: "500px" }}/>}
                            {Json.Services.Submenu[keyName].rel === 'three' && <Lottie animationData={three} loop={true} style={{ maxWidth: "500px" }}/>}
                            {Json.Services.Submenu[keyName].rel === 'four' && <Lottie animationData={four} loop={true} style={{ maxWidth: "500px" }}/>}
                            
                            <NavLink to={Json.Services.Submenu[keyName].link}><h2>{Json.Services.Submenu[keyName].text}</h2></NavLink>

                            {Json.Services.Submenu[keyName].subSubmenu && (
                                <ul style={{margin:'0', display:'flex', flexDirection:'column', alignItems:'flex-start', alignContent:'center', justifyContent:'center', padding:'0 5px 0 0 '}}>
                                    {Object.keys(
                                        Json.Services.Submenu[keyName]
                                            .subSubmenu
                                    ).map((keyname) => {
                                        return (
                                            <NavLink to={`${Json.Services.Submenu[keyName].link}${Json.Services.Submenu[
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
            </section>
            <section
                id="projects"
                className="centerText projectsSection"
                style={{ width: "1000px", margin: "0 auto" }}
            >
                <h2
                    style={{
                        color: "var(--color-primary)",
                        fontWeight: "400",
                        fontSize: "2.5rem",
                    }}
                >
                    הפרויקטים האחרונים שלנו
                </h2>
                <Swiper
                    // install Swiper modules
                    modules={[Parallax, Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    speed={600}
                    // autoplay={true}
                    // delay={300}
                    loop={true}
                    parallax={true}
                    pagination={{ clickable: true }}
                    style={{ height: "100%" }}
                >
                    {Object.keys(ProjectsJson).map((projectName, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="projectHomepage"
                                    style={{
                                        background: `url(${ProjectsJson[projectName].backgroundImage})`,
                                    }}
                                >
                                    <div className="projectHomepageCover">
                                        <h3>
                                            {ProjectsJson[projectName].name}
                                        </h3>
                                        <pre>
                                            <p>
                                                {
                                                    ProjectsJson[projectName]
                                                        .description
                                                }
                                            </p>
                                        </pre>
                                        <NavLink
                                            to={`/projects${ProjectsJson[projectName].link}`}
                                        >
                                            מעבר לפרויקט
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
            <section
                id="testimonials"
                className="centerText"
                style={{ width: "1000px", margin: "0 auto" }}
            >
                <h2
                    style={{
                        color: "var(--color-primary)",
                        fontWeight: "400",
                        fontSize: "2.5rem",
                    }}
                >
                    מילה טובה, מניסיון!
                </h2>

                <div className="testimonialsContainer">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay={true}
                        loop={true}
                        delay={300}
                        pagination={{ clickable: true }}
                    >
                        {Object.keys(testimonials).map((keyName, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`testimonial testimonial${index}`}
                                    >
                                        <h3>{testimonials[keyName].name}</h3>
                                        <h4>{testimonials[keyName].title}</h4>
                                        <pre>
                                            <p>{testimonials[keyName].text}</p>
                                        </pre>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section>
            <section
                id="blog"
                className="centerText"
                style={{ width: "1000px", margin: "0 auto" }}
            >
                <h2
                    style={{
                        color: "var(--color-primary)",
                        fontWeight: "400",
                        fontSize: "2.5rem",
                    }}
                >
                    ידע שווה זהב
                </h2>
            </section>
        </main>
    );
};

export default Home;
