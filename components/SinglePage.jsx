import React from 'react'
import PostsArchivePage from './PostsArchivePage'
import ProjectsArchivePage from './ProjectsArchivePage'
import { FaAngleDoubleDown } from "react-icons/fa";
import Form from './Form'
import WhyUs from './WhyUs'
import SinglePagesHero from './SignlePagesHero';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SingleProject from './SingleProject'
import SingleBlogPost from './SingleBlogPost'


function SinglePage(props) {

	const router = useRouter();


	const RenderHTML = (text, classes) => {
		const htmlPart = text;
		return <div className={classes} dangerouslySetInnerHTML={{ __html: htmlPart }} />;
	};
	

  return (
    <div style={props.style} className={`singlePage ${props.isArchive ? 'archivePage' : ''}`}>
      {
	  props.isArchive 
	  &&
	  props?.page?.url == '/showcase' ? <ProjectsArchivePage projects={props?.projects}/> : props?.page?.url == '/blog'
	  ?
	  <PostsArchivePage posts={props?.posts}/>
	  : 
	  props?.page?.url !== '/blog' && router.query.pageSlug == 'blog'
	  ?
	  <SingleBlogPost post={props.page} posts={props.posts}/>
	  :
	  props?.page?.url !== '/blog' && router.query.pageSlug == 'showcase'
	  ? 
	  <SingleProject page={props.page} projects={props.projects}/>
	  : 
	  <>
			<Head>
				<title>{props.pageData?.acf.page_title}</title>
				<meta name='description' content={props.pageData?.acf.meta_desc}/>
			</Head>
			<section className='pageHero aligned-start column p-r-100 p-b-100'>
				<video autoPlay muted loop src={props.pageData?.acf.background_video}></video> 
				{RenderHTML(props?.pageData?.acf?.pre_content, 'f-size-r-1-5 m-b-50')}
				<div>
				<Form wrapperStyle={{ margin:'0 auto'}} formStyle={'lineForm'}/>
				</div>
				<div className="scrollDown">
					<i className="iconupDown">
						<FaAngleDoubleDown />
					</i>
				</div>
			</section>
			<WhyUs title={props?.pageData?.title?.rendered} reasons={props?.pageData?.acf?.reasons}/>
			<section className='contentWrapper'>
				<h2>עוד מידע על {props?.pageData?.title?.rendered}</h2>
				{props?.pageData?.acf?.page_content && props?.pageData?.acf?.page_content?.map(
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
			<Form formStyle={'lineForm m-b-150'}/>
		</>
	  
	  	
      }
    </div>
  )
}

export default SinglePage
