import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import Services from "./components/Services/Services.jsx";
import SingleServicePage from './components/Services/SingleServicePage';
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import SingleProject from "./components/Projects/SingleProject.jsx";
import Page404 from "./components/Special/404/Page404.jsx";
import { useState, useEffect } from "react";
import SingleBlog from "./components/Blog/SingleBlog.jsx";
import axios from "axios";
import Loader from "./components/Special/Loader/Loader.jsx";


function App() {
    const [projects, setProjects] = useState(null);
    const [posts, setPosts] = useState(null);
    const [pages, setPages] = useState(null);
    const [homepage, setHomepage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get("https://ezd-psg.ussl.co.il/wp-json/wp/v2/pages/19525")
            .then(function (response) {
                setHomepage(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get(
                "https://ezd-psg.ussl.co.il/wp-json/wp/v2/showcase?per_page=100"
            )
            .then(function (response) {
                setProjects(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("https://ezd-psg.ussl.co.il/wp-json/wp/v2/posts?per_page=100")
            .then(function (response) {
                setPosts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("https://ezd-psg.ussl.co.il/wp-json/wp/v2/pages?per_page=100")
            .then(function (response) {
                setPages(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    

    return (
        <div className="App"> 
        {homepage && posts && projects && pages ? null : <Loader ready={homepage && posts && projects && pages}/>}
            { 
            <>
            <Header />
            <Routes>
                <Route exact path="/" element={ <Home pageName={"עמוד הבית"} homepage={homepage} posts={posts} projects={projects} pages={pages} />}></Route>

                <Route exact path="Projects" element={<Projects projects={projects} path={"Projects/:link"} pageName={"פרויקטים"} parentName={"עמוד הבית"} parentPath={"/"} />}></Route>
                <Route exact path="Projects/:link" element={<SingleProject projects={projects} />}></Route>
                <Route exact path="services" element={<Services path={"services"} pageName={"כל השירותים"} parentName={"עמוד הבית"} parentPath={"/"}/>}></Route>

                {pages &&
                    pages.map((page) => {
                        let toReturn = null;
                        if (
                            page.id !== 19153 &&
                            page.id !== 19607 &&
                            page.id !== 19525
                        ) {
                            if (page.parent && page.acf.grandParentName) {
                                toReturn = (
                                    <Route key={page.id} exact path={`${page.acf.grandParentPath}/${page.acf.parentPath}/${page.slug}`} element={
                                            <SingleServicePage page={page} />} />
                                );
                            } else if (page.parent && !page.acf.grandParentName) {
                                toReturn = (
                                    <Route key={page.id} exact path={`${page.acf.parentPath}/${page.slug}`} element={
                                            <SingleServicePage page={page} /> } />
                                );
                            }
                        }
                        return toReturn;
                    })}

                <Route exact path="Blog" element={<Blog posts={posts} path={"blog"} pageName={"הבלוג"} parentName={"עמוד הבית"} parentPath={"/"} /> } ></Route>
                <Route exact path="Blog/:link" element={<SingleBlog posts={posts} parentName={"הבלוג"} parentPath={"blog"} /> } ></Route>

                <Route exact path="Contact" element={<Contact path={"contact"} pageName={"יצירת קשר"} parentName={"עמוד הבית"} parentPath={"/"} /> } ></Route>

                <Route path="*" element={<Page404 />}></Route>
            </Routes>
            <Footer />
            </>}
        </div>
    );
}

export default App;
