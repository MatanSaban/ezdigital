import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../../../components/Loader';
import SinglePagesHero from '../../../components/SignlePagesHero';
import { getHeritage } from '../../api/functions';
import SinglePage from '../../../components/SinglePage';


function ChildPage(props) {
    const router = useRouter()
    const childSlug = router.asPath;
    const [page, setPage] = useState();
    const [pageData, setPageData] = useState();
    const [parent, setParent] = useState();
    const [grandParent, setGrandParent] = useState();
    const [greatGrandParent, setGreatGrandParent] = useState();
    const [heritage, setHeritage] = useState();
    const [isArchive, setIsArchive] = useState(false);

    
    const apiPages = props?.navMenu?.items;

    const getPageById = (id) => {
        apiPages.forEach((pageItem) => {
            if (pageItem.id === id) {
                return pageItem;
            }
        })
    } 
    
    
    const checkExistance = () => {
        let existance = false;
        apiPages?.forEach((pageItem) => {
            if (pageItem?.children ) {
                pageItem?.children?.forEach((childItem) => {
                    if (childItem?.children || childItem.url == '/branding') {
                        if (`${pageItem.url}${childItem.url}` === `${router.asPath}`) {
                            // console.log('here 4')
                            props?.pages?.forEach((p) => {
                                // console.log('here 5')
                                if (p.slug === router.query.childSlug) {
                                    // console.log('here 6')
                                    setPageData(p);
                                }
                        })
                            existance = true;
                            setPage(childItem);
                        }
                        childItem?.children?.forEach((grandChildItem) => {
                            if (`${pageItem.url}${childItem.url}` === `${router.asPath}`) {
                                props?.pages?.forEach((p) => {
                                    if (p.slug === router.query.childSlug) {
                                        setPageData(p);
                                    }
                                })
                                existance = true;
                                setPage(childItem);
                            }
                        })
                    }
                })
            }
        })
        if (!existance) {
            props?.projects?.forEach((project) => {
                if (project.acf.link_title === router.query.childSlug) {
                    setPage(project)
                    setIsArchive(true)
                    existance = true
                }
            })
        }
        if (!existance) {
            props?.posts?.forEach((post) => {
                if (post.acf.slug === router.query.childSlug) {
                    setPage(post)
                    setIsArchive(true)
                    existance = true
                }
            })
        }
        return existance
    }

    useEffect(() => {
        setHeritage(getHeritage(page, apiPages));
        
    },[page])

    useEffect(() => {
        if (heritage) {
            Object.keys(heritage).forEach((heritageItem) => {
                    
                switch (heritageItem) {
                    case 'greatGrandParent' :
                        setGreatGrandParent(heritage[heritageItem]);
                        break;
                    case 'grandParent' :
                        setGrandParent(heritage[heritageItem]);
                        break;
                    case 'parent' : 
                        setParent(heritage[heritageItem]);
                        break;
                }
            })
        }
    },[heritage])


    useEffect(() => {
        checkExistance();
        if (!checkExistance()) {
            if (props.navMenu && props.projects) {
                if (!checkExistance()) { 
                    router.push('/404');
                }
            }
        }
    },[props.navMenu, props.projects, props.posts, router, props.pages, pageData])
    
    

  return (
    <div className='pageContainer'>
        {!page ? <Loader/> : 
            <>
                { isArchive && router.query.pageSlug == 'showcase' ? null : page && <SinglePagesHero title={ page?.title && !page?.title?.rendered ? page.title : page?.title?.rendered} childObj={page} parentObj={parent} /> }
                <SinglePage style={isArchive ? {paddingTop: "122px"} : {paddingTop:'200px', marginTop:'-25px'}} page={page} pageData={pageData} isArchive={isArchive} posts={props.posts} projects={props.projects}/>
            </>
        }
    </div>
  )
}


export default ChildPage
