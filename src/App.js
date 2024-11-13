import choppy from "./assets/image/chopper.svg";
import "./assets/style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-header">
        <img src={choppy} className="App-logo" alt="logo" />
      </section>
      <section className="section-info">
        <Presentation />
        <Skills />
      </section>
      <section className="Projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
