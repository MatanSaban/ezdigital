import './loader.css';
import Logo from "../Logo/Svg.jsx";

console.log(Logo);

const Loader = (props) => {



    return (
        <div className={`loaderLogo ${props && props.ready ? 'sizeAndRoll' : 'loaderLogoNotReady'}`}>
            <Logo/>
        </div>
    );
}

export default Loader;