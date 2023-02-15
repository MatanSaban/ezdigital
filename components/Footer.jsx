import Link from 'next/link';
import React from 'react'
import Form from './Form';
import Logo from './Logo'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useMemo, useRef, useState } from "react";



function Footer(props) {
	const [isElementVisible, setIsElementVisible] = useState(false);
	const ref = useRef();
	
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsElementVisible(entry.isIntersecting);
		});
		observer.observe(ref.current);
	})
	
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` }); 

  return (
            <footer className="centerText " ref={ref}> {/* row centered aligned-center p-l-r-50 */}
            <div className="footer__content">
                <div className="about">
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <p style={{ textAlign: "right"}}>
						אנו חברת פרסום דיגיטלי העוסקת בבניית אתרים בוורדפרס,<br/>בניית אתרים ואפליקציות בקוד מותאם אישית, 
                        <br />
                        פרסום אורגני, פרסום ממומן בגוגל,
                        <br /> פרסום ממומן ברשתות החברתיות,
                        <br /> ניהול דפי עסק ברשתות החברתיות, עיצוב גרפי ועוד.{" "}
                    </p>
                </div>
                <div className="quickLinks">
                    <h3>ניווט מהיר</h3>
                    <ul style={{ textAlign: "right" }}>
                        {props?.navMenu?.items[1]?.children?.map((service) => {
                          return (
							<li key={service.id}>
								<Link href={`${props?.navMenu?.items[1].url}${service?.url}`}>{service?.title}</Link>
								{	
									service?.children && 
									<ul>
										{service?.children?.map((subService) => {
											return (
												<li key={subService.id}>
													<Link href={`${props?.navMenu?.items[1].url}${service?.url}${subService?.url}`}>
													{subService?.title}
													</Link>
													{subService?.children && 
														<ul>
															{subService?.children?.map((subSubService) => {
																return (
																	<li key={subSubService.id}>
																		<Link href={`${props?.navMenu?.items[1].url}${service?.url}${subService?.url}${subSubService?.url}`}>{subSubService?.title}</Link>
																	</li>
																)
															})}
														</ul>
													}
												</li>
											)
										})}
									</ul>
								}
                          	</li>
						  )
                        })}
                    </ul>
                </div>
                <div className="projects">
                    <h3>פרויקטים</h3>
                    <ul style={{ textAlign: "right" }}>
                        {props?.projects?.map((project) => {
                            return (
                                <li key={project?.id}>
                                    <Link href={`/showcase/${project?.acf?.link_title}`} >
                                        {project?.acf?.project_name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="blog">
                    <h3>הבלוג</h3>
                    <ul style={{ textAlign: "right" }}>
                        {props?.posts?.map(
                            (post,index) => {
                                return (
                                    <li key={index}> <Link href={`/blog/${post?.acf?.slug}`}> {post?.acf?.post_title}</Link></li>
                                );
                            }
                        )}
                    </ul>
                </div>
                
            </div>
            <div className="formHolderWrapper" ref={ref}>
                <div className="formHolder"  style={ isElementVisible ? {background:'transparent', width:'100%', margin:'0 auto', position:'initial', left:'0', bottom:'0'} : {background: 'linear-gradient( 180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 70%) )',width:'50%', margin:'0 auto', position:'fixed', left:'0', bottom:'0', width:'100%'}} >
                    <Form parent={'footer'} isElementVisible={isElementVisible} whatAreWeGoingToTalkAbout={true} wrapperStyle={{width:'50%', margin:'0 auto'} } formStyle={'fullWidthForm lineForm'} title={<><h3>קליק קטן לאדם, צעד גדול לעסק.</h3></>}/>
                </div>
            </div>
        <div className="copyrights txt-center">כל הזכויות שמורות לEasy Digital</div>
        </footer>

  )
}

export default Footer
