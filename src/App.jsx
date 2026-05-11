import { useEffect } from 'react'; // Add useEffect
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ... other imports
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CompanyProfile from './pages/CompanyProfile';
// 🔍 ADD THESE TWO IMPORTS:
import SoilScience from './pages/SoilScience';
import ResultsPage from './pages/ResultsPage';
import EUMarket from './pages/EUMarket'; // 1. Import it
import FAQ from './pages/FAQ';

// 🔍 THE UTILITY COMPONENT
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // We use a small timeout to ensure the DOM has finished rendering
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, go to the top (useful when switching pages)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run whenever the path or hash changes

  return null;
}

function App() {
  return (
    <Router>
      {/* 🔍 PLACE IT HERE - Inside Router but outside Routes */}
      <ScrollToHash /> 
      
{/* 🔍 THE FIX: Applied the 3-point gradient here */}
      <div 
        className="min-h-screen w-full flex flex-col overflow-x-hidden"
        style={{ 
          background: 'linear-gradient(180deg, #eed9c4 0%, #8f9779 50%, #667b68 70%)',
          backgroundAttachment: 'fixed' // Keeps the gradient static while you scroll
        }}
      >
        <Navbar />
        
        <main className="flex-grow bg-transparent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/soil-science" element={<SoilScience />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/eu-market" element={<EUMarket />} />
          </Routes>
        </main>
        
        <footer className="py-10 text-center text-[#FFFFF0]/60 text-sm bg-[#667b68]">
          © 2026 NIBO Manufacturing Co. | Built with Vite + React
        </footer>
      </div>
    </Router>
  );
}

export default App;