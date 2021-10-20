import React from 'react'; 
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';


export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <Resume /> 
            <Contact /> 
        </main>
    )
}