import Link from 'next/link'
import React from 'react'

function PostsArchivePage(props) {
    const posts = props.posts;
  return (
        <div id="blogPage" className="blogWrapper">
            <div className="articles">
                {
                    posts && posts.map((post,index) => {
                        let toReturn = null;
                        toReturn = (
                            <div key={index} className='article' style={{background:`url(${post.acf.featured_image})`}}>
                                <Link href={`/blog/${post.acf.slug}`}>
                                <div className="articleCover">
                                    {
                                        post.acf.post_category.map((category, index) => {
                                            if (category.name !== 'הבלוג') {
                                                return (
                                                    <div className="categoryTag" key={category.term_id}>
                                                         <span>{category.name}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    <h3>{post.acf.post_title}</h3> 
                                    <button>מעבר לכתבה</button>
                                </div>
                                </Link>
                            </div>
                        )
                        return toReturn;
                    })
                }
            </div>
        </div>
  )
}

export default PostsArchivePage
