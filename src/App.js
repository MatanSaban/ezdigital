import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/Blog/Blog.jsx";
import WebDevelopment from "./components/Services/WebDevelopment.jsx";
import SingleProject from "./components/Projects/SingleProject.jsx";



function App() {


    return (
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="Projects" element={<Projects />} ></Route>
            <Route exact path="Projects/:link" element={<SingleProject />} ></Route>
            <Route exact path="Services" element={<Services />} ></Route>
            <Route exact path="Services/web-development" element={<WebDevelopment />} ></Route>
            <Route exact path="Blog" element={<Blog />} ></Route>
            <Route exact path="Contact" element={<Contact />} ></Route>
            {/* <Route path="*" element={<Page404 />} ></Route> */}
          </Routes>
          <Footer />
          

        </div>
    );
}

export default App;
