import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const myVariable = process.env.REACT_APP_MY_VARIABLE;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>5조 프론트엔드 리액트 테스트 페이지</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <p>myVariable</p>
            </header>
        </div>
    );
}

export default App;
