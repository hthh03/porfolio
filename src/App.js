import Navbar from "./components/NavBar/navbar"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Footer from "./components/Footer/footer"
import Education from "./components/Education/education";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
