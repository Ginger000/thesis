import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import WebHome from './pages/WebHome';
import Analogy from './pages/Analogy';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
import FutureIndustry from './pages/FutureIndustry';
import Introduction from './pages/Introduction';
import Physics from './pages/Physics';
import System from './pages/System';
import Thanks from './pages/Thanks';
import Travel from './pages/Travel';
import CatalogueLScre from './component/CatalogueLScre';
import CatalogueMSScre from './component/CatalogueMSScre';
import DemoCard from './component/DemoCard';
import DemoThubnailData from './component/assets/DemoThubnailData';



function App() {

  return (
    <Router>
                <main className='container' >
                    <Routes>
                        <Route path="/" element={<WebHome />} />
                        <Route
                            path="/introduction"
                            element={<Introduction />}
                        />
                        <Route path="/theory/analogy" element={<Analogy />} />
                        <Route path="/theory/system" element={<System />} />
                        <Route path="/theory/Physics" element={<Physics />} />
                        <Route path="/practice/demo-1" element={<Demo1 />} />
                        <Route path="/practice/demo-2" element={<Demo2 />} />
                        <Route path="/practice/demo-3" element={<Demo3 />} />
                        <Route path="/practice/travel" element={<Travel />} />
                        <Route
                            path="/practice/futureIndustry"
                            element={<FutureIndustry />}
                        />
                        <Route path="/practice/thanks" element={<Thanks />} />
                    </Routes>
                </main>
            

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
                <div className="fast-access">
                    {DemoThubnailData.map((demo, idx) => (
                        <DemoCard
                            key={idx}
                            buttonName={demo.buttonName}
                            title={demo.title}
                            description={demo.description}
                            img={demo.img}
                        />
                    ))}
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
            </Router>
  );
}



export default App;
