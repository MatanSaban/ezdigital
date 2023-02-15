import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../../../../components/Loader';
import SinglePagesHero from '../../../../components/SignlePagesHero';
import { getHeritage } from '../../../api/functions';
import SinglePage from '../../../../components/SinglePage';


function GrandChildPage(props) {
    const router = useRouter()
    const grandChildSlug = router.asPath;
    const [page, setPage] = useState();
    const [pageData, setPageData] = useState();
    const [parent, setParent] = useState();
    const [grandParent, setGrandParent] = useState();
    const [greatGrandParent, setGreatGrandParent] = useState();
    const [heritage, setHeritage] = useState();
    
    const apiPages = props?.navMenu?.items;
    // console.log(grandChildSlug);

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
            if (pageItem?.children) {
                pageItem?.children?.forEach((childItem) => {
                    if (childItem?.children) {
                        childItem?.children?.forEach((grandChildItem) => {
                            if (`${pageItem.url}${childItem.url}${grandChildItem.url}` === `${grandChildSlug}`) {
                                props?.pages?.forEach((p) => {
                                    if (p.slug === router.query.grandChildSlug) {
                                        setPageData(p);
                                    }
                                })
                                existance = true;
                                setPage(grandChildItem); // example: https://website.com/grandParent/Parent/child set child Object as current page
                            }
                        })
                    } 
                })
            }
        })
        return existance
    }

    useEffect(() => {
        setHeritage(getHeritage(page, apiPages));
        console.log(getHeritage(page, apiPages));
        
    },[page])
    useEffect(() => {
        if (heritage) {
            Object.keys(heritage).forEach((heritageItem) => {
                    
                switch (heritageItem) {
                    case 'greatGrandParent' :
                        console.log('here 1');
                        setGreatGrandParent(heritage[heritageItem]);
                        break;
                    case 'grandParent' :
                        console.log('here 2');
                        setGrandParent(heritage[heritageItem]);
                        break;
                    case 'parent' : 
                    console.log('here 3');
                        setParent(heritage[heritageItem]);
                        break;
                }
            })
        }
    },[heritage])
  

    useEffect(() => {
        checkExistance();
        if (!checkExistance()) {
            if (props.navMenu) {
                if (!checkExistance()) {
                    router.push('/404');
                }
            }
        }
    },[props.navMenu, router, props.pages])
    

  return (
    <div className='pageContainer'>
        {!page ? <Loader/> : 
            <>
                <SinglePagesHero title={page?.title ? page.title : page?.Archive?.name} childObj={page} parentObj={parent} grandParentObj={grandParent} />
                <SinglePage style={{paddingTop:'200px', marginTop:'-25px'}} page={page} pageData={pageData}/>
            </>
        }
    </div>
  )
}


export default GrandChildPage
