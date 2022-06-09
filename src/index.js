import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'
import gif1 from '../src/component/assets/gif-thumbnail-demo-1.gif'
import gif2 from '../src/component/assets/gif-thumbnail-demo-2.gif'
import gif3 from '../src/component/assets/gif-thumbnail-demo-3.gif'
import reportWebVitals from './reportWebVitals';
// import Overlay from './component/Overlay';

function Overlay() {
  return (
    <div className='overlay'>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      {/* <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div> */}
      <div className='dropdown'>
        {/* <button style={{background: 'transparent', border:"none", padding:'1rem', fontSize:'1rem', color:'white'}}>THEORY</button> */}
        <button className='dropbtn'>THEORY</button>
        <div className='dropdown-content'>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className='dropdown-demo1'>
        <button className='dropbtn'>DEMO-1</button>
        <div className='dropdown-content'>
          <a href="#">
            <h5>Demo-1: Collective Urban Development </h5>
            <p className='preview-text'>An agent-based model of the relationship of urban development pattern and solar radiation energy change, using cellar automata algorithm and earth surface energy theory. </p>
            <img src={gif1} alt="" />
          </a>
        </div>
      </div>

      <div className='dropdown-demo2'>
        <button className='dropbtn'>DEMO-2</button>
        <div className='dropdown-content'>
          <a href="#">
            <h5>Demo-2: Life Parameterization </h5>
            <p className='preview-text'> Wildlife migration and walking city: dynamic and complex system simulation </p>
            <img src={gif2} alt="" />
          </a>
        </div>
      </div>

      <div className='dropdown-demo3'>
        <button className='dropbtn'>DEMO-3</button>
        <div className='dropdown-content'>
          <a href="#">
            <h5>Demo-3: Green Stormwater Infrastructure Design Tool </h5>
            <p className='preview-text'> parameterize soil and precepitation and generate green stormwater Infrastructure design recommendation </p>
            <img src={gif3} alt="" />
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>07/02/2022</div>
    </div>
  )
}

export default Overlay

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
