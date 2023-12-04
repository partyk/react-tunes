import React, {useState} from "react";
// import image loga
import logo from '../assets/images/logo.svg'
// style
import './Homes.scss';

// React.FC lze použít jen u Arrow function
const Home: React.FC = () => {
    const [title] = useState('React, whee!!');

    return (
        <div className="home">
            <img className="logo" src={logo} alt="react logo" />

            <h1>{title}</h1>

            <p>
                Hot singles in your area. <br />
                Hotter react in your&nbsp;
                <a
                    href="https://legacy.reactjs.org/docs/getting-started.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    documentation
                </a>
                .
            </p>
        </div>
    );
};

export default Home;
