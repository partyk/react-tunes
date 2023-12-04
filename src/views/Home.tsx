import React, {useState, useEffect} from "react";
// import image loga
import logo from '../assets/images/logo.svg'
// style
import './Homes.scss';

// React.FC lze použít jen u Arrow function
const Home: React.FC = () => {
    // HOOKS funkce
    // useState vraci dvě hodnoty
    // title je proměná ze které se čte hodnota
    // setTitle je funkce pro zmenu stavu title
    // const [title, setTitle]
    const [title, setTitle] = useState<string>('React, whee!!');
    const [count, setCount] = useState(0);
    // The Effect Hook, useEffect, přidává možnost provádět vedlejší efekty z funkční komponenty. Slouží ke stejnému účelu jako componentDidMount, componentDidUpdate, a componentWillUnmountve třídách React, ale je sjednocený do jediného API. useEffect
    // https://legacy.reactjs.org/docs/hooks-effect.html
    // kdy se useEffect používá
    // - pracuje se DOMom
    // - přidává se evevntListener
    // - fetch, ajax, api
    // - setTimeout
    useEffect(() => {
        document.title = title;
    });
    // pravidla pro HOOKS musí být vždy v top levelu funkce nikdy zanořené.
    // nesmí být v podmínce v cyklu
    // musí být jen  v komponentnách nikdy mimo

    return (
        <div className="home">
            <img className="logo" src={logo} alt="react logo" />

            <h1
                onClick={() => setTitle('Balls')}
            >{title}</h1>

            <h2
                onClick={() => setTitle(prevState => prevState + '!')}
            >{title}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                {count}
            </button>

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
