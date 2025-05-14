import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/about-me/" element={<Home />} />
                <Route path="/about-me/experience" element={<Experience />} />
                <Route path="/about-me/skills" element={<Skills />} />
                <Route path="/about-me/projects" element={<Projects />} />
                <Route path="/about-me/achievements" element={<Achievements />} />
                <Route path="/about-me/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
