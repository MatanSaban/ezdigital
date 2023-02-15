import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader';
import SinglePagesHero from '../../components/SignlePagesHero';
import SinglePage from '../../components/SinglePage'
import Contact from '../../components/Contact.jsx'
import ServicesPage from '../../components/ServicesPage.jsx'

function Page(props) {
    const router = useRouter()
    const pageSlug = router.asPath;
    const [isArchive, setIsArchive] = useState(false);
    const [page, setPage] = useState();
    const [pageData, setPageData] = useState();
    const [parent, setParent] = useState();
    const [grandParent, setGrandParent] = useState();
    const [greatGrandParent, setGreatGrandParent] = useState();
    
    const apiPages = props?.navMenu?.items;
    console.log('pageSlug');
    console.log(pageSlug);

    const getPageById = (id) => {
        apiPages.forEach((pageItem) => {
            if (pageItem.id === id) {
                return pageItem;
            }
        })
    } 
    


    const checkExistance = () => {
        let existance = false;
        let isArchive = false;
        apiPages?.forEach((pageItem) => {
            if (`${pageItem.url}` === pageSlug) {
                existance = true;
                setPage(pageItem);
                props?.pages?.forEach((p) => {
                        if (p.slug === router.query.pageSlug) {
                            setPageData(p);
                        }
                })
            } else if (pageSlug == '/blog' || pageSlug == '/showcase') {
                setIsArchive(true)
                isArchive = true;
            } else {
                props?.postTypes?.forEach((postType) => {
                    if (postType.slug == router.query.pageSlug) { 
                        setIsArchive(true)
                        isArchive = true;
                    }
                })

            }
        })
        if (!isArchive) {
            setIsArchive(false);
        } else {
            setIsArchive(true);
        }
        return existance
    }


    useEffect(() => {
        // console.log('use effect index of pageSlug');
        checkExistance();
        if (!checkExistance()) {
            if (props.navMenu) {
                if (!checkExistance()) {
                    router.push('/404');
                }
            }
        }
    },[props.navMenu, router, isArchive, props.pages, pageData])
    

  return (
    <div className='pageContainer'>
        {/* {page.title} */}
        {!page  ? <Loader/> : 
            <>
                <SinglePagesHero title={page?.title ? page.title : page?.Archive?.name} childObj={page} />
                {
                page.url == '/contact' ? <Contact page={page} pageData={pageData}/> : page.url == '/services' ? <ServicesPage navMenu={props?.navMenu}/> :
                <SinglePage style={{paddingTop:'200px', marginTop:'-25px'}} page={page} pageData={pageData} isArchive={isArchive} projects={props?.projects} posts={props?.posts}/>
                }
            </>
        }
    </div>
  )
}


export default Page
