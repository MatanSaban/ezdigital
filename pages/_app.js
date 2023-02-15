import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Layout from './layout/layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useMediaQuery } from 'react-responsive'; 
import Head from 'next/head';


const mainUrl = process.env.WORDPRESS_ENDPOINT;
const NavigationMenus = process.env.WORDPRESS_MENUS_ENDPOINT;


function MyApp({ Component, pageProps }) {

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` }); 
  const isTablet = useMediaQuery({ query: `(min-width: 769px) and (max-width: 1024px)` }); 
  const isLaptop = useMediaQuery({ query: `(min-width: 1025px) and (max-width: 1824px)` }); 
  const isLScreen = useMediaQuery({ query: `(min-width: 1825px)` }); 

  const [homepage, setHomepage] = useState();
  const [pages, setPages] = useState();
  const [posts, setPosts] = useState();
  const [projects, setProjects] = useState();
  const [navMenu, setNavMenu] = useState();
  const [mobileView, setMobileView] = useState(isMobile);
  const [tabletView, setTabletView] = useState(isTablet);
  
  const [loading, setLoading] = useState(true);
  const [menuLoading, setMenuLoading] = useState(true);
  const [homePageLoading, setHomePageLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [pagesLoading, setPagesLoading] = useState(true);
  const [postTypes, setPostTypes] = useState();



  useEffect(() => {

    axios(`${NavigationMenus}/2`).then((res) => {
      setNavMenu(res.data);
      setMenuLoading(false)
    }).then(() => {
      axios(`${mainUrl}/pages/19525`).then((res) => {
        setHomepage(res.data);
        setHomePageLoading(false);
        setLoading(false); 
      }).then(() => {
        axios(`${mainUrl}/pages?per_page=100`).then((res) => {
          setPages(res.data);
          setPagesLoading(false);
          setLoading(false); 
        }).then(() => {
          axios(`${mainUrl}/showcase?per_page=100`).then((res) => {
            setProjects(res.data);
            setProjectsLoading(false);
            }).then(() => {
              axios(`${mainUrl}/posts?per_page=100`).then((res) => {
                setPosts(res.data);
                setPostsLoading(false);
              }).then(() => {
                axios(`${mainUrl}/types`).then((res) => {
                  const postTypes = res.data;
                  // console.log(postTypes);
                  let postTypesArray = [];
                  Object.keys(postTypes).forEach((postType) => {
                    if ( postType !== 'page' && postType !== 'attachment' && postType !== 'nav_menu_item' && postType !== 'wp_block' && postType !== 'wp_template' && postType !== 'wp_template_part' && postType !== 'wp_navigation') {
                      // console.log(postTypes[postType]);
                      postTypesArray.push(postTypes[postType])
                    }
                  })
                  setPostTypes(postTypesArray);
                  setPostsLoading(false);
                })
              })
            })
        })
      })
    })


  },[])

  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.svg"/>
    </Head>
    {loading ? <Loader/> : null}
      <Header navMenu={navMenu} mobileView={mobileView} tabletView={tabletView} isLaptop={isLaptop} isLScreen={isLScreen} />
      <Layout>
        <Component {...pageProps} postTypes={postTypes} navMenu={navMenu} menuLoading={menuLoading} homePageLoading={homePageLoading} projectsLoading={projectsLoading} postsLoading={postsLoading} loading={loading} mobileView={mobileView} tabletView={tabletView} isLaptop={isLaptop} isLScreen={isLScreen} homepage={homepage} pages={pages} posts={posts} projects={projects} />
      </Layout>
      <Footer navMenu={navMenu} posts={posts} projects={projects}/>
    </>
  )
}

export default MyApp
