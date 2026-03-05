import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesShowcase from './components/ServicesShowcase';
import VisionMission from './components/VisionMission';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Impact from './components/Impact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import './styles/App.css';

function HomePage() {
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

function ServiceDetailPage() {
  return (
    <div className="App">
      <Navbar />
      <ServiceDetail />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
