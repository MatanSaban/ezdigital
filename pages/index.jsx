import Head from "next/head";
import Link from "next/link";
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
import Logo from "../components/Logo";
import Lottie from "lottie-react";
import one from "../public/anims/one.json";
import two from "../public/anims/two.json";
import three from "../public/anims/three.json";
import four from "../public/anims/four.json";
import { useMediaQuery } from 'react-responsive'; 
import { useEffect, useState } from "react";
import {RenderHTML} from './api/functions.js';
import ContentLoader from "../components/ContentLoader";


export default function Home(props) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` }); 
    const settings = props.homepage;
    const [forceLoader, setForceLoader] = useState(true);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
      
    useEffect(() => {
        setForceLoader(true);
        setTimeout(() => {
            window.scrollTo(0, 0)
        },500)
        setTimeout(() => {
            setForceLoader(false);
        },700)
    },[])

    return (
        <div id="home" className="wrapper">
            {settings && 
                <>
                <Head>
                    <title>{settings.acf.page_title}</title>
                    <meta name='description' content={settings.acf.meta_desc}/>
                </Head>
                    {/* Hero */}
                    <section className="hero column centered">
                        <div className="Logo w-p-60 p-10">
                            <Logo />
                        </div>
                        <h1 className="txt-center">{settings.acf.h1_title}</h1>
                        <p className="txt-center f-size-r-2">{RenderHTML(settings.acf.sub_title)}</p></section>
                    {/* End Of Hero */}
                    {/* Services */}
                    <section className="column centered" id="services">
                        <h2 className="txt-center f-size-r-2-5">{settings.acf.services_title}</h2>
                        <p className="txt-center p-l-r-150 f-size-r-1-3">{RenderHTML(settings.acf.services_text)}</p>
                        <div className="row space-around w-p-70">
                            {
                                !props?.navMenu ? <ContentLoader/> : props?.navMenu?.items[1]?.children?.map((service,index) => {
                                    index = index + 1;
                                    return (
                                        <div key={service.id} className="column centered p-relative">
                                            <Lottie
                                                animationData={index === 1 ? one : index === 2 ? two : index === 3 ? three : index === 4 ? four : null}
                                                loop={true}
                                                style={{ maxWidth: "500px" }}
                                            />
                                            <Link className="txt-primary-color f-size-r-2 p-relative" href={`/services${service.url}`}>{service.title}</Link>
                                            {service.children ? 
                                            <ul>
                                                {service.children.map((serviceChild) => {
                                                    return (
                                                        <li key={serviceChild.id} className="txt-black f-size-r-1-2 p-relative"><Link href={`/services${service.url}${serviceChild.url}`}>{serviceChild.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                            : null}
                                            
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    </section>
                    {/* End Of Services */}

                    {/* Projects */}
                    <section
                        id="projects"
                        className="txt-center projectsSection p-relative"
                        style={{ width: "1000px", margin: "0 auto" }}
                    >
                        <h2 className="f-size-r-2-5">{settings.acf.projects_title}</h2>
                        {props?.projectsLoading ? <ContentLoader/> : <Swiper
                            // install Swiper modules
                            modules={[Parallax, Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            speed={600}
                            autoplay={true}
                            delay={300}
                            loop={true}
                            parallax={true}
                            pagination={{ clickable: true }}
                            style={{ height: "100%" }}
                        >
                            {props.projects.map((projectItem) => {
                                return (
                                    <SwiperSlide key={projectItem?.id}>
                                        <div className="projectHomepage" style={{background: `url(${projectItem?.acf?.featured_image?.url})`}}>
                                            <div className="projectHomepageCover">
                                                <h3>{projectItem?.acf?.project_name}</h3>
                                                {RenderHTML(projectItem?.acf?.short_description_about_client)}
                                                <Link href={`/showcase/${projectItem?.acf?.link_title}`}>מעבר לפרויקט</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>}
                    </section>
                    {/* End Of Projects */}

                    {/* Recommendations */}
                    <section id="testimonials" className="txt-center p-relative m-l-r-auto m-t-0 m-b-0" style={{ width: "1000px"}}>
                        <h2 className="txt-primary-color f-size-r-2-5 f-weight-400" > {settings.acf.recommandations_title} </h2>

                        {props?.homePageLoading ? <ContentLoader/> : 
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
                                {settings.acf.recommandations.map((recommandation, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={`testimonial testimonial_${index}`} >
                                                <h3>{recommandation.name}</h3>
                                                <h4>{recommandation.role}</h4>
                                                {RenderHTML(recommandation.text)}
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>}
                    </section>
                    {/* End Of Recommendations */}

                    {/* Posts */}
                    <section id="blog"  className="txt-center p-relative" style={{ width: "1000px", margin: "0 auto" }} >
                        <h2 style={{color: "var(--color-primary)", fontWeight: "400", fontSize: "2.5rem",}}>{settings.acf.blog_title}</h2>
                        {props?.postsLoading ? <ContentLoader/> : <div className="articles">
                            <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={100}
                            slidesPerView={!isMobile ? 2: 1}
                            navigation
                            loop={true}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            >
                                {props.posts && props.posts.map(
                                    (postItem, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="article" style={{background: `url(${postItem.acf.featured_image})`,}}>
                                                    <Link href={`/blog/${postItem.acf.slug}`}>
                                                        <div className="articleCover">
                                                            {postItem.acf.post_category.map((category, index) => {
                                                                    return (
                                                                        <div className="categoryTag" key={category.term_id}><span>{category.name}</span></div>
                                                                    );
                                                                }
                                                            )}
                                                            <h3>{postItem.acf.post_title}</h3><button>מעבר לכתבה</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    }
                                )}
                            </Swiper>
                        </div>}
                    </section>
                    {/* End Of Posts */}
                </>
            }
        </div>
    );
}
