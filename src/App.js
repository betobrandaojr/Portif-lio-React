import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Pages/Navbar';
import About from './Components/Pages/About';  // Alterado de 'Abaut' para 'About'
import Certificates from './Components/Pages/Certificates';
import Footer from './Components/Pages/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={About} />
            <Route path="/Certificates" component={Certificates} />
            <Footer />
        </Router>
    );
}

export default App;
