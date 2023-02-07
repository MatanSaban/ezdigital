import './loader.css';
import Logo from "../Logo/Svg.jsx";


const Loader = (props) => {



    return (
        <div className={`loaderLogo ${props && props.ready ? 'sizeAndRoll' : 'loaderLogoNotReady'}`}>
            <Logo/>
            <div>
                טוען לך את התוכן...
            </div>
        </div>
    );
}

export default Loader;