import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Portfolio/>
    </div>
  );
}

export default App;
