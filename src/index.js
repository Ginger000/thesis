import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import gif0 from '../src/component/assets/gif-thumbnail-demo-1.gif';
import gif1 from '../src/component/assets/gif-thumbnail-demo-2.gif';
import gif2 from '../src/component/assets/gif-thumbnail-demo-3.gif';
import reportWebVitals from './reportWebVitals';
import CatalogueLScre from './component/CatalogueLScre';
import CatalogueMSScre from './component/CatalogueMSScre';
import DemoCard from './component/DemoCard';
import DemoThubnailData from './component/assets/DemoThubnailData';

function Overlay() {
    return (
        <div className="overlay">
            <a
                href="https://pmnd.rs/"
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: 90,
                    fontSize: '13px',
                }}
            >
                pmnd.rs
                <br />
                dev collective
            </a>
            <header>
                <nav className="navbar">
                    <CatalogueLScre />
                    <CatalogueMSScre />
                </nav>
                <div className='fast-access'>
                  {DemoThubnailData.map((demo, idx) => <DemoCard key={idx} buttonName={demo.buttonName} title={demo.title} description={demo.description} img={demo.img} />)}
                </div>
            </header>


            <div
                style={{
                    position: 'absolute',
                    bottom: 40,
                    right: 40,
                    fontSize: '13px',
                }}
            >
                07/02/2022
            </div>
        </div>
    );
}

export default Overlay;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Overlay />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
