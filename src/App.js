import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
