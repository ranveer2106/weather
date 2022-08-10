import './App.css';
import Footer from './components/footer';
import Body from './components/homebody';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Sidebars from './components/sidebars';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="RANVIR" />
        <Sidebars />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Body class="project" btn="btn" appear="pNo fadeUp dis" />} />
          <Route exact path=" " element={<Body class="project" btn="btn" appear="pNo fadeUp dis" />} />
          <Route exact path="/portfolio" element={<Body class="project" btn="btn" appear="pNo fadeUp dis" />} />
          <Route exact path="/projects" element={<Projects class="project" btn="btn" appear="pNo fadeUp" />} />
          {/* <Route/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
