import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Certificates from './Components/Certificates.js';
import Skills from './Components/Skills.js'
import Footer from './Components/Footer.js';
import Projects from './Components/Projects.js';

function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Certificates />
            <Skills />
            <Projects/>
            <Footer/>
        </div>
    );
}
export default App;