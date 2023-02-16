import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Form from './Form';
import SinglePagesHero from './SignlePagesHero';
import Head from 'next/head';

function SingleBlogPost(props) {
	const router = useRouter();
	const link = router.query.childSlug
	const posts = props?.posts;
	// const post = props?.post?.acf;

	const [twoArticles, setTwoArticles] = useState([]);
    const [currentArticleNumber, setCurrentArticleNumber] = useState([]);
	const [post, setPost] = useState(null);


    const pageLoad = () => {
        setTimeout(() => {
            setTwoArticles(posts);
            window.scrollTo(0, 0);
        }, 500);
    };


	useEffect(() => {
        const checkCurrentBlogPos = () => {
            window.scrollTo(0, 0);
            const currentPost = posts && posts.find(post => post.acf.slug === link);
            currentPost && setPost(currentPost.acf);

            let indexes = [];
            posts && posts.map((post, index) => {
                if (post.acf.slug === link) {
                    setCurrentArticleNumber(index);

                    if (index === 0) {
                        indexes = [null, index + 1];
                    } else if (index + 1 <= posts.length - 1) {
                        indexes = [index - 1, index + 1];
                    } else if (index + 1 > posts.length - 1) {
                        indexes = [index - 1, null];
                    }

                    
                }
                return setTwoArticles(indexes);
            });
        };

        checkCurrentBlogPos();
    }, [posts, link]);

	const RenderHTML = (text) => {
        const htmlPart = text;
        return <div dangerouslySetInnerHTML={{ __html: htmlPart }} />;
    };

	
  return (
	<>
		<Head>
			<title>{post?.post_title}</title>
			<meta property="og:title" content={post?.post_title} />
			<meta property="og:description" content={post?.pre_post_content}/>
			<meta property="og:image" content={post?.featured_image}/>
		</Head>
		
		<div id="singleBlog" className="singleBlogWrapper">
				{props?.post && 
				<>
					<section className="hero">
						{/* <SinglePagesHero
							title={post && post.post_title}
							parentName={props.parentName}
							parentPath={props.parentPath}
						/> */}
						<div className="heading txt-center">
							<h2>{post && post.pre_post_title}</h2>
							<div>{RenderHTML(post && post.pre_post_content)}</div> 
						</div>
					</section>
					<section
						className="blogContent"
						style={{
							background: `url(${post && post.featured_image})`,
						}}
					>
						<div className="sections contentWrapper">
							{post?.post_content.map(
								(section, index) => {
									return (
										<div className="contentSection" key={index}>
											<h3>
												{
													section.content_1.title
												}
											</h3>
											{RenderHTML(
												section.content_1.text
											)}
										</div>
									);
								}
							)}
						</div>
					</section>
					<section
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							minHeight: "fit-content",
							marginTop: "100px",
						}}
					>
						<Form
							formStyle={"longForm"}
							title={
								<>
									<h3>רוצה לדבר איתנו?</h3>
									<p>פרטים בקטנה וכבר נחזור אליך!</p>
								</>
							}
						/>
					</section>
					<section className="nextandprevblogpostsWrapper">
						<div className="nextandprevblogposts">
							{twoArticles &&
								twoArticles.map((i, index) => {
									return (
										posts[i] !== undefined && (
											<Link
												onClick={() => pageLoad}
												className={
													i > currentArticleNumber
														? "prevBlog"
														: "nextBlog"
												}
												key={index}
												href={`/blog/${
													posts[i] &&
													posts[i].acf.slug
												}`}
											>
												<div
													style={{
														background: `url(${
															posts[i] &&
															posts[i].acf.featured_image
														})`,
													}}
												>
													<div className="blogItemCover">
														<h3>
															{posts[i] &&
																posts[i].acf.post_title}
														</h3>
														<button>מעבר לכתבה</button>
													</div>
												</div>
											</Link>
										)
									);
								})}
						</div>
					</section>
				</>}
			</div>
		</>
  )
}

export default SingleBlogPost
