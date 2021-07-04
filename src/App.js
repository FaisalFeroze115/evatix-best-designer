import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Packages from "./components/Packages"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <div className="top_container">
        <Header/>
        <Hero/>
      </div>
      <Packages/>
      <Footer/>
    </div>
  );
}

export default App;

// #1A4CED
// #8EB7FB
