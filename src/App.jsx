import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Educations from "./components/Educations.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div>
                <Navbar />
            </div>
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/educations" element={<Educations />} />
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
