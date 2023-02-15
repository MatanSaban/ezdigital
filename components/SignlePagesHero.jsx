import { FaAngleDoubleLeft } from "react-icons/fa";
import { useEffect } from "react";
import Link from "next/link";

const SinglePagesHero = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      },[] )
    return (
        <section className="singlePageHero">
            <h1>{props?.title ? props.title : props?.childObj?.acf?.post_title}</h1>
            <div className="breadCrumbs">
                {/* <FaAngleDoubleLeft /> */}
                {props?.greatGrandParentObj && // great grand parent, grand parent and parent
                    <>
                        <Link href={'/'}>עמוד הבית</Link>
                        <FaAngleDoubleLeft />
                        <Link href={props.greatGrandParentObj.url}>{props.grandParentObj.title}</Link>
                        <FaAngleDoubleLeft />
                        <Link href={`${props.grandParentObj.url}${props.parentObj.url}`}>{props.parentObj.title}</Link>
                        <FaAngleDoubleLeft />
                        <Link href={`${props.greatGrandParentObj.url}${props.grandParentObj.url}${props.parentObj.url}`}>{props.parentObj.title}</Link>
                        <FaAngleDoubleLeft />
                        <span>{props?.title ? props.title : props?.childObj?.acf?.post_title}</span>
                    </>
                }
                {!props?.greatGrandParentObj && props?.grandParentObj && // only grand parent and parent 
                    <>
                        <Link href={'/'}>עמוד הבית</Link>
                        <FaAngleDoubleLeft />
                        <Link href={props.grandParentObj.url}>{props.grandParentObj.title}</Link>
                        <FaAngleDoubleLeft />
                        <Link href={`${props.grandParentObj.url}${props.parentObj.url}`}>{props.parentObj.title}</Link>
                        <FaAngleDoubleLeft />
                        <span>{props?.title ? props.title : props?.childObj?.acf?.post_title}</span>
                    </>
                }
                {!props?.greatGrandParentObj && !props?.grandParentObj && props?.parentObj && // only parent 
                    <>
                        <Link href={'/'}>עמוד הבית</Link>
                        <FaAngleDoubleLeft />
                        <Link href={props?.parentObj?.url}>{props?.parentObj?.title}</Link>
                        <FaAngleDoubleLeft />
                        <span>{props?.title ? props.title : props?.childObj?.acf?.post_title}</span>
                    </>
                }
                {!props?.greatGrandParentObj && !props?.grandParentObj && !props?.parentObj && props?.childObj?.acf && // parent is blog page
                    <>
                        <Link href={'/'}>עמוד הבית</Link>
                        <FaAngleDoubleLeft />
                        <Link href={'/blog'}>הבלוג</Link>
                        <FaAngleDoubleLeft />
                        <span>{props?.title ? props.title : props?.childObj?.acf?.post_title}</span>
                    </>
                }
                {!props?.greatGrandParentObj && !props?.grandParentObj && !props?.parentObj && !props?.childObj?.acf && // parent is home page
                    <>
                        <Link href={'/'}>עמוד הבית</Link>
                        <FaAngleDoubleLeft />
                        <span>{props?.title ? props.title : props?.childObj?.acf?.post_title}</span>
                    </>
                }
            </div>
        </section>
    );
};

export default SinglePagesHero;
