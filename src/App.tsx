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
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
