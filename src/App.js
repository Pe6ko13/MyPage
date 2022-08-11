import './App.css';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                {/* <HashRouter basename='/MyPage'> */}
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<ProjectDisplay />} />
                    <Route path='/experience' element={<Experience />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            {/* </HashRouter> */}
        </div>
    );
}

export default App;
