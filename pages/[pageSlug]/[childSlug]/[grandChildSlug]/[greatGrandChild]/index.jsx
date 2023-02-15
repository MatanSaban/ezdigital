import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../../../../../components/Loader';
import SinglePagesHero from '../../../../../components/SignlePagesHero';
import { getHeritage } from '../../../../api/functions.js';


function GrandChildPage(props) {
    const router = useRouter()
    const greatGrandChildSlug = router.asPath;
    const [page, setPage] = useState();
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
        let exist = false;
        apiPages?.forEach((pageItem) => {
            if (pageItem?.children) {
                pageItem?.children?.forEach((childItem) => {
                    if (childItem?.children) {
                        childItem?.children?.forEach((grandChildItem) => {
                            if (grandChildItem?.children) {
                                grandChildItem?.children?.forEach((greatGrandChildItem,index) => {
                                    console.log("`${pageItem.url}${childItem.url}${grandChildItem.url}${greatGrandChildItem.url}`");
                                    console.log(`${pageItem.url}${childItem.url}${grandChildItem.url}${greatGrandChildItem.url}`);
                                        if (`${pageItem.url}${childItem.url}${grandChildItem.url}` === `${greatGrandChildSlug}`) {
                                            setPage(grandChildItem); // example: https://website.com/grandParent/Parent/child set child Object as current page
                                            exist = true;
                                        }
                                })
                            } 
                        })
                    }
                })
            }
        })
        if (!exist) {
            // redirect to 404
            if (router.query.pageSlug !== '404') {
                router.push('/404');
            }
        }
    }

    useEffect(() => {
        setHeritage(getHeritage(page, apiPages));
        
    },[page])
    useEffect(() => {
        if (heritage) {
            Object.keys(heritage).forEach((heritageItem) => {
                    
                switch (heritageItem) {
                    case 'greatGrandParent' :
                        // console.log('here 1');
                        setGreatGrandParent(heritage[heritageItem]);
                        break;
                    case 'grandParent' :
                        // console.log('here 2');
                        setGrandParent(heritage[heritageItem]);
                        break;
                    case 'parent' : 
                    // console.log('here 3');
                        setParent(heritage[heritageItem]);
                        break;
                }
            })
        }
    },[heritage])
    // apiPages?.some((x) => x.slug === grandChildSlug ? setPage(x) : null /* dont forget to make redirect to 404 */);

    // const hasParent = () => {
    //     page?.parent !== 0 ? setParent(page.parent) : null
    // }
    // const hasGrandParent = () => {
    //     apiPages?.some((page) => page.id === parent ? 
    //     page.parent !== 0 ? setGrandParent(page.parent) : null
    //     : null)
    // }
    // const hasGreatGrandParent = () => {
    //     apiPages?.some((page) => page.id === grandParent ? 
    //     page.parent !== 0 ? setGreatGrandParent(page.parent) : null
    //     : null)
    // }

    useEffect(() => {
        // console.log("useeffect is running");
        checkExistance();
        // if (page) {
        //     hasParent;
        // }
        // if (parent) {
        //     hasGrandParent;
        // }
        // if (grandParent) {
        //     hasGreatGrandParent;
        // }
    })
    

  return (
    <div className='pageContainer'>
        {greatGrandChildSlug}
        {!page ? <Loader/> : 
            <SinglePagesHero title={page?.title ? page.title : page?.Archive?.name} childObj={page} parentObj={parent} grandParentObj={grandParent} />
        }
    </div>
  )
}


export default GrandChildPage
