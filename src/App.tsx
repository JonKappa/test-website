import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Route, Routes } from 'react-router-dom';

function App()
{
    return (
        <>
            <Nav/>
            <div className="container">
                <Routes>
                    <Route path="/test-website/" element={<Home/>}/>
                    <Route path="/test-website/projects" element={<Projects/>}/>
                    <Route path="/test-website/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
