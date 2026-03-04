import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesShowcase from './components/ServicesShowcase';
import VisionMission from './components/VisionMission';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Impact from './components/Impact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main className="App-main">
        <About />
        <ServicesShowcase />
        <VisionMission />
        <WhyWorkWithUs />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
