import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import ContentLoader from './ContentLoader';
import Lottie from "lottie-react";
import one from "../public/anims/one.json";
import two from "../public/anims/two.json";
import three from "../public/anims/three.json";
import four from "../public/anims/four.json";



function ServicesPage(props) {
  return (
    <>
        <Head>
            <title>{props.pageData?.acf.page_title}</title>
            <meta property="og:title" content={props.pageData?.acf.page_title} />
            <meta property="og:description" content={props.pageData?.acf.meta_desc}/>
            <meta property="og:image" content={'/static/favicon.svg'}/>
        </Head>
        <div id="servicesPage" className='p-t-200'>
                <section className="column centered" id="services">
                            <div className="row space-around w-p-90">
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
        </div>
    </>
  )
}

export default ServicesPage
