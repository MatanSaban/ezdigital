import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

function MainMenu(props) {
    const mobileView = props.mobileView;
    const tabletView = props.tabletView;  

    const router = useRouter();

  return (
   
        <>
        
        {props?.navMenu?.items?.map((navItem) => {
            return (
                <li key={navItem.id} className="w-p-100 p-relative">
                    {(mobileView || tabletView) && <Link className={`w-p-100 f-size-r-3 f-weight-800 txt-white ${navItem.id}`}  onClick={navItem.id == '17921' ? props.subMenuToggle : props.menuToggle} href={(navItem.id == '17921') ? `${router.asPath}` : (navItem.id !== '17921') ? navItem.url : null}>{navItem.title}</Link>}
                    {(!mobileView && !tabletView) && <Link href={navItem.url} className="w-p-100 f-size-r-3 f-weight-800 txt-white" >{navItem.title}</Link>}
                    {navItem.children ? 
                        <ul className="d-none p-absolute w-p-100 p-t-20 p-r-0 txt-start">
                            {navItem.children.map((childItem) => {
                                return (
                                    <li key={childItem.id} className="p-r-10 m-0 p-b-10 p-t-10 p-relative p-0 w-p-100 f-size-r-1-2">
                                        <Link className="w-p-100 d-block" href={`${navItem.url}${childItem.url}`}>{childItem.title}</Link>
                                        {childItem.children ? 
                                            <ul className="d-none p-absolute right-100 w-fit top-0" style={(!mobileView && !tabletView) ? {minWidth:"80%"} : null}>
                                                    {childItem?.children?.map((grandChildren) => {
                                                    return (
                                                        <li key={grandChildren.id} className="w-p-100 p-b-10 p-t-10 m-0 p-r-10 f-size-r-1-2"><Link className="w-p-100 d-block" href={`${navItem.url}${childItem.url}${grandChildren.url}`}>{grandChildren.title}</Link></li>
                                                    )
                                                })}
                                            </ul> : null
                                        }
                                    </li>
                                )
                                
                            })}
                        </ul> : null}
                    
                </li>
            )
        })}
        </>
  )
}

export default MainMenu
