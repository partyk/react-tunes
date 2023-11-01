import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Dude />
                <H2Title />
                <H3Title />
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function Dude() {
    return (
        <div>
            <h1>Dude</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Praesent </p>
        </div>
    )
}

// komponenta jako funkce
function H2Title() {
    return (
        <h2>
            H2 Title
        </h2>
    );
}

//  komponenta jako Class
class H3Title extends React.Component<any, any> {
    render() {
        return (
            <h3>
                H3 Title
            </h3>
        );
    }
}

export default App;
